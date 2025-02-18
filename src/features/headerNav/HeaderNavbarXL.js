import {Container, Nav, Navbar, Offcanvas} from 'react-bootstrap';

import Title from './Title';
import HeaderDrinksButton from './HeaderDrinksButton'
import HeaderVisitButton from './HeaderVisitButton'
import HeaderHomeButton from './HeaderHomeButton'
import HeaderUserButton from './HeaderUserButton'
import CartIcon from '../cart/CartIcon'
import HeaderCartButton from "../cart/HeaderCartButton";

const HeaderNavbarXL = () =>{
    
    return(
        <div className='header_wrapper'>
            <Navbar expand="xl" sticky="top" className="bg-body-tertiary header_inner_wrapper">
            
                
                <Title />
                
                <HeaderHomeButton />
                <HeaderVisitButton />
                <HeaderDrinksButton />
            
                <HeaderUserButton />
                <HeaderCartButton />
    
          
            </Navbar>
        </div>
    )
}
export default HeaderNavbarXL;