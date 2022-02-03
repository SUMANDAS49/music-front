import React from 'react'
import Nav from "./Nav"
import "./baseStyle.css"
import { isAuthenticated } from '../auth/AuthHelper'

const Base = ({ children }) => {

    return (
        <div className='base-container'>

            <div className='base-childs'>
                {children}
            </div>
            {
                isAuthenticated() && <Nav />
            }

        </div>
    )
}

export default Base
