import {Navbar, Nav} from 'react-bootstrap';

import Title from './Title';
import HeaderDrinksButton from './HeaderDrinksButton'
import HeaderVisitButton from './HeaderVisitButton'
import HeaderHomeButton from './HeaderHomeButton'
import HeaderUserButton from './HeaderUserButton'
import CartIcon from '../cart/CartIcon'
const HeaderNavbarXL = () =>{
    
    return(
        <div className='header_wrapper'>
            <Navbar expand="xl" sticky="top" className="bg-body-tertiary">
                <Nav className="header_inner_wrapper">

                <Title />
                
                <HeaderHomeButton />
                <HeaderVisitButton />
                <HeaderDrinksButton />
            
                <HeaderUserButton />

                    <CartIcon />
                </Nav>
            </Navbar>
        </div>
    )
}
export default HeaderNavbarXL;