import React , {useState,  useRef, useEffect} from 'react'

export const useLazzyLoader = () => {
    const [show, setShow] = useState(false)
  const elementPhotoCard = useRef<HTMLElement>(null)
  useEffect(() => {
    const observer = new  IntersectionObserver(([entries]) => {
    //   console.log(entries.isIntersecting)
      if (entries.isIntersecting) {
        setShow(true)
        observer.disconnect();
      }
    })
    const element = elementPhotoCard.current as HTMLElement
    observer.observe(element);
    // console.log(element)
  },[])

return {show,elementPhotoCard}
}
