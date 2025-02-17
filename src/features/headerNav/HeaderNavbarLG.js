import {Container, Nav, Navbar, Offcanvas} from 'react-bootstrap';

import Title from './Title';
import HeaderDrinksButton from './HeaderDrinksButton'
import HeaderVisitButton from './HeaderVisitButton'
import HeaderHomeButton from './HeaderHomeButton'
import HeaderUserButton from './HeaderUserButton'
import CartIcon from '../cart/CartIcon'

const HeaderNavbarLG = () =>{
    return(
        <div className='header_wrapper'>
            <Navbar collapseOnSelect expand={false} sticky="top" className="bg-body-tertiary header_inner_wrapper">
            
           
                {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} className="toogle_button"/>
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expandxxl`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                    placement="start">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                        Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Category</Nav.Link>
                            <Nav.Link href="#action2">Visit</Nav.Link>
                        </Nav>  
                    </Offcanvas.Body>
                </Navbar.Offcanvas>

<Title />
            
                <HeaderUserButton />
                <CartIcon />
         
          
        </Navbar>
    </div>
    )
}
export default HeaderNavbarLG;