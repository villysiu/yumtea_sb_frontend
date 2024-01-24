import { Link } from "react-router-dom"
import { homeLink } from "../../app/global"
import { Button } from "react-bootstrap"
const EmptyCart = () =>{
    return (
        <div className='empty_cart'>
            <div>Your Cart is Empty</div> 
            <div className='my-3 cart_d'>
                <Link to={`${homeLink}/wines`}>
                    <Button className='gold_button short'>Continue Shopping</Button>
                </Link>
            </div>
        </div>
    )
}
export default EmptyCart