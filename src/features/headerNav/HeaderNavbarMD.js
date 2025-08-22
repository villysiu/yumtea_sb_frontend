import {Button, Nav, Navbar} from 'react-bootstrap';
import HeaderUserButton from './HeaderUserButton'
import CartIcon from '../cart/CartIcon'
import {useState} from "react";
import OffcanvasMD from "./OffcanvasMD";
import {homeLink} from "../../app/global";

const HeaderNavbarMD = () =>{
    const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    // const {currentUser} = useSelector(state=>state.user)
    return(
        <>
            <Navbar collapseOnSelect expand={false} sticky="top" className="bg-body-tertiary header_wrapper">

                <Button className="hamburger_button" onClick={()=>setShow(true)}>
                    {/*<img alt="" id='yumtea_logo'/>*/}
                    <img src ={`${homeLink}/logo/yumtea_logo_Char.png`} alt="logo" className="yumtea_char" />
                </Button>

                <OffcanvasMD show={show} setShow={setShow} />


                {/*<Title />*/}
                {/*{ !currentUser  &&*/}
                <Nav className="header_right_wrapper">
                    <HeaderUserButton />
                    <CartIcon />
                </Nav>
                {/*}*/}
         
          
        </Navbar>
    </>
    )
}
export default HeaderNavbarMD;