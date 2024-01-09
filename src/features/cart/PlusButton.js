import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { increment } from "./cartSlice"
const PlusButton = ({itemId, qty, setError})=>{
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(increment(itemId))
        
    }
    return(
        <Button className="qty_plus rounded-end" variant="light" onClick={handleClick}>+</Button>
    )
}
export default PlusButton