import {Button, Container, Nav, Navbar, Offcanvas} from 'react-bootstrap';

import Title from './Title';
import HeaderDrinksButton from './HeaderDrinksButton'
import HeaderVisitButton from './HeaderVisitButton'
import HeaderHomeButton from './HeaderHomeButton'
import HeaderUserButton from './HeaderUserButton'
import CartIcon from '../cart/CartIcon'
import {useState} from "react";
import {List} from "react-bootstrap-icons";
import OffcanvasMD from "./OffcanvasMD";
import {homeLink} from "../../app/global";

const HeaderNavbarMD = () =>{
    const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return(
        <>
            <Navbar collapseOnSelect expand={false} sticky="top" className="bg-body-tertiary header_wrapper">

                <Button className="hamburger_button" onClick={()=>setShow(true)}>
                    {/*<img alt="" id='yumtea_logo'/>*/}
                    <img src ={`${homeLink}/logo/yumtea_logo_Char.png`} alt="logo" className="yumtea_char" />
                </Button>

                <OffcanvasMD show={show} setShow={setShow} />


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