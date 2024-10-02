import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { getUserStart } from '../redux/action/user.action'
import NotFound from './NotFound'

export default function Auth() {
  let loginedUser = useSelector(state => state.user.loginedUser)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()


  useEffect(() => {
    if (!loginedUser.id) {
      dispatch(getUserStart())
      setTimeout(() => {
        navigate("/login")
      }, 100);
    }
  }, [loginedUser])

  
  if (loginedUser.role == "0") {
    if (
      location.pathname.includes('user')
     || location.pathname.includes('product')
     || location.pathname.includes('category')
    )
      return <NotFound />
  }
  return (
<>



<Outlet/>
</>
)
}
