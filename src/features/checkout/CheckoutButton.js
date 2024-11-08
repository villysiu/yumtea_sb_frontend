import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {homeLink} from '../../app/global'
const CheckoutButton = ({setCartShow}) =>{
    console.log(homeLink)
    return (
        <Link to={`${homeLink}/secure/checkout`}>
            <Button className='checkout_button' onClick={()=>setCartShow(false)}>Proceed to Checkout</Button>
        </Link>
    )
}
export default CheckoutButton