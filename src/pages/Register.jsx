import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase.config'
import { useDispatch } from 'react-redux'
import { addUserStart } from '../redux/action/user.action'

let initialState = {
    name: '',
    email: '',
    password: '',

}
export default function Register() {

    let [formData, setFormData] = useState(initialState)

    let { name, email, password } = formData

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
        console.log(formData);

        try {
            const userData = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
            console.log(userData);
            delete formData.password
            formData.uid = userData.user.uid

            dispatch(addUserStart(formData))


        } catch (error) {
            console.log(error.message);
        }

        setTimeout(() => {
            navigate("/login")
        }, 1000);
    }

    return (

        <div className="container">
            <div className="wrapper d-flex align-items-center justify-content-center h-100">
                <div className="card login-form mt-4">
                    <div className="card-body">
                        <h5 className="card-title text-center">Register Form</h5>
                        <form onSubmit={submit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name='name'
                                    value={name}
                                    onChange={inputChange}
                                />
                            </div>
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
                                Already have an account? <Link to="/login"> Login here </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
