import { Button } from "../componets/FormsLogin/style"
import {useContext,useEffect} from 'react'
import { UserContext } from "../context/ContextUserLog"
import { useNavigate } from "react-router-dom";

export const Profile:React.FC = () => {
  const context = useContext(UserContext);
  // const navigate = useNavigate();
  if(!context) throw new Error('Context is Null');
  // useEffect(()=>{
  //   if(!context.isAuth){
  //     navigate('/login')
  //   }
  //   return;
  // },[])
  const onHandleLogout =()=>{
    context.logout();
  }
  return (
   <>
     <div>Profile</div>
    <Button onClick={onHandleLogout}>Cerrar Sessión</Button>
   </>
  )
}
