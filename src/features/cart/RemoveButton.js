import { useDispatch } from "react-redux"
import { removeItem } from "./cartSlice"
import { Link } from "react-router-dom"
import { removeItemFromCart } from "./cartSlice"
import { useSelector } from "react-redux"

const RemoveButton = ({cartitemId, title}) =>{
    const dispatch = useDispatch()
    const current_user = useSelector(state => state.user.current_user)
    const handleClick = () => {
        if(current_user.username === null){
            dispatch(removeItem(cartitemId))
            
        }else{
            dispatch(removeItemFromCart({'cartitemId': cartitemId, 'title': title}))
        }
    }

    return(
        <Link onClick={handleClick}>Remove</Link>
    )
}
export default RemoveButton