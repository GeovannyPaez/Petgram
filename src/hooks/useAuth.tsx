import { useApolloClient } from '@apollo/client'
import React, { useState, ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import { Unlogin } from '../routes/Unlogin'
// import { useLocalStorage } from './useLocalStorage';
export const keySeccionToken = 'token'
export const useAuth = () => {
  const clientApollo = useApolloClient();
  const isToken = (): boolean => {
    const token = window.sessionStorage.getItem(keySeccionToken);
    if (!token || token === 'undefined') {
      return false
    }
    return true
  }
  const [isAuth, setIsAuth] = useState(isToken);
  const activeAuth = (token: string) => {
    // console.log(token)
    if (token) {
      window.sessionStorage.setItem(keySeccionToken, token)
      setIsAuth(true);
    }
    
  }
  const logout =()=>{
    window.sessionStorage.removeItem(keySeccionToken);
    setIsAuth(false);
    clientApollo.resetStore().then(()=>console.log('logout'))
  }
  const onVerifyLogin = (component: ReactElement): ReactElement => {
    if (isAuth) {
      return component
    }
    // redirect('/')
    return <Navigate to={'/login'} />
  }

  return { isAuth, onVerifyLogin, activeAuth , logout}
}
