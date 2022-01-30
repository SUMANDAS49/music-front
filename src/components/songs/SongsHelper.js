import { API } from "../../Backend";

export const getAllSongs = () => {
    return fetch(`${API}/song/allSongs`, {
        method: "get"
    }).then((res) => {
        return res.json()
    }).catch((err) => {
        console.log(err)
    })
}