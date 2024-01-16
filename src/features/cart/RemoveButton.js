import { useDispatch } from "react-redux"
import { removeItem } from "./cartSlice"
import { Link } from "react-router-dom"
const RemoveButton = ({cartitemId}) =>{
    const dispatch = useDispatch()
    const handleClick = () =>{
        dispatch(removeItem(cartitemId))
    }
    return(
        <Link onClick={handleClick}>Remove</Link>
    )
}
export default RemoveButton