import React from 'react'
// import { Link } from 'react-router-dom'
import { PropsPhotoCard } from '../PhotoCard'
import { ContainerPhotoFavs, Img, LinkFav } from './style'
export interface IPropsListFavs{
    favs?:PropsPhotoCard[]
}
export const ListFavs:React.FC<IPropsListFavs> = ({favs}) => {
  return (
    <ContainerPhotoFavs>
       {favs?.map(photo=>(
        <LinkFav key={photo.id +'photo'} to={'/photo-detail/'+photo.id}>
            <Img src={photo.src} alt={photo.id+'imagen de mascota'} />
        </LinkFav>
       ))}
    </ContainerPhotoFavs>
  )
}
