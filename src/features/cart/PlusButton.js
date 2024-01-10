import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { increment } from "./cartSlice"
const PlusButton = ({itemId, qty, inventory, setError})=>{
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(increment(itemId))
        
    }
    const handleDisabledClick = () =>{
        setError("Maximum inventory reached")
    }
    if(qty===inventory)
        return(
            <span  onClick={handleDisabledClick}>
                <Button className="qty_plus rounded-end" variant="light" 
                disabled
                >+</Button>
            </span>
        )
    return(
        <Button className="qty_plus rounded-end" variant="light" onClick={handleClick}>+</Button>
    )
}
export default PlusButton