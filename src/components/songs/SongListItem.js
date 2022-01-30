import React from 'react';
import "./songStyle.css"
const SongListItem = ({ data, setClicked, setClickedDetails }) => {
    return <div className='song-list-item-container'
        onClick={() => {
            setClickedDetails(data)
            setClicked(true)
        }}
    >
        <img className='pic' src={data.pictureLink} />
        <div className='song-details-container' >
            <div className='song-name'>{data.title}</div>
            <div className='singer-name'>{data.singer}</div>
        </div>
    </div >;
};

export default SongListItem;
