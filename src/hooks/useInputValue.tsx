import React from 'react'

export const useInputValue = (initialState:string = '') => {
    const [value, setValue] = React.useState(initialState);
    const onChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value 
        setValue(value)
    } 
  return {value,onChange}
}
