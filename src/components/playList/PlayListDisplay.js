import React, { useEffect, useState } from 'react'
import SongCard from '../songs/SongCard'
import SongListItem from '../songs/SongListItem'
import { getAllSongs } from '../songs/SongsHelper'
import Loader from '../util/Loader'

import Base from '../core/Base'


const AllSongsContainer = ({ loading, songs, title }) => {

    const [clicked, setClicked] = useState(false);
    const [clickedDetails, setClickedDetails] = useState({})
    const [clickedSongIndex, setClickedSongIndex] = useState(0)

    useEffect(() => {
        document.title = 'All Songs'

    }, [])
    useEffect(() => {
        document.title = clickedDetails.title != undefined ? clickedDetails.title : "All Songs"
    }, [clicked])
    useEffect(() => {
        if (clicked) {
            console.log(songs.indexOf(clickedDetails) + "*************")
            setClickedSongIndex(songs.indexOf(clickedDetails))
        }
    }, [clicked])
    useEffect(() => {
        if (clicked) {
            setClicked(false)
            console.log("index is >>>>" + clickedSongIndex)

            setClickedDetails(songs[clickedSongIndex % (songs.length)])

            console.log("changed yesss!*********")
            setTimeout(() => {
                setClicked(true)
            }, 1000)
        }

    }, [clickedSongIndex])
    return (
        <div>
            <Base>
                {!clicked && <div className='page-title'>{title}</div>}
                {!loading && !clicked && songs.map((song) => {
                    return <SongListItem key={`${song.title}`} setClicked={setClicked} setClickedDetails={setClickedDetails} data={song} />
                })}
                {
                    !loading && clicked && <SongCard setClicked={setClicked}
                        data={clickedDetails}
                        setClickedSongIndex={setClickedSongIndex}
                        clickedSongIndex={clickedSongIndex} />
                }
                {
                    loading && <Loader />
                }


            </Base>
        </div>
    )
}

export default AllSongsContainer
