import { Link } from "react-router-dom"
import { homeLink } from "../../app/global"
import { Button } from "react-bootstrap"
const EmptyCart = () =>{
    return (
        <div className='empty_cart'>
            <img className='empty_cart_img' src={`${homeLink}/homepage/empty_cart.webp}`} alt="empty cart" />
            <div>Your Cart is Empty</div> 
            
         </div>
    )
    
}
export default EmptyCart