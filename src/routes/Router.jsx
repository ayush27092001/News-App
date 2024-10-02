import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login'
import Auth from '../pages/Auth'
import Profile from '../admin/profile/Profile'
import EditProfile from '../admin/profile/EditProfile'
import Users from '../admin/user/Users'
import AddOrEditUser from '../admin/user/AddOrEditUser'
import LikedNews from '../admin/news/LikedNews'

export default function Router() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/category/:id' element={<Category />} />

                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />

                <Route path='/admin' element={<Auth />}>
                    {/* profile */}
                    <Route path='profile' element={<Profile />} />
                    <Route path='profile/edit' element={<EditProfile />} />

                    {/* user */}
                    <Route path='users' element={<Users />} />
                    <Route path='user/create' element={<AddOrEditUser />} />
                    <Route path='user/edit/:id' element={<AddOrEditUser />} />

                    {/* likednews  */}
                    <Route path='likednews' element={<LikedNews />} />

                </Route>

                <Route path='*' element={<NotFound />} />
            </Routes>

        </>
    )
}
