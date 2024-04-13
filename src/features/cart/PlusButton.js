import { createContext } from "react"
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { updateCartItemQty, updateQty } from "./cartSlice"

const PlusButton = ({cartItem, inventory, setError})=>{
    console.log(cartItem)
    const dispatch = useDispatch()
    const current_user = useSelector(state => state.user.current_user)
    // const cart_status = useSelector(state => state.cart.cart.status)
    const handleClick = () => {
        if(current_user.username === null){
            // dispatch(increment({'singleMenuitem': menuitem, 'milk': milk  }))
            dispatch(updateQty({'cartitem_id': cartItem.pk, 'unit_price': cartItem.unit_price}))
        }else{
            console.log('in plus')
            console.log(cartItem.quantity)
            dispatch(updateCartItemQty({'cartitemId': cartItem.pk, 'quantity': cartItem.quantity+1}))}
        
    }
    const handleDisabledClick = () =>{
        setError("Maximum inventory reached")
    }
    
    if(cartItem.quantity===inventory)
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