import React, { ReactElement } from 'react'
import {useNavigate} from 'react-router-dom'
import { Anchor, Image} from './style'
export interface PropsCategory {
    id:string
    cover?: string
    path?:string
    emoji?: string
}
const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'
export const Category:React.FC<PropsCategory> = ({cover=DEFAULT_IMAGE,path,emoji, id}):ReactElement => {
  return (
  
      <Anchor to={'/pets/'+id} >
        <Image src={cover} alt="" />
        {emoji}
      </Anchor>
    
  )
}
