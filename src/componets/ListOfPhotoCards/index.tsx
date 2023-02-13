import { PhotoCard, PropsPhotoCard } from "../PhotoCard";
import { getPhotos } from "../../graphql/querys/photos";
import { useQuery } from '@apollo/client'
import { FC } from "react";
import { Layout } from "../layout";
import { QueryHookOptions } from "@apollo/client/react/types/types";

export enum CateogoriesPhotos {
    DOGS = 2,
    CATS = 1,
    HAMSTERS = 3,
    RABBITS = 4,
    BIRDS = 5,
    FISHES = 6
}
interface PropsListPhotoCards {
    categoryId?: CateogoriesPhotos
}
export const ListOfPhotoCards: FC<PropsListPhotoCards> = ({ categoryId = 0 }) => {
   
    let optionsUseQuery: QueryHookOptions = {}
    let query = getPhotos()
    if (categoryId) {
        optionsUseQuery = {
            variables: {
                id: categoryId
            }
        }
        query = getPhotos(categoryId)
    }
    const { data, loading } = useQuery<{ photos: PropsPhotoCard[] }>(query, optionsUseQuery);
    // console.log(data)
    const photos = data?.photos
    return (
        <Layout title={ `Macotas ${categoryId ? 'Categoria '+ categoryId:""}`} subtitle='La mejor app para porder difrutar de las fotos mas increibles de las mascotas' show={{title:true, subTitle:false}}>
        <ul>
            {loading && <li>Loading...</li>}
            {photos?.map(photo => (
                <PhotoCard  key={photo.id} {...photo}/>
            ))}
        </ul>
</Layout>
    )

}