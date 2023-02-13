import { useMutation } from '@apollo/client'
import { useContext } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { UserForm } from '../componets/FormsLogin'
import { UserContext } from '../context/ContextUserLog'
import { mutationLogin } from '../graphql/mutations/login'

export interface IUserCredentials {
    email: string,
    password: string
}
interface ResLogin {
        login:string
}
export const Login = () => {
    const [login, { error, loading, data }] = useMutation<ResLogin>(mutationLogin);
    const navigate = useNavigate();
    const constex = useContext(UserContext)
    if (constex === null) throw new Error('context Not defined')
    // console.log(data, error)

    const onSubmitLogin =  (input: IUserCredentials) => {
         login({
            variables: {
                input
            }
        }).then((res)=>{
            const token = res.data?.login as string
            constex.activeAuth( token);
            navigate('/')
        })
    }
    const errorMessage = error && 'e-mail o contraseña incorreta.'
    return (
        <>
            <UserForm title='Iniciar Sección' onSubmit={onSubmitLogin} loading={loading} error={errorMessage} />
            <span>¿No tines cuenta? <Link to={'/register'}> Regístrate</Link></span>
        </>
    )
}
