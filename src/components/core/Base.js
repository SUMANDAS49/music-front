import React from 'react'
import Nav from "./Nav"
import "./baseStyle.css"
const Base = ({ children }) => {

    return (
        <div className='base-container'>

            <div className='base-childs'>
                {children}
            </div>

            <Nav />
        </div>
    )
}

export default Base
