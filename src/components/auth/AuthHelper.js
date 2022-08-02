import { API } from "../../Backend";

export const isAuthenticated = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  if (user !== undefined) {
    return user;
  } else {
    return false;
  }
};

export const isAdmin = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  if (user !== undefined) {
    return user.role == 1;
  }
  return false;
};

export const signInApiCall = (name, email, image, idToken) => {
  return fetch(`${API}/auth/signin`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      profilePic: image,
      idToken: idToken,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUserDetails = () => {
  let user = localStorage.getItem("userData");
  if (user !== undefined) {
    return JSON.parse(user);
  }
};

export const logoutHelper = () => {
  localStorage.removeItem("userData");
};
export const isUserAdmin = () => {
  let role = JSON.parse(localStorage.getItem("userData")).role;
  if (role !== undefined) {
    return role == 1;
  }
};
