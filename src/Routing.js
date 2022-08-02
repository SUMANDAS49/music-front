import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddSong from "./components/admin/adminComponents/AddSong";
import EditPlayList from "./components/admin/adminComponents/EditPlayList";
import AdminDashBoard from "./components/admin/AdminDashBoard";
import SignUp from "./components/auth/SignUp";
import Search from "./components/core/core-components/Search";
import Setting from "./components/core/core-components/Setting";
import Home from "./components/core/Home";
import AllSongsContainer from "./components/playList/AllSongsContainer";
import CreatedPlayLists from "./components/playList/CreatedPlayLists";
import LikedSongs from "./components/songs/LikedSongs";
import Video from "./components/test/Video";
import NotAllowed from "./components/util/NotAllowed";
import PrivateRoute from "./components/util/PrivateRoute";
import PublicRoute from "./components/util/PublicRoute";
import AdminRoute from "./components/util/AdminRoute";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute redirectTo="/signup">
              <Home />
            </PrivateRoute>
          }
        >
          {/* <Route path='allSongs' element={<AllSongsContainer />} /> */}
        </Route>
        <Route
          path="/allSongs"
          element={
            <PrivateRoute redirectTo="/">
              <AllSongsContainer />
            </PrivateRoute>
          }
        />
        <Route
          path="/search"
          element={
            <PrivateRoute redirectTo="/">
              <Search />
            </PrivateRoute>
          }
        />
        <Route
          path="/setting"
          element={
            <PrivateRoute redirectTo="/signup">
              <Setting />
            </PrivateRoute>
          }
        />
        <Route
          path="/likedSongs"
          element={
            <PrivateRoute redirectTo="/signup">
              <LikedSongs />
            </PrivateRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute redirectTo="/">
              <SignUp />
            </PublicRoute>
          }
        />
        {/* //Admin related Routes */}
        <Route
          path="/addSong"
          element={
            <AdminRoute redirectTo="/signup">
              <AddSong />
            </AdminRoute>
          }
        />
        <Route
          path="/adminArea"
          element={
            <AdminRoute redirectTo="/signup">
              <AdminDashBoard />
            </AdminRoute>
          }
        />
        <Route
          path="/defaultPlayList"
          element={
            <PrivateRoute redirectTo="/signup">
              <CreatedPlayLists />
            </PrivateRoute>
          }
        />
        <Route
          path="/video"
          element={
            <PublicRoute redirectTo="/">
              <Video />
            </PublicRoute>
          }
        />

        <Route path="/notAllowed" element={<NotAllowed />} />

        <Route
          path="/admin/editPlayList"
          element={
            <AdminRoute redirectTo="/notAllowed">
              <EditPlayList />
            </AdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
