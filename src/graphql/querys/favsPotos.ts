import { gql } from "@apollo/client";
export const favsPhotos = gql`
    query getFavs {
  favs{
    src
    likes
    liked 
    id
    userId
  }
}
`