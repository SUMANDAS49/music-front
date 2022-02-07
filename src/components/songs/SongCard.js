import React, { useEffect, useState } from 'react';
import "./songStyle.css"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { likeSong, getLikedSongsById, unlikeSong } from './SongsHelper';

const SongCard = ({ data, setClicked }) => {
    const [title, setTitle] = useState("")
    const [loading, setLoanding] = useState(true)
    const [likedSongs, setLikedSongs] = useState([])
    const [likeStatus, setLikeStatus] = useState(false)
    const [changeDetector, setChangeDetector] = useState(false)
    const isLikedSong = () => {
        let flag = false;
        likedSongs.forEach((e) => {
            console.log("hello")
            if (e == data._id)
                flag = true
            setLikeStatus(flag)
        })

    }
    useEffect(() => {
        isLikedSong()
    }, [likedSongs])
    useEffect(() => {
        getLikedSongsById().then((res) => {
            if (res.error == false) {
                setLikedSongs(res.list)

            }
        })
        let dta = ""
        dta = data.title;
        if (dta.length < 15) {
            setTitle(data.title)
            setLoanding(false)
        }
        else {
            setTitle(dta.substring(0, 14) + "...")
            console.log(dta.substring(0, 14) + "...")
            setLoanding(false)
        }
    }, [])
    const likeHelper = () => {
        likeSong(data._id)
        setLikeStatus(true)

    }
    const unlikeHelper = () => {
        unlikeSong(data._id)
        setLikeStatus(false)
    }
    return <div >
        {
            !loading && (
                <div className='song-card-container'>
                    <div><KeyboardBackspaceIcon onClick={() => {
                        setClicked(false)
                    }} /></div>
                    <img className='image' src={data.pictureLink} alt='profile' />
                    <div className='title'>{title}</div>
                    <div className='singer-name'>{data.singer}</div>
                    {(!likeStatus) && <div className='like-button' onClick={() => {
                        likeHelper()
                    }}><FavoriteIcon /></div>}
                    {(likeStatus) && <div className='dislike-button' onClick={() => {
                        unlikeHelper()
                    }}><FavoriteIcon /></div>}
                    <audio className='audio-play' src={data.songLink} controls />
                </div>
            )

        }
        {
            loading && <h3>Loading...</h3>
        }

    </div>;
};

export default SongCard;
