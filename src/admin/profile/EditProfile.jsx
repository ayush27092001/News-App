import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { storage } from '../../firebase.config'
import { profileEditUserStart } from '../../redux/action/user.action'

export default function EditProfile() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    let loginedUser = useSelector(state => state.user.loginedUser)

    let [formData, setFormData] = useState(loginedUser)

    const { name='', email='', image='', contact='', address='', city='', state='', country='', zipCode='' } = formData


    const inputChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value

        }))
    }


    const submit = (event) => {

        event.preventDefault()

        dispatch(profileEditUserStart(formData, formData.id))

        setTimeout(() => {
            navigate("/admin/profile")
        }, 1000);

    }

    const uploadFiles = (event) => {
        const storageRef = ref(storage, `user/${event.target.files[0].name}`);
        console.log(storageRef);

        const uploadTask = uploadBytesResumable(storageRef, event.target.files[0]);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // Handle unsuccessful uploads
                console.log(error.message);
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setFormData((prevState) => ({
                        ...prevState,
                        [event.target.name]: downloadURL
                    }))
                });
            }
        );
    }

    return (
        <>
            <div className="card" >
                <div className="card-header d-flex justify-content-between">
                    <h1>Edit Profile</h1>

                    <Link to="/admin/profile" className='btn btn-primary'>Back </Link>
                </div>
                <div className="card-body">
                    <form onSubmit={submit}>

                        <div className="mb-3">
                            <label htmlFor='name' className="form-label"> Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id='name'
                                name='name'
                                value={name}
                                onChange={inputChange}

                                placeholder=" Name"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor='email' className="form-label"> Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id='email'
                                name='email'
                                value={email}
                                onChange={inputChange}

                                placeholder=" Email"
                            />
                        </div>




                        <div className="mb-3">
                            <label htmlFor='image' className="form-label">Image</label>
                            <input
                                type="file"
                                className="form-control"
                                id='image'
                                name='image'
                                onChange={uploadFiles}

                            />
                            {
                                                image && <div className='my-4'>
                                                    <img src={''} alt="" height={"100px"} />
                                                </div>
                                            }
                        </div>

                        <div className="mb-3">
                            <label htmlFor='contact' className="form-label">Contact Number</label>
                            <input
                                type="text"
                                className="form-control"
                                id='contact'
                                name='contact'
                                value={contact}
                                onChange={inputChange}

                                placeholder="Contact Number"
                            />
                        </div>


                        <div className="mb-3">
                            <label htmlFor='address' className="form-label">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id='address'
                                name='address'
                                value={address}
                                onChange={inputChange}

                                placeholder="Address"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor='city' className="form-label">City</label>
                            <input
                                type="text"
                                className="form-control"
                                id='city'
                                name='city'
                                value={city}
                                onChange={inputChange}

                                placeholder="City"
                            />
                        </div>


                        <div className="mb-3">
                            <label htmlFor='state' className="form-label">State</label>
                            <input
                                type="text"
                                className="form-control"
                                id='state'
                                name='state'
                                value={state}
                                onChange={inputChange}

                                placeholder="State"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor='country' className="form-label">Country</label>
                            <input
                                type="text"
                                className="form-control"
                                id='country'
                                name='country'
                                value={country}
                                onChange={inputChange}

                                placeholder="Country"
                            />
                        </div>



                        <div className="mb-3">
                            <label htmlFor='zipCode' className="form-label">zip Code</label>
                            <input
                                type="text"
                                className="form-control"
                                id='zipCode'
                                name='zipCode'
                                value={zipCode}
                                onChange={inputChange}

                                placeholder="zip Code"
                            />
                        </div>


                        <div>
                            <button className='btn btn-primary'>Submit</button>
                            <button className='btn btn-primary mx-2' type='reset'>Reset</button>
                        </div>

                    </form>

                </div>
            </div>
        </>
    )
}
