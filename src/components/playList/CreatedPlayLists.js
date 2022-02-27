import React, { useEffect, useState } from 'react'
import queryString from "query-string"
import { getAdminPlayListSongsAPICall } from './AdminPlayListHelper'
import PlayListDisplay from "./PlayListDisplay"
const CreatedPlayLists = () => {
    const [songs, setSongs] = useState([])
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState("")
    useEffect(() => {
        let params = queryString.parse(window.location.search)
        console.log(params)
        getAdminPlayListSongsAPICall(params.id).then((res) => {
            setSongs(res?.playList?.songs)
            setTitle(res?.playList?.playListName)
            setLoading(false)
        })


    }, [])

    return (
        <div>
            <PlayListDisplay loading={loading} songs={songs} title={title} />
        </div>
    )
}

export default CreatedPlayLists