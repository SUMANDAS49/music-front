import React, { useEffect, useState } from 'react'
import SongCard from '../songs/SongCard'
import SongListItem from '../songs/SongListItem'
import { getAllSongs } from '../songs/SongsHelper'

import Base from './Base'


const Home = () => {
    const [songs, setSongs] = useState([])
    const [clicked, setClicked] = useState(false);
    const [clickedDetails, setClickedDetails] = useState({})
    useEffect(() => {
        getAllSongs().then((res) => {
            console.log(res)
            setSongs(res.songs)
        })
    }, [])
    return (
        <div>
            <Base>
                {!clicked && songs.map((song) => {
                    return <SongListItem setClicked={setClicked} setClickedDetails={setClickedDetails} data={song} />
                })}
                {
                    clicked && <SongCard setClicked={setClicked} data={clickedDetails} />
                }


            </Base>
        </div>
    )
}

export default Home
