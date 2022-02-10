import { API } from "../../Backend"


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