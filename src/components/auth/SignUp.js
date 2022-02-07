import React, { useState } from 'react'
import { Navigate } from "react-router-dom"
import GoogleLogin from "react-google-login"
import { signInApiCall } from './AuthHelper'
import "./authStyle.css"
import Base from "../core/Base"


const SignUp = () => {
    const [redirectOccur, setRedirectOccur] = useState(false)
    const [error, setError] = useState(false)
    /**google auth functions are here  */
    const handleFailure = (result) => {
        console.log(result)
    }
    const redirectToHelper = (path) => {
        console.log("hi********************")
        return <Navigate to={path} replace={true} />
    }
    const handleSubmit = (name, email, image, idToken) => {
        signInApiCall(name, email, image, idToken).then((res) => {
            if (res != undefined) {
                console.log(res + "<<<<<")
                localStorage.setItem("userData", JSON.stringify(res))
                setRedirectOccur(true)
            }
            else {
                setError(true)
            }


        }).catch((err) => {
            console.log("hi")
        })

    }
    const handleLogin = (googleData) => {
        console.log(googleData.tokenId)


        handleSubmit(googleData.profileObj.name, googleData.profileObj.email, googleData.profileObj.imageUrl, googleData.tokenId)
    }

    return (
        <Base>
            <div className='sign-in-container'>
                {redirectOccur && redirectToHelper("/")}
                <div className='content'>Sign In to enjoy unlimited music</div>
                {
                    error && <span style={{ color: "red" }}>something went wrong please try again</span>
                }
                <GoogleLogin
                    // clientId={"309146035179-ek0eo1vtc3c6sdji2l7bnc0akcfsjq60.apps.googleusercontent.com"}
                    clientId={"290011825413-jqd48c0g8umvhjcgtjli8469l898gbqh.apps.googleusercontent.com"}
                    render={renderProps => (
                        <img src="https://bloomfield.edu/sites/default/files/2020-01/google_logo.png" className="google-sign-in-button" id="reviewBtn"
                            alt='google-logo'
                            onClick={renderProps.onClick} />
                    )}

                    onSuccess={handleLogin}
                    onFailure={handleFailure}

                    cookiePolicy={'single_host_origin'}
                />

            </div></Base>
    )
}

export default SignUp
