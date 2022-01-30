import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddSong from './components/admin/AddSong'
import SignUp from './components/auth/SignUp'
import Search from './components/core/core-components/Search'
import Setting from './components/core/core-components/Setting'
import Home from './components/core/Home'
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
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
