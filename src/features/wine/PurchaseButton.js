import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
const PurchaseButton = ({itemId}) =>{
    const dispatch = useDispatch()
    const handleClick = (e) =>{
        console.log("purchase button ")
        // e.removeDefault()
        // dispatch(addItemToCart(itemId))
        // dispatch(addsomething(itemId))
    }
    return(
        <Button className='purchase_button' onClick={handleClick}>Purchase</Button>
    )
}
export default PurchaseButton