import React, { useEffect, useState } from 'react'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.config';
import { getUserStart, loginedUserStart } from '../redux/action/user.action';




let initialState = {

    email: '',
    password: '',

}
export default function Login() {

    let users = useSelector(state=> state.user.users)

    let [formData, setFormData] = useState(initialState)

    let { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const inputChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const submit = async (event) => {
        event.preventDefault()

        try {

            let userData = await signInWithEmailAndPassword(auth, formData.email, formData.password)

            let user = users.find(user => user.uid === userData.user.uid)

            console.log(user);
            dispatch(loginedUserStart(user))


        } catch (error) {
            console.log(error.message);
        }

        setTimeout(() => {
            navigate('/admin/profile')
        }, 1000);

    }


useEffect(()=>{
dispatch(getUserStart())
},[users.length])


    return (

        <>


            <div className="container">
                <div className="wrapper d-flex align-items-center justify-content-center h-100">
                    <div className="card login-form mt-4">
                        <div className="card-body">
                            <h5 className="card-title text-center">Login Form</h5>
                            <form onSubmit={submit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name='email'
                                        value={email}
                                        onChange={inputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name='password'
                                        value={password}
                                        onChange={inputChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Submit</button>
                                <div className="sign-up mt-4">
                                    Don't have an account? <Link to="/register">Create One</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
