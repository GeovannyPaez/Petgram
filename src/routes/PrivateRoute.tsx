import React, { FC, useContext } from 'react'
import { Route, RouteProps, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/ContextUserLog'
    
export const PrivateRoute:FC<RouteProps> = (props):React.ReactElement => {
    const context = useContext(UserContext);
    const navigate = useNavigate();
    if(!context) throw new Error('context not Found');
    if(!context.isAuth){
        navigate('/login')
    }
  return (
    <Route {...props} />
  )
}
