import { Link } from "react-router-dom"
import { homeLink } from "../../app/global"
import { Button } from "react-bootstrap"
const EmptyCart = () =>{
    return (
        <div className='empty_cart'>
            <img className='empty_cart_img' src="http://127.0.0.1:8001/empty_cart.webp" />
            <div>Your Cart is Empty</div> 
            
         </div>
    )
    
}
export default EmptyCart