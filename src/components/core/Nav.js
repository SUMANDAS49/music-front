import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { getUserDetails, isAuthenticated, logoutHelper } from '../auth/AuthHelper'
import "./navStyle.css"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
const styleIcon = {

}
const Nav = () => {
    return (
        <div className='nav-container'>

            <div><Link to={"/"}><HomeRoundedIcon className='icon' fontSize='2.2rem' /></Link></div>
            <div><Link to={"/search"}><SearchRoundedIcon className='icon' fontSize='2.2rem' /></Link></div>
            <div><FavoriteBorderRoundedIcon className='icon' fontSize='30px' /></div>
            <div><SettingsRoundedIcon className='icon' fontSize={'2.2rem'} /></div>
        </div>


    )
}

export default Nav
