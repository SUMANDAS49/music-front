import React, { useEffect, useState } from 'react'
import SongCard from '../songs/SongCard'
import SongListItem from '../songs/SongListItem'
import { getAllSongs } from '../songs/SongsHelper'
import Loader from '../util/Loader'

import Base from '../core/Base'
import PlayListDisplay from "./PlayListDisplay"

const AllSongsContainer = () => {
    const [songs, setSongs] = useState([])

    const [loading, setLoanding] = useState(true);
    useEffect(() => {
        document.title = 'All Songs'
        getAllSongs().then((res) => {
            // console.log(res)
            setSongs(res.songs)
            setLoanding(false)
        })
    }, [])

    return (
        <div>
            <PlayListDisplay loading={loading} songs={songs} title={"All Songs"} />
        </div>
    )
}

export default AllSongsContainer
