import { Button } from "react-bootstrap"

import { useDispatch, useSelector } from "react-redux"
import { updateItem, updateItemInCart } from "../cart/cartSlice"
import { resetMenuitemClicked } from '../menuitem/menuitemSlice'
import { USDollar } from "../../app/global"

const UpdateCartButton = ({data, handleHide}) =>{
    console.log("update cart button ")
    console.log(data)
    // {
        //     'pk': cartitem_pk,
        //     'menuitem_pk':menuitem_id,
        //     'milk_pk': milk_id,
        //     'quantity': quantity, 
        //     'temperature': temp, 
        //     'size': size, 
        //     'sweetness': sweetness,
        //     'price': price
        // }

    const dispatch = useDispatch()
    const current_user_status = useSelector(state=>state.user.current_user.status)

    const handleClick = (e) =>{
    
        if(current_user_status !== 'succeeded'){
            dispatch(updateItem(data))
        } 
        else{
            dispatch(updateItemInCart(data))
        }    

        handleHide()
    }

    return(
        <div>
            <Button className='update_cart_button' 
            onClick={handleClick}
            >
                Update  {USDollar.format(data.quantity * data.price)}
            </Button>
        </div>

    )
}
export default UpdateCartButton