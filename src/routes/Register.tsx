import { useMutation } from '@apollo/client'
import  { useContext } from 'react'
import { UserForm } from '../componets/FormsLogin'
import { UserContext } from '../context/ContextUserLog'
import { singupMutation } from '../graphql/mutations/singup'
import { Link, useNavigate } from 'react-router-dom'
export interface IUserCredentials {
    email: string,
    password: string
}
interface ResRegister {

    signup: string

}
export const Register = () => {
    const [register, { error, loading, data }] = useMutation<ResRegister>(singupMutation);
    const navigate = useNavigate()
    const constex = useContext(UserContext)
    if (constex === null) throw new Error('context Not defined')
    // console.log(data, error)

    const onSubmitRegister = (input: IUserCredentials) => {
        register({
            variables: {
                input
            }
        }).then((res) => {
            console.log(res)
            const token = res.data?.signup as string
            constex.activeAuth(token)
            navigate('/')
        })
    }
    const errorMessage = error && 'Usuario ya existe o hay algún problema.'
    return (
        <>
            <UserForm title='Registrarse' onSubmit={onSubmitRegister} loading={loading} error={errorMessage} />
            <span>¿ Ya tienes una cuenta ? <Link to={'/login'}> inicia sección</Link></span>
        </>
    )
}
