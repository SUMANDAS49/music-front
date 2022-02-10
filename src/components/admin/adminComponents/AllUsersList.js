import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../AdminApiCall'
import "./allUserListStyle.css"
const AllUsersList = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        getAllUsers().then((res) => {
            setUsers(res.users)
        })
    })
    return (
        <div className='user-list'>
            <div className='user-list-item table-head'>
                <div className='user-list-item-name'>Name</div>
                <div className='user-list-item-email'>Email</div>
                <div className='user-list-item-role'>Role</div>
                <div className='user-list-item-image'>image</div>

            </div>
            {
                users.map((user) => {
                    return <div className='user-list-item'>
                        <div className='user-list-item-name'>{user.name}</div>
                        <div className='user-list-item-email'>{user.email}</div>
                        <div className='user-list-item-role'>{user.role}</div>
                        <img className='user-list-item-image' src={user.profilePic} />
                    </div>
                })
            }
        </div>
    )
}

export default AllUsersList