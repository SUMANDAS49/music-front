import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutHelper } from '../../auth/AuthHelper';
import Base from '../Base';
import "./settingStyle.css"
const Setting = () => {
    const navigate = useNavigate()
    const logOutHandler = () => {
        logoutHelper()
        navigate("/signup")
    }
    return (
        <Base>
            <div className='setting-container'>
                <div className='title'>Settings</div>
                <div className='option-list'>
                    <div className='option-list-item'>Account</div>
                    <div className='option-list-item'>Preferances</div>
                    <div className='option-list-item'>Privacy policy</div>
                    <div className='option-list-item'>History</div>
                    <div className='option-list-item' onClick={() => {
                        logOutHandler()
                    }}>Log out</div>
                </div>
            </div>
        </Base>
    );
};

export default Setting;