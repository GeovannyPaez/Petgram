import React,{useEffect, useState} from 'react'
import { PropsCategory } from '../componets/category'

export const useCategoryData = () => {
    const [categories, setCategorys] = useState<PropsCategory[]>([]);
    const [loadin, setLoading]= useState(true)
    useEffect(()=>{
        fetch('https://petgram-server-alejandroverita-alejandroverita.vercel.app/categories')
            .then(res=> res.json())
            .then(response=>setCategorys(response))
            .finally(()=> setLoading(false))
        
    },[])
    
    
  return {loadin,categories}
  
}
