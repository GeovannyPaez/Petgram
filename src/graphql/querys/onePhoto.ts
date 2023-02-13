import {gql} from '@apollo/client'

export const onePhoto = gql`
    query onePhoto($id:ID!) {
  photo(id:$id){
    src
    likes
    id
    liked
  }
}
`