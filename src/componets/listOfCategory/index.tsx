import React, { useEffect, useRef, useState } from "react";
import { Category } from "../category";
import { List, ItemList } from "./style";
// import {  } from '../../../db.json'
import { useCategoryData } from "../../hooks/useCategoryData";
import { CategorySkeleton } from "./SkeletonListCategories";
export interface IListRender {
    fixed?:boolean
}
export const ListOfCategory = () => {
  const { categories, loadin } = useCategoryData();
  const [showFixed, setShowFixed] = useState(false);
  const ListRef = useRef<HTMLUListElement>(null);
  const RenderList = () => {
    return (
      <List ref={ListRef}>
        {loadin && <CategorySkeleton light={true}/>}
        {categories.map((category) => (
          <ItemList key={category.id}>
            <Category {...category} />
          </ItemList>
        ))}
      </List>
    );
  };
  const RenderListFixed:React.FC<IListRender> = ({fixed}) => {
    // console.log(fixed,'efef')
    return (
      <List fixed={fixed}>
        {categories.map((category) => (
          <ItemList key={category.id}>
            <Category {...category} />
          </ItemList>
        ))}
      </List>
    );
  };
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        
     entry.isIntersecting ? setShowFixed(false) : setShowFixed(true);
    //   console.log(entry.isIntersecting, "ssi");
    });
    const newRefList = ListRef.current as HTMLUListElement;
    observer.observe(newRefList);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      {RenderList()}
      {showFixed && RenderListFixed({fixed:showFixed})}
    </>
  );
};
