import React, { useEffect, useState } from 'react'

import Loader from '../util/Loader'

import Base from './Base'
import { Link, Outlet } from 'react-router-dom'
import "./HomeStyles.css"
import { getAllAdminPlayListAPICall } from '../playList/AdminPlayListHelper'
import { getUserDetails } from '../auth/AuthHelper'

const Home = () => {
    const [adminPlayLists, setAdminPlayList] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        document.title = "freetify"
        getAllAdminPlayListAPICall().then((res) => {
            if (!res?.error) {
                setAdminPlayList(res.allLists)
                setLoading(false)
            }

        })
    }, [])
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
            return "Good Afternoon!"
        }
        else if (time >= 15) {
            return "Good Evening!"

        }
    }


    return (
        <Base>

            <div className='home-container'>
                {
                    !loading && <>
                        <div className='wish-to-user'>
                            {makeWish() + "😉 "}<span className='user-name'>{` ${getUserDetails().name}...`}</span>
                        </div>
                        <div className='playlist-default'>

                            <Link style={{ textDecoration: "none" }} to="/allSongs"><div className='playlist-default-items'>All Songs</div></Link>
                            {
                                !loading && adminPlayLists.map((lsts) => {
                                    return (
                                        <Link style={{ textDecoration: "none" }} to={`/defaultPlayList?id=${lsts._id}`}>
                                            <div className='playlist-default-items'>
                                                {lsts.playListName}
                                            </div>
                                        </Link>
                                    )
                                })
                            }



                        </div>
                    </>}
                {
                    loading && <Loader />
                }
            </div>

        </Base >
    )
}

export default Home
