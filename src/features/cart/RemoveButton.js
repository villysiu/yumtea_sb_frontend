import { useDispatch } from "react-redux"
import { removeItem } from "./cartSlice"
import { Link } from "react-router-dom"
import { removeItemFromCart } from "./cartSlice"
import { useSelector } from "react-redux"

const RemoveButton = ({cartId, cartItem, title}) =>{
    console.log(cartItem)
    const dispatch = useDispatch()
    const current_user = useSelector(state => state.user.current_user)
    const handleClick = () => {
        if(current_user.username === null){
            // dispatch(removeItem({'menuitemId': cartItem.menuitem_id, 'milkId': cartItem.milk_id}))
            // dispatch(removeItem(cartId))
            dispatch(removeItem({'id': cartId, 'linetotal': cartItem.linetotal, 'quantity': cartItem.quantity}))
            
            
        }else{
            dispatch(removeItemFromCart({'cartitemId': cartItem.pk, 'title': title}))
        }
    }

    return(
        <Link onClick={handleClick}>Remove</Link>
    )
}
export default RemoveButton