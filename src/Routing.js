import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddSong from './components/admin/adminComponents/AddSong'
import AdminDashBoard from './components/admin/AdminDashBoard'
import SignUp from './components/auth/SignUp'
import Search from './components/core/core-components/Search'
import Setting from './components/core/core-components/Setting'
import Home from './components/core/Home'
import AllSongsContainer from './components/songs/containers/AllSongsContainer'
import LikedSongs from './components/songs/LikedSongs'
import PrivateRoute from './components/util/PrivateRoute'
import PublicRoute from './components/util/PublicRoute'


const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <PrivateRoute redirectTo="/signup">
                        <Home />
                    </PrivateRoute>
                }>
                    {/* <Route path='allSongs' element={<AllSongsContainer />} /> */}
                </Route>
                <Route path="/allSongs" element={
                    <PrivateRoute redirectTo="/">
                        <AllSongsContainer />
                    </PrivateRoute>
                } />
                <Route path="/search" element={
                    <PrivateRoute redirectTo="/">
                        <Search />
                    </PrivateRoute>
                } />
                <Route path="/setting" element={
                    <PrivateRoute redirectTo="/signup">
                        <Setting />
                    </PrivateRoute>
                } />
                <Route path="/likedSongs" element={
                    <PrivateRoute redirectTo="/signup">
                        <LikedSongs />
                    </PrivateRoute>
                } />
                <Route path="/signup" element={
                    <PublicRoute redirectTo="/">
                        <SignUp />
                    </PublicRoute>
                } />
                {/* //Admin related Routes */}
                <Route path="/addSong" element={
                    <PrivateRoute redirectTo="/signup">
                        <AddSong />
                    </PrivateRoute>
                } />
                <Route path="/adminArea" element={
                    <PrivateRoute redirectTo="/signup">
                        <AdminDashBoard />
                    </PrivateRoute>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
