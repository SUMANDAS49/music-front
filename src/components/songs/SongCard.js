import React from 'react';
import "./songStyle.css"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const SongCard = ({ data, setClicked }) => {
    return <div className='song-card-container'>
        <div><KeyboardBackspaceIcon onClick={() => {
            setClicked(false)
        }} /></div>
        <img className='image' src={data.pictureLink} />
        <div className='title'>{data.title}</div>
        <div className='singer-name'>{data.singer}</div>
        <audio src={data.songLink} controls />

    </div>;
};

export default SongCard;
