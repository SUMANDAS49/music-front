import React, { useState } from 'react'
import Base from '../../core/Base'

import { uploadSongApi } from '../AdminApiCall'
import "./addSongStyle.css"
const AddSong = () => {
    const [data, setData] = useState({
        title: "",
        song: "",
        year: "",
        singer: "",
        language: "",
        picture: ""

    })
    let fd = new FormData()
    const handleChange = (name, value) => {
        if (name === 'song' || name === 'picture') {
            setData({ ...data, [name]: value })

        }
        else {
            setData({ ...data, [name]: value })


        }

    }
    const handleSubmit = () => {
        console.log(data)
        fd.append("songFile", data.song)
        fd.append("title", data.title)
        fd.append("year", data.year)
        fd.append("singer", data.singer)
        fd.append("language", data.language)
        fd.append("pictureFile", data.picture)

        setData({ file: "", title: "", year: "", singer: "", language: "" })
        uploadSongApi(fd).then((res) => {

            console.log(res)
        })
    }
    return (

        <div className='add-song-container'>
            <span></span>
            <input type={'file'} onChange={(e) => { handleChange('song', e.target.files[0]) }} />
            <input type={'file'} onChange={(e) => { handleChange('picture', e.target.files[0]) }} />
            <input className='text-input' value={data.title} placeholder='title of the song' onChange={(e) => { handleChange('title', e.target.value) }} />
            <input className='text-input' value={data.language} placeholder='Language' onChange={(e) => { handleChange('language', e.target.value) }} />
            <input className='text-input' value={data.year} placeholder='year' onChange={(e) => { handleChange('year', e.target.value) }} />
            <input className='text-input' value={data.singer} placeholder='singer' onChange={(e) => { handleChange('singer', e.target.value) }} />

            <button className='submit-button' onClick={() => { handleSubmit() }}>Submit</button>
        </div>

    )
}

export default AddSong
