import React, { useEffect, useState } from 'react'
import SongCard from '../songs/SongCard'
import SongListItem from '../songs/SongListItem'
import { getAllSongs } from '../songs/SongsHelper'
import Loader from '../util/Loader'

import Base from '../core/Base'


const AllSongsContainer = ({ loading, songs, title }) => {

    const [clicked, setClicked] = useState(false);
    const [clickedDetails, setClickedDetails] = useState({})

    useEffect(() => {
        document.title = 'All Songs'

    }, [])
    useEffect(() => {
        document.title = clickedDetails.title != undefined ? clickedDetails.title : "All Songs"
    }, [clicked])
    return (
        <div>
            <Base>
                {!clicked && <div className='page-title'>{title}</div>}
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

export default AllSongsContainer
