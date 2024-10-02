import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUserStart } from '../redux/action/user.action'

export default function Header() {

    let categories = useSelector(state => state.news.categories)
    let loginedUser = useSelector(state => state.user.loginedUser)
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logoutUserStart())
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">NewsApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                categories.length > 0 && categories.map((category, index) => (
                                    <li className="nav-item" key={index}>
                                        <Link className="nav-link active" aria-current="page" to={`/category/${category.toLowerCase()}`}>{category}</Link>
                                    </li>
                                ))
                            }

                        </ul>
                        {
                            loginedUser?.name && <>
                                <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        My Account
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/admin/profile">Profile</Link></li>
                                        <li><Link className="dropdown-item" to="/admin/likedNews">Liked News</Link></li>
                                        {
                                            loginedUser.role == "1" && (
                                                <>

                                                    <li >
                                                        <Link className="dropdown-item" to={'/admin/users'} >Users</Link>
                                                    </li>

                                                </>
                                            )
                                        }
                                        <li><Link className="dropdown-item" onClick={logout}>Logout</Link></li>
                                    </ul>
                                </div>

                            </>
                        }

                        {
                            !loginedUser?.name && <>

                                <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sign Up/In
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/register">Register</Link></li>
                                        <li><Link className="dropdown-item" to="/login">Login</Link></li>
                                    </ul>
                                </div>

                            </>
                        }


                    </div>
                </div>
            </nav>
        </>
    )
}
