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
    useEffect(() => {
        getLikedSongsFull().then((res) => {
            // console.log(res)
            setSongs(res.songs)
            setLoanding(false)
        })
    }, [])
    return (
        <div>
            <Base>
                {!loading && !clicked && songs.map((song) => {
                    return <SongListItem key={`${song.title}`} setClicked={setClicked} setClickedDetails={setClickedDetails} data={song} />
                })}
                {
                    !loading && clicked && <SongCard setClicked={setClicked} data={clickedDetails} />
                }
                {
                    loading && <Loader />
                }


            </Base>
        </div>
    )
};

export default LikedSongs;
