import React, { useEffect } from 'react'
import Card from '../components/Card'
import { useDispatch, useSelector } from 'react-redux'
import { getAllNewsStart } from '../redux/action/news.action'

export default function Home() {

    const dispatch = useDispatch()
    let news = useSelector(state => state.news.news)

    useEffect(() => {
        dispatch(getAllNewsStart())

    }, [])
    return (
        <>
            <div className="row">
                {
                    news.length > 0 && news.map((item, i) => (

                        <Card key={i} item={item} />
                    ))
                }

            </div>
        </>
    )
}
