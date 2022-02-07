import { API } from "../../Backend";
import { getUserDetails } from "../auth/AuthHelper";

export const getAllSongs = () => {
    return fetch(`${API}/song/allSongs`, {
        method: "get"
    }).then((res) => {
        return res.json()
    }).catch((err) => {
        console.log(err)
    })
}

export const likeSong = (songId) => {
    const userData = getUserDetails()
    return fetch(`${API}/song/like`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId: userData._id,
            songId: songId,
            token: userData.token,
            email: userData.email
        })
    }).then((res) => {
        return res.json()
    }).catch((err) => {
        console.log(err)
    })
}

export const unlikeSong = (songId) => {
    const userData = getUserDetails()
    return fetch(`${API}/song/unlike`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId: userData._id,
            songId: songId,
            token: userData.token,
            email: userData.email
        })
    }).then((res) => {
        return res.json()
    }).catch((err) => {
        console.log(err)
    })
}

export const getLikedSongsById = () => {
    const userId = getUserDetails()._id
    return fetch(`${API}/song/getLikedSongs`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId: userId
        })
    }).then((res) => {
        return res.json()
    }).catch((err) => {
        console.log(err)
    })
}
export const getLikedSongsFull = () => {
    const userId = getUserDetails()._id
    return fetch(`${API}/song/getLikedSongsFull`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId: userId
        })
    }).then((res) => {
        return res.json()
    }).catch((err) => {
        console.log(err)
    })
}

