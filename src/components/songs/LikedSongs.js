import React, { useState, useEffect } from 'react';
import Base from '../core/Base'
import SongCard from './SongCard';
import SongListItem from './SongListItem';

import { getLikedSongsFull } from './SongsHelper';
const LikedSongs = () => {
    const [songs, setSongs] = useState([])
    const [clicked, setClicked] = useState(false);
    const [clickedDetails, setClickedDetails] = useState({})
    useEffect(() => {
        getLikedSongsFull().then((res) => {
            // console.log(res)
            setSongs(res.songs)
        })
    }, [])
    return (
        <div>
            <Base>
                {!clicked && songs.map((song) => {
                    return <SongListItem key={`${song.title}`} setClicked={setClicked} setClickedDetails={setClickedDetails} data={song} />
                })}
                {
                    clicked && <SongCard setClicked={setClicked} data={clickedDetails} />
                }


            </Base>
        </div>
    )
};

export default LikedSongs;
