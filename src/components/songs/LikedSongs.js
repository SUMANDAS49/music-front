import React, { useState, useEffect } from 'react';
import Base from '../core/Base'
import Loader from '../util/Loader';
import SongCard from './SongCard';
import SongListItem from './SongListItem';

import { getLikedSongsFull } from './SongsHelper';

const LikedSongs = () => {
    const [songs, setSongs] = useState([])
    const [clicked, setClicked] = useState(false);
    const [clickedDetails, setClickedDetails] = useState({})
    const [loading, setLoanding] = useState(true);
    const [clickedSongIndex, setClickedSongIndex] = useState(0)
    useEffect(() => {
        getLikedSongsFull().then((res) => {
            // console.log(res)
            setSongs(res.songs)
            setLoanding(false)
        })
    }, [])
    useEffect(() => {
        if (clicked) {
            // console.log(songs.indexOf(clickedDetails) + "*************")
            setClickedSongIndex(songs.indexOf(clickedDetails))
        }
    }, [clicked])
    useEffect(() => {
        if (clicked) {
            setClicked(false)
            // console.log("index is >>>>" + clickedSongIndex)

            setClickedDetails(songs[clickedSongIndex % (songs.length)])

            // console.log("changed yesss!*********")
            setTimeout(() => {
                setClicked(true)
            }, 1000)
        }

    }, [clickedSongIndex])
    return (
        <div>
            <Base>
                {!loading && !clicked && songs.map((song) => {
                    return <SongListItem setClicked={setClicked} setClickedDetails={setClickedDetails} data={song} />
                })}
                {
                    !loading && clicked &&
                    <SongCard
                        setClicked={setClicked}
                        data={clickedDetails}
                        setClickedSongIndex={setClickedSongIndex}
                        clickedSongIndex={clickedSongIndex}
                    />
                }
                {
                    loading && <Loader />
                }


            </Base>
        </div>
    )
};

export default LikedSongs;
