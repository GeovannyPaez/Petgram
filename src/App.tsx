import { useContext, lazy, Suspense } from 'react'
import { ListOfPhotoCards } from './componets/ListOfPhotoCards';
import { Logo } from './componets/Logo';
import { GlobalStyle } from './styles/globalStyle';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AlonePhotoCard } from './componets/AlonePhotoCard';
import { Home } from './routes/Home';
import { ListOfPhotosByCategory } from './routes/ListOfPhotosByCategory';
import { NavBar } from './componets/NavBar';
// import { Favorites } from './routes/Favorites';
import { Profile } from './routes/Profile';
import { UserContext } from './context/ContextUserLog';
// import { Login } from './routes/Login';
// import { Register } from './routes/Register';

const Favorites = lazy(() => import('./routes/Favorites').then(module => ({ default: module.Favorites })))
const Login = lazy(() => import('./routes/Login').then(module => ({ default: module.Login })))
const Register = lazy(() => import('./routes/Register').then(module => ({ default: module.Register })))

function App() {
  const context = useContext(UserContext)
  if (context == null) throw new Error('context not properky initialized');
  return (
    <>
      <Suspense fallback={<div>Loading....</div>}>
      <HashRouter>
        <Logo />
        <GlobalStyle />
        
          <Routes>
            <Route element={<Home />}>
              <Route path='/' element={<ListOfPhotoCards />} />
              <Route path='pets/:id' element={<ListOfPhotosByCategory />} />
            </Route>
            <Route path='/photo-detail/:id' element={<AlonePhotoCard />} />
            <Route path='/favorites' element={context.onVerifyLogin(<Favorites />)} />
            <Route path='/profile' element={context.onVerifyLogin(<Profile />)} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
      
        <NavBar />
      </HashRouter>
      </Suspense>
    </>
  )
}



export default App
