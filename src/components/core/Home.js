import React, { useEffect, useState } from 'react'
import SongCard from '../songs/SongCard'
import SongListItem from '../songs/SongListItem'
import { getAllSongs } from '../songs/SongsHelper'
import Loader from '../util/Loader'

import Base from './Base'
import { Link, Outlet } from 'react-router-dom'
import "./HomeStyles.css"

const Home = () => {
    const makeWish = () => {
        const date = new Date();
        let time = date.getHours()
        if (time >= 0 && time <= 4) {
            return "Good Evening!"
        }
        else if (time > 4 && time < 12) {
            return "Good Morning!"
        }
        else if (time >= 12 && time < 15) {
            return "Good Morning!"
        }
        else if (time >= 15) {
            return "Good Evening!"

        }
    }


    return (
        <Base>

            <div className='home-container'>
                <div className='wish-to-user'>
                    {makeWish()}
                </div>
                <div className='playlist-default'>

                    <Link style={{ textDecoration: "none" }} to="/allSongs"><div className='playlist-default-items'>All Songs</div></Link>
                    <div className='playlist-default-items'>All Songs</div>
                    <div className='playlist-default-items'>All Songs</div>
                    <div className='playlist-default-items'>All Songs</div>


                </div>
            </div>

        </Base >
    )
}

export default Home
