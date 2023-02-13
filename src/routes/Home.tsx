import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from '../componets/layout'
import { ListOfCategory } from '../componets/listOfCategory'
import { ListOfPhotoCards } from '../componets/ListOfPhotoCards'

export const Home = () => {
  return (

  
      <>
        <ListOfCategory />
        <Outlet />
      </>
    

  )
}
