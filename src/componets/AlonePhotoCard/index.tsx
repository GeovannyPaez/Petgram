import React from 'react'
import  {useParams} from 'react-router-dom'
import { PhotoCard, PropsPhotoCard } from '../PhotoCard'
import {useQuery} from '@apollo/client'
import { onePhoto } from '../../graphql/querys/onePhoto'
import { Layout } from '../layout'
export const AlonePhotoCard = () => {
    const {id} = useParams();
    const {data, loading,error} = useQuery<{photo:PropsPhotoCard}>(onePhoto,{
        variables:{
            id
        }
    })
    const photo = data?.photo ;
  return (
    <>
        <Layout title={`Detalle Mascota -${id}`} subtitle={`La macota con el id: ${data?.photo.id} y su mejor pose de la historia`} show={{title:true}}>
        <>
        {loading && <p>Lodingg...</p>}
        {photo && <PhotoCard {...photo}/>}  
        </>
        </Layout>
    </>
  )
}
