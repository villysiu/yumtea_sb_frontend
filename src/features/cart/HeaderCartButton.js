import {Modal} from "react-bootstrap";
import CartModal from "./CartModal";
import {CartFill, PersonCircle} from "react-bootstrap-icons";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {homeLink} from "../../app/global";
import LogoutNavButton from "../user/LogoutNavButton";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {getSubtotal} from "./cartSlice";
import Subtotal from "./Subtotal";
import CheckoutButton from "./CheckoutButton";
import CartModalItem from "./CartModalItem";

const HeaderCartButton =() =>{
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();
    const {count} = useSelector(state => getSubtotal(state))
    const {cartMessage} = useSelector(state => state.message)
    const {carts} = useSelector(state=>state.cart)

    // const [cartShow, setCartShow] = useState(false);

    useEffect(()=>{
        if(cartMessage !== null){
            isDropdownOpen(true)
        }
    }, [cartMessage])
    // Handle dropdown open
    const handleToggle = (isOpen) => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    // Do not show cart icon in header navbar whrn in the following pages
    if(location.pathname === '/secure/checkout')
        return null

    return(
        <>
            {isDropdownOpen && <div className="dropdown-overlay" />}
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
                <Nav>
                    <NavDropdown
                        className="nav-dropdown"
                        show={isDropdownOpen}
                        onToggle={handleToggle}
                        drop = "down"
                        align="end"
                        title={
                        <div
                            className="cart_button_wrapper"
                        >
                            <CartFill className="cart_icon" />
                            {count > 0 && <div className='cartitem_count'> {count} </div>}
                        </div>
                        }
                    >

                        <NavDropdown.Header>Your Cart</NavDropdown.Header>
                        <NavDropdown.Divider />
                        {
                            carts.map(cart => <CartModalItem key={cart.id} cartitem={cart} setIsDropdownOpen={setIsDropdownOpen} />)
                        }

                        <NavDropdown.Header>
                            <Subtotal />

                            <CheckoutButton setIsDropdownOpen={setIsDropdownOpen}/>
                        </NavDropdown.Header>

                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </>
    )
}
export default HeaderCartButton