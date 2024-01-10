import { useDispatch } from "react-redux"
import { removeItem } from "./cartSlice"
import { Link } from "react-router-dom"
const RemoveButton = ({itemId}) =>{
    const dispatch = useDispatch()
    const handleClick = () =>{
        dispatch(removeItem(itemId))
    }
    return(
        <Link onClick={handleClick}>Remove</Link>
    )
}
export default RemoveButton