import {Navbar, Nav} from 'react-bootstrap';

import Title from './Title';
import HeaderDrinksButton from './HeaderDrinksButton'
import HeaderVisitButton from './HeaderVisitButton'
import HeaderHomeButton from './HeaderHomeButton'
import HeaderUserButton from './HeaderUserButton'
import CartIcon from '../cart/CartIcon'
const HeaderNavbarXL = () =>{
    
    return(
        <div className='header_full_wrapper'>
            <Navbar expand="false" sticky="top" className="bg-body-tertiary header_wrapper">
                <Nav
                    className="header_left_wrapper"
                >
                    <Title />

                    {/*<HeaderHomeButton />*/}
                    <HeaderDrinksButton />
                    <HeaderVisitButton />
                </Nav>
                <Nav
                    className="header_right_wrapper"
                >
                    <HeaderUserButton />
                    <CartIcon />
                </Nav>
            </Navbar>
        </div>
    )
}
export default HeaderNavbarXL;