import { gql } from '@apollo/client'
import { CateogoriesPhotos } from '../../componets/ListOfPhotoCards'
export const getPhotos = (id: CateogoriesPhotos | undefined = undefined) => {
    if (id) {
        return gql`
        query photosByCategory ($id:ID!){
            photos(categoryId:$id) {
                id
                likes
                src 
                liked
            }
        }
        `
    }
    return gql`
        query Photos {
            photos{
                id
                likes
                src 
                liked
            }
        }
    `
}


