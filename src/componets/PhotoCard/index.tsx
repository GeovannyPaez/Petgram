import React from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useLazzyLoader } from '../../hooks/useLazzyLoader'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { Button, Img, ImgWrapper, Article } from './style'
import {useMutation} from '@apollo/client'
import { likePhoto  as likePhotoLoged} from '../../graphql/mutations/likePhotoLoged'
export interface PropsPhotoCard {
  id: number
  likes?: number
  src: string
  liked:boolean
}


export const PhotoCard: React.FC<PropsPhotoCard> = ({ id, src, likes = 0 ,liked=false}) => {
  4

  const { show, elementPhotoCard } = useLazzyLoader();
  
  const onHandleLike = () => {
      likePhoto({variables:{id}})
  }
  const [likePhoto] = useMutation<PropsPhotoCard>(likePhotoLoged)

  return (
    <Article ref={elementPhotoCard}>
      {show && <>
        <Link to={'/photo-detail/' + id}>
          <ImgWrapper>
            <Img src={src} alt="" />
          </ImgWrapper>
        </Link>
        <Button onClick={onHandleLike}>
          { (liked)? <MdFavorite color='red' size={32} /> : <MdFavoriteBorder size={32} />}
          {likes + ' '}
          likes
        </Button>
      </>}
    </Article>
  )
}
