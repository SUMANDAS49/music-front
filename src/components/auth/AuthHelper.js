export const isAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user !== undefined) {
        return user;
    }
    else {
        return false;
    }
}