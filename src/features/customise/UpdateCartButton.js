import { Button } from "react-bootstrap"

import { useDispatch, useSelector } from "react-redux"
import { updateItem, updateItemInCart } from "../cart/cartSlice"
import { resetMenuitemClicked } from '../menuitem/menuitemSlice'
import { USDollar } from "../../app/global"

const UpdateCartButton = ({cartitem_pk, price, quantity, menuitem_id, temp, milk_id, sweetness, size, setShow}) =>{
    console.log("update cart button ")
    console.log(cartitem_pk, temp, size, quantity, price)

    const dispatch = useDispatch()
    const current_user_status = useSelector(state=>state.user.current_user.status)
    // // const milk = useSelector(state=>getMilkById(state, milk_id))

    const handleClick = (e) =>{
        const data = {
            'pk': cartitem_pk,
            'menuitem_pk':menuitem_id,
            'milk_pk': milk_id,
            'quantity': quantity, 
            'temperature': temp, 
            'size': size, 
            'sweetness': sweetness,
            'price': price
        }
        console.log(data)

        if(current_user_status !== 'succeeded'){
            console.log("update to cart without user ")
            
            dispatch(updateItem(data))

        } 
        else{
            console.log("update cart with user ")
            
            dispatch(updateItemInCart(data))
        }    
        setShow(false) 
        dispatch(resetMenuitemClicked())
    }

    return(
        <div>
            <Button className='update_cart_button' 
            onClick={handleClick}
            >
                Update  {USDollar.format(quantity * price)}
            </Button>
        </div>

    )
}
export default UpdateCartButton