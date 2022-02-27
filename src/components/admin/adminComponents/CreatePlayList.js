import React, { useState, useEffect } from 'react'
import { getAllSongs } from '../../songs/SongsHelper'
import { createAdminPlayListAPI } from '../AdminApiCall'
import "./createAdminPlayListStyles.css"

const CreatePlayList = () => {
    const [allSongs, setAllSongs] = useState([])
    const [name, setName] = useState("")
    const [songs, setSongs] = useState([])
    const [apiRes, setApiRes] = useState({})
    const [done, setDone] = useState(false)
    const [error, setError] = useState(false)
    const [displaySubmit, setDisplaySubmit] = useState(false)
    useEffect(() => {
        getAllSongs().then((res) => {
            if (res?.error == false) {
                setAllSongs(res.songs)
            }
        })
    }, [])

    const selectSong = (id) => {
        console.log(id)
        setSongs([...songs, id])
        console.log(songs)
    }
    const unSelectSong = (id) => {
        const selectedSongs = songs
        let afterSong = []
        afterSong = selectedSongs.filter(s => s != id)
        setSongs(afterSong)
        console.log(songs)
    }
    const submitHandler = () => {
        createAdminPlayListAPI(songs, name).then((res) => {
            setApiRes(res)
            if (res?.error) {
                setError(true)
            }
            setDone(true)

        })
    }
    const playListItems = (data) => {
        return <div className='play-list-item'>
            <div>{data.title}</div>
            <input type="checkbox" onClick={(e) => { e.target.checked ? selectSong(data._id) : unSelectSong(data._id) }} />
        </div>
    }

    return (
        <div className='create-play-list-container'>

            {!done && <div className='create-play-list-form'>
                <span>Play list name:</span><input type="text" onChange={(e) => { setName(e.target.value) }} />
                <div >Select songs</div>
                <div className='play-list-container'>
                    {
                        allSongs.map((song) => {
                            return playListItems(song)
                        })
                    }
                </div>
                {name.length >= 1 && songs.length >= 1 && <button onClick={() => { submitHandler() }}>Submit</button>}
            </div>
            }
            {
                done && !error && <h1>Success</h1>
            }
            {
                done && error && <h1>Failed</h1>
            }
        </div>
    )
}



export default CreatePlayList