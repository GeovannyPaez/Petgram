
import { MdHome, MdFavorite, MdAccountCircle } from 'react-icons/md'

import { Nav, Anchor as NavLink } from './style'

export const NavBar = () => {
    const sizeIcon= 32
    return (
        <Nav>
            
                <NavLink to={'/'}  >
                    <MdHome cursor={'pointer'} size={sizeIcon} />
                </NavLink>
                <NavLink to={'/favorites'}>
                    <MdFavorite cursor={'pointer'}size={sizeIcon} />
                </NavLink>
                <NavLink to={'/profile'}>
                    <MdAccountCircle cursor={'pointer'}size={sizeIcon} />
                </NavLink>

        </Nav>
    )
}
