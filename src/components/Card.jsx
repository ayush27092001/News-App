import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addlikedNewsStart } from '../redux/action/news.action'

export default function Card({ item }) {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    let loginedUser = useSelector(state => state.user.loginedUser)



    const getDetails = (item) => {
        if (!loginedUser.name) {
            navigate('/login')

            let news = {
                loginedUser: loginedUser,
                item: item
            }
console.log(news);

        } else {

            dispatch(addlikedNewsStart(item))
        }

    }
    return (

        <div className="col-sm-3">
            <div className="card mb-4" >
                <img src={[item.urlToImage]} className="card-img-top" alt={item.title} />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}.</p>
                    <Link to={item.url} target='new' className="btn btn-secondary">Read More</Link>
                    <button className='btn btn-primary mx-3' onClick={() => getDetails(item)}>Like</button>
                </div>
            </div>
        </div>

    )
}
