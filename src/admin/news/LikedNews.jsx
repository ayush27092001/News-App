import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLikedNewsStart } from '../../redux/action/news.action';
import { Link } from 'react-router-dom';

export default function LikedNews() {

    const dispatch = useDispatch()

    // const loginedUser = useSelector(state => state.user.loginedUser)
    const likedNews = useSelector(state => state.news.likedNews[0])
    
    
    // console.log(loginedUser);
    useEffect(() => {
        dispatch(getLikedNewsStart())
    }, [likedNews.length])

    return (
        <>

            <div className="container">
                <div className="row">
                    {
                    likedNews.length > 0 && likedNews.map((item, i) => (
                        <div className="col-sm-3" key={i}>
                        <div  className="card mb-4" >
                            <div className="card-header">
                                Liked Post
                            </div>
                            <img src={[item.urlToImage]} className="card-img-top" alt={item.title} />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}.</p>
                                <Link to={item.url} target='new' className="btn btn-secondary">Read More</Link>
                            </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>


        </>
    )
}
