import { homeLink } from "../../app/global"
import {Cart4} from "react-bootstrap-icons";
const EmptyCart = () =>{
    return (
        <div className='empty_cart'>
            {/*<img className='empty_cart_img' src={`${homeLink}/homepage/empty_cart.webp}`} alt="empty cart" />*/}
            <Cart4 size={100}/>
            <div className='mt-3'><b>Your Cart is Empty</b></div>
            
         </div>
    )
    
}
export default EmptyCart