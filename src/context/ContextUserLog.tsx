import { createContext, ReactElement } from 'react'
import { useAuth } from '../hooks/useAuth'
interface PropsContext {
    isAuth?: boolean,
    onVerifyLogin: (route: ReactElement) => ReactElement,
    activeAuth: (token: string) => void,
    logout: () => void
}
interface IChildren {
    children: ReactElement
}
export const UserContext = createContext<PropsContext | null>(null)

export const UserProvider: React.FC<IChildren> = ({ children }) => {
    const { isAuth, onVerifyLogin, activeAuth, logout } = useAuth();
    return <UserContext.Provider value={{ isAuth, activeAuth, onVerifyLogin, logout }}>
        {children}
    </UserContext.Provider>
}