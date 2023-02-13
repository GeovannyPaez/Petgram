import React from 'react';
import { ContainerCategorySkeleton, CategoryImage, CategoryTitle } from './style';
interface ICategorySkeletonProps {
    light:boolean
}
export const CategorySkeleton:React.FC<ICategorySkeletonProps>= props => {
    // console.log(props)
    return (
        <ContainerCategorySkeleton>
            <CategoryImage light={props.light} />
            <CategoryTitle light={props.light} />
        </ContainerCategorySkeleton>
    )
}