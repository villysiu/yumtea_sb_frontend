import NavDropdown from "react-bootstrap/NavDropdown";
import CartModalItem from "./CartModalItem";
import Subtotal from "./Subtotal";
import CheckoutButton from "./CheckoutButton";
import {useSelector} from "react-redux";
import CartMessage from "./CartMessage";

const CartDropdown = ({setIsDropdownOpen}) =>{
    const {carts} = useSelector(state=>state.cart)
    return (
        <>

            <NavDropdown.Header>Your Cart</NavDropdown.Header>
            <CartMessage />
            <NavDropdown.Divider />
            {
                carts.map(cart => <CartModalItem key={cart.id} cartitem={cart} setIsDropdownOpen={setIsDropdownOpen} />)
            }

            <NavDropdown.Header>
                <Subtotal />
                <CheckoutButton setIsDropdownOpen={setIsDropdownOpen}/>
            </NavDropdown.Header>
        </>
    )
}
export default CartDropdown