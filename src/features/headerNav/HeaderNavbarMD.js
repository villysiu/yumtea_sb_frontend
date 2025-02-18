import {Button, Container, Nav, Navbar, Offcanvas} from 'react-bootstrap';

import Title from './Title';
import HeaderDrinksButton from './HeaderDrinksButton'
import HeaderVisitButton from './HeaderVisitButton'
import HeaderHomeButton from './HeaderHomeButton'
import HeaderUserButton from './HeaderUserButton'
import CartIcon from '../cart/CartIcon'
import {useState} from "react";
import {List} from "react-bootstrap-icons";

const HeaderNavbarMD = () =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
            {/*<Title />*/}
            <Navbar collapseOnSelect expand={false} sticky="top" className="bg-body-tertiary header_wrapper">

                <Button className="hamburger_button" onClick={handleShow}>
                    <List size={25}/>
                </Button>


                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Yummy Tea</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Some text as placeholder. In real life you can have the elements you
                        have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
                </Offcanvas>

                {/*<Title />*/}
                <Nav className="header_right_wrapper">
                    <HeaderUserButton />
                    <CartIcon />
                </Nav>
         
          
        </Navbar>
    </>
    )
}
export default HeaderNavbarMD;