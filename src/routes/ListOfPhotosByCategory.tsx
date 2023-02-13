import React from 'react'
import {useParams} from 'react-router-dom'
import { ListOfPhotoCards } from '../componets/ListOfPhotoCards'
import { PropsPhotoCard } from '../componets/PhotoCard'
export const ListOfPhotosByCategory = () => {
    const {id} = useParams()
    const categoryId = Number(id)
    
  return (
   
    <ListOfPhotoCards categoryId={categoryId}/>
  )
}
