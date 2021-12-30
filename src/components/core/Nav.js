import React, { useState } from 'react'
import { isAuthenticated } from '../auth/AuthHelper'
import "./navStyle.css"

const Home = () => {
    const [displayButtonClicked, setDisplayButtonClicked] = useState(false)
    const [mobileDisplayClass, setMobileDisplayClass] = useState('menu-container-mobile')
    const [menuButtonClass, setMenuButtonClass] = useState('menu-button make-background-ham')

    const handleManuDisplay = () => {

        if (displayButtonClicked) {
            setDisplayButtonClicked(!displayButtonClicked)
            setMobileDisplayClass('menu-container-mobile make-none')
            setMenuButtonClass('menu-button make-background-ham')
        }
        else {
            setMobileDisplayClass('menu-container-mobile make-flex')
            setDisplayButtonClicked(!displayButtonClicked)
            setMenuButtonClass('menu-button make-background-cross')

        }
    }
    return (
        <div>
            <div className='header'>
                <div className='name'>freetify</div>
                <div onClick={() => { handleManuDisplay() }} className={menuButtonClass}></div>
                <div className='menu-container'>
                    {!isAuthenticated() && <div className='menu-item'>Create Account</div>}
                    {!isAuthenticated() && <div className='menu-item'>Sign In</div>}
                    {isAuthenticated() && <div className='menu-item'>home</div>}

                </div>


            </div>
            <div className={`${mobileDisplayClass}`}>
                {!isAuthenticated() && <div className='menu-item-mobile'>Create Account</div>}
                {!isAuthenticated() && <div className='menu-item-mobile'>Sign In</div>}
                {isAuthenticated() && <div className='menu-item-mobile'>Home</div>}

            </div>
        </div>
    )
}

export default Home
