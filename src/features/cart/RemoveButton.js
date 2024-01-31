import { useDispatch } from "react-redux"
import { removeItem } from "./cartSlice"
import { Link } from "react-router-dom"
import { removeItemFromCart } from "./cartSlice"
import { useSelector } from "react-redux"

const RemoveButton = ({cartitem}) =>{
    console.log(cartitem)
    const dispatch = useDispatch()
    const current_user = useSelector(state => state.user.current_user)
    const handleClick = () => {
        if(current_user.username === null){
            dispatch(removeItem({'menuitemId': cartitem.menuitem_id, 'milkId': cartitem.milk_id}))
            
        }else{
            dispatch(removeItemFromCart({'cartitemId': cartitem.pk, 'title': cartitem.title}))
        }
    }

    return(
        <Link onClick={handleClick}>Remove</Link>
    )
}
export default RemoveButton