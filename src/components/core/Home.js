import React, { useEffect, useState } from 'react'
import SongCard from '../songs/SongCard'
import SongListItem from '../songs/SongListItem'
import { getAllSongs } from '../songs/SongsHelper'
import Loader from '../util/Loader'

import Base from './Base'


const Home = () => {
    const [songs, setSongs] = useState([])
    const [clicked, setClicked] = useState(false);
    const [clickedDetails, setClickedDetails] = useState({})
    const [loading, setLoanding] = useState(true);
    useEffect(() => {
        getAllSongs().then((res) => {
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
}

export default Home
