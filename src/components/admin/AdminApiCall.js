import { API } from "../../Backend"
import { getUserDetails } from "../auth/AuthHelper"


export const uploadSongApi = (data) => {
    console.log(data)
    return fetch(`${API}/song/upload`, {
        method: "post",
        headers: {
            Accept: "application/json",
            // "Content-Type": "application/json",
        },
        body: data
    }).then((res) => {
        return res.json()
    }).catch((err) => {
        console.log(err)
    })
}

export const getAllUsers = () => {
    return fetch(`${API}/user/allUsers`, {
        method: "GET",
        headers: {
            Accept: "application/json",
        }
    }).then((res) => {
        return res.json();
    }).catch((err) => {
        console.log(err)
    })
}

export const createAdminPlayListAPI = (songs, name) => {
    const userData = getUserDetails()
    return fetch(`${API}/admin/playlist/create/${userData._id}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token: userData.token
        },
        body: JSON.stringify({
            playListName: name,
            songs: songs
        })
    }).then((res) => {
        return res.json()
    }).catch((err) => {
        console.log(err)
    })
}