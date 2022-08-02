import { API } from "../../Backend";
import { getUserDetails } from "../auth/AuthHelper";

export const uploadSongApi = (data) => {
  console.log(data);
  return fetch(`${API}/song/upload`, {
    method: "post",
    headers: {
      Accept: "application/json",
      // "Content-Type": "application/json",
    },
    body: data,
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllUsers = () => {
  return fetch(`${API}/user/allUsers`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createAdminPlayListAPI = (songs, name) => {
  const userData = getUserDetails();
  return fetch(`${API}/admin/playlist/create/${userData._id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token: userData.token,
    },
    body: JSON.stringify({
      playListName: name,
      songs: songs,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllAdminPlayListAPICall = () => {
  const userData = getUserDetails();
  return fetch(`${API}/admin/playlist/all/${userData._id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token: userData.token,
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updatePlayListApi = (name, songsAll, playListId) => {
  const userData = getUserDetails();
  const songs = [];
  songsAll.forEach((s) => {
    songs.push(s._id);
  });
  return fetch(`${API}/admin/playlist/update/${userData._id}/${playListId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ playListName: name, songs }),
  })
    .then((results) => {
      return results.json();
    })
    .catch((err) => {
      console.error(err);
    });
};
