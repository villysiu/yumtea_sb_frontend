import { Link } from "react-router-dom"
import { homeLink } from "../../app/global"
import { Button } from "react-bootstrap"
const EmptyCart = () =>{
    return (
        <div className='empty_cart'>
            <div>Your Cart is Empty</div> 
            <div className='my-3 cart_d'>
                <Link to={`${homeLink}/`}>
                    <Button className='gold_button'>Continue Shopping</Button>
                </Link>
            </div>
        </div>
    )
}
export default EmptyCart