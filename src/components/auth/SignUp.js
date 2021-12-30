import React, { useState } from 'react'
import GoogleLogin from "react-google-login"
import "./authStyle.css"
const SignUp = () => {
    const [customerEmail, setCustomerEmail] = useState("")
    const [profilePicLink, setProfilePicLink] = useState("")
    /**google auth functions are here  */
    const handleFailure = (result) => {
        alert("something went wrong")
    }
    const handleSubmit = (name, email, image) => {

        console.log("submited!!!")
    }
    const handleLogin = (googleData) => {
        console.log(googleData)


        handleSubmit(googleData.profileObj.name, googleData.profileObj.email, googleData.profileObj.imageUrl)
    }

    return (
        <div className='sign-in-container'>
            <div className='content'>Sign In to enjoy unlimited music</div>
            <GoogleLogin
                clientId={"309146035179-ek0eo1vtc3c6sdji2l7bnc0akcfsjq60.apps.googleusercontent.com"}
                render={renderProps => (
                    <img src="https://bloomfield.edu/sites/default/files/2020-01/google_logo.png" className="google-sign-in-button" id="reviewBtn" onClick={renderProps.onClick} />
                )}

                onSuccess={handleLogin}
                onFailure={handleFailure}

                cookiePolicy={'single_host_origin'}
            />

        </div>
    )
}

export default SignUp
