import React from 'react'
import Nav from "./Nav"
const Base = ({ children }) => {
    return (
        <div>
            <Nav />
            <div>
                {children}
            </div>
        </div>
    )
}

export default Base
