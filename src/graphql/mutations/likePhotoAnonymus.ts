import {gql} from '@apollo/client'

export const likePhotAnonymus = gql`
mutation likePhotAnonymus ($id:ID!){
  likeAnonymousPhoto(input:{id:$id}){
    id
    likes
    liked
  }
}

`