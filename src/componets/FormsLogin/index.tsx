import { FC, } from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { IUserCredentials } from "../../routes/Login";
import LoadingSpinner from "../LoadingSpinner";
import { Input, Form, Span, Button, H2 } from './style'
interface IUserForm {
    title: string,
    onSubmit: (input: IUserCredentials) => void,
    loading?: boolean,
    error?: string
}

export const UserForm: FC<IUserForm> = ({ title, error, onSubmit, loading = false }) => {
    const email = useInputValue();
    const password = useInputValue();
    const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        onSubmit({
            email: email.value,
            password: password.value
        })
    }

    return (
        <>
            <Form onSubmit={onHandleSubmit}>
                <H2>{title}</H2>
                <Input disabled={loading} type="email" placeholder="e-mail" {...email} />
                <Input disabled={loading} type="password" placeholder="password"{...password} />
                
                <Button>{loading ? <LoadingSpinner /> : title}</Button>
            </Form>
            {error && <Span>{error}</Span>}
          
        </>

    )
}