import React from 'react'
import { isAuthenticated } from '../auth/AuthHelper'
import SignUp from '../auth/SignUp'
import Base from './Base'


const Home = () => {
    return (
        <div>
            <Base>

                {!isAuthenticated() && <SignUp />}
            </Base>
        </div>
    )
}

export default Home
