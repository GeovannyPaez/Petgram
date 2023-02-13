import { useMutation } from '@apollo/client'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserForm } from '../componets/FormsLogin'
import { Button } from '../componets/FormsLogin/style'
import { UserContext } from '../context/ContextUserLog'
import { mutationLogin } from '../graphql/mutations/login'
import { singupMutation } from '../graphql/mutations/singup'

export const Unlogin = () => {
  const navigate = useNavigate();
  const onNavigate=()=>{
    navigate('/login')
  }
    return(
      <div>
        <h3>Contenido Bloqueado</h3>
          <p>Debes iniciar seccion para poder ingresar </p>
           <Button type='button' onClick={onNavigate}>Iniciar Seccion</Button>
      </div>
    )
}
