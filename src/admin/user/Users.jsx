import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUserStart, getUserStart } from '../../redux/action/user.action'

export default function Users() {

    let users = useSelector(state => state.user.users)
    const dispatch = useDispatch()



    const deleteUsers = (user) => {
        dispatch(deleteUserStart(user))
    }

    useEffect(() => {
        dispatch(getUserStart())
    }, [users.length, dispatch])


    return (
        <div>
            <div className="card" >
                <div className="card-header d-flex justify-content-between">
                    <h1>Users</h1>
                    <Link to={'/admin/user/create'} className='btn btn-primary'>Add User</Link>
                </div>
                <div className="card-body">

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th >#</th>
                                <th >Image</th>
                                <th >Name</th>
                                <th >Email</th>
                                <th >Role</th>
                                <th >Status</th>
                                <th >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.length > 0 && users.map((user, index) => (
                                    <tr key={index}>
                                        <th >{index + 1}</th>
                                        <td>
                                            <img src={user.image} height={"50px"} alt="user " />
                                        </td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role === "1" ? "Admin" : "Customer"}</td>
                                        <td>{user.status === "1" ? "Active" : "Inactive"}</td>

                                        <td >
                                            <Link to={`/admin/user/edit/${user.id}`} className='btn btn-warning mx-2'>Edit</Link>
                                            <button onClick={()=> deleteUsers(user)} className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>

                                ))
                            }



                        </tbody>
                    </table>



                </div>

            </div>
        </div>
    )
}
