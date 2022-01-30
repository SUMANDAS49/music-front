import React, { useEffect, useState } from 'react';
import "./songStyle.css"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const SongCard = ({ data, setClicked }) => {
    const [title, setTitle] = useState("")
    const [loading, setLoanding] = useState(true)
    useEffect(() => {
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
