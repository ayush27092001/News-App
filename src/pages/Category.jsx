import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getCategoryNewsStart } from '../redux/action/news.action';
import Card from '../components/Card';

export default function Category() {
  let { id } = useParams()
  let categoryNews = useSelector(state => state.news.categoryNews)
  console.log(categoryNews);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategoryNewsStart(id))

  }, [id])
  return (

    <>

      <div className="row">
        {
          categoryNews.length > 0 && categoryNews.map((item, i) => (
            <Card key={i} item={item} />
          ))
        }
      </div>

    </>
  )
}
