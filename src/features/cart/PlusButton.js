import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { updateSingleCartQuantity, increment } from "./cartSlice"

const PlusButton = ({cartitem, 
    // menuitemId, qty, 
    setQuantity, inventory, setError})=>{
    const dispatch = useDispatch()
    const current_user = useSelector(state => state.user.current_user)
    // const cart_status = useSelector(state => state.cart.cart.status)
    const handleClick = () => {
        if(current_user.username === null){
            dispatch(increment({"menuitemId": cartitem.menuitem_id}))
            
        }else{
            console.log('in plus')
            console.log(cartitem.quantity)
            dispatch(updateSingleCartQuantity({'cartitemId': cartitem.pk, 'quantity': cartitem.quantity+1}))
        }
        setQuantity(q=>q+1)
    }
    const handleDisabledClick = () =>{
        setError("Maximum inventory reached")
    }
    
    if(cartitem.quantity===inventory)
        return(
            <span onClick={handleDisabledClick}>
                <Button className="qty_plus rounded-end" variant="light" 
                disabled onClick={handleDisabledClick}
                >+</Button>
            </span>
        )
    return(

        <Button className="qty_plus rounded-end" variant="light" onClick={handleClick}>+</Button>
    )
}
export default PlusButton