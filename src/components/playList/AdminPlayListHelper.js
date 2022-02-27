import { API } from "../../Backend"
import { getUserDetails } from "../auth/AuthHelper"
export const getAllAdminPlayListAPICall = () => {
    const userData = getUserDetails()
    return fetch(`${API}/admin/playlist/all/${userData._id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            'Content-Type': "application/json",
            token: userData.token
        }
    }).then((res) => {
        return res.json()
    }).catch((err) => {
        console.log(err)
    })
}
export const getAdminPlayListSongsAPICall = (id) => {
    const userData = getUserDetails()
    return fetch(`${API}/admin/playlist/songs/${userData._id}/${id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            'Content-Type': "application/json",
            token: userData.token
        }
    }).then((res) => {
        return res.json()
    }).catch((err) => {
        console.log(err)
    })
}