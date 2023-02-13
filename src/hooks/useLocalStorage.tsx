import React, { useState } from 'react'

export const useLocalStorage = (key:string,initialValue:boolean) => {
    const getValue= ():boolean=>{
        const item= localStorage.getItem(key);
       if(item){
        return JSON.parse(item)
       }
       return initialValue
    }
    const [value,setValueStorage]= useState(getValue);

    const saveValue = (value:boolean)=>{
        window.localStorage.setItem(key,JSON.stringify(value))
        setValueStorage(value);
        // console.log('loc',value)
    }
  return {value,saveValue}
}
