import {gql} from '@apollo/client'

export const likePhoto = gql`
mutation likePhoto ($id:ID!){
  likePhoto(input:{id:$id}){
    id
    likes
    liked
  }
}

`