import { useQuery } from '@apollo/client'
import { Layout } from '../componets/layout'
// import React from 'react'
import { IPropsListFavs, ListFavs } from '../componets/ListOfFavs'

import { favsPhotos } from '../graphql/querys/favsPotos'

export const Favorites = () => {
  const { data, loading, error, refetch } = useQuery<IPropsListFavs>(favsPhotos, {
    fetchPolicy: 'cache-and-network'
  })
  if (loading) {
    return <span>Loading....</span>
  }

  return (
    <>
      <Layout title='Fotos Favoritas' subtitle='Las fotos que te han gustado estan aquí.' show={{title:true}}>
        <ListFavs favs={data?.favs} />
      </Layout>
    </>
  )
}
