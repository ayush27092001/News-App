import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Profile() {
    let loginedUser = useSelector(state => state.user.loginedUser)
    console.log(loginedUser);

    return (
        <>
            <div className="card" >
                <div className="card-header d-flex justify-content-between">
                    <h1>Profile</h1>

                    <Link to="/admin/profile/edit" className='btn btn-primary'>Edit Profile </Link>
                </div>
                <div className="card-body">
                    <p className='profile-data'>
                        <span >Name</span>
                        <span >{loginedUser.name}</span>
                    </p>
                    <p className='profile-data'>
                        <span >Email</span>
                        <span >{loginedUser.email}</span>
                    </p>
                    <p className='profile-data'>
                        <span >Image</span>
                        <span ><img src={loginedUser.image} height={"60px"} alt="" /></span>
                    </p>
                    <p className='profile-data'>
                        <span >Contact No.</span>
                        <span >{loginedUser.contact}</span>
                    </p>
                    <p className='profile-data'>
                        <span >Address</span>
                        <span >{`${loginedUser.address} ${loginedUser.city} ${loginedUser.state}`}</span>
                    </p>
                </div>
            </div>
        </>
    )
}
