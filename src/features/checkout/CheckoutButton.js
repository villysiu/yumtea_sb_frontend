import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {homeLink} from '../../app/global'
const CheckoutButton = ({setCartShow}) =>{

    const handleClick = () =>{
        console.log('clicke check out button') 
        setCartShow(false)
    }
    return (
        <Link to={`${homeLink}/secure/checkout`}
              state={{ clicked: "checkout_button", from: '/secure/checkout'}}
              onClick={handleClick}>
            <Button className='checkout_button' >Proceed to Checkout</Button>
        </Link>
    )
}
export default CheckoutButton