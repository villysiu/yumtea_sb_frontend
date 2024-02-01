import { Button, NavItem } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { decrement } from "./cartSlice"
import { useEffect } from "react"
import { updateCartItem } from "./cartSlice"
const MinusButton = ({cartitem, setQuantity, setError})=>{
    const dispatch = useDispatch()
    const current_user = useSelector(state => {
        return state.user.current_user
    })
    const handleClick = () => {
        if(current_user.username === null){
            dispatch(decrement({'menuitemId':cartitem.menuitem_id, 'milkId': cartitem.milk_id }))
           
            
        }else{
            // dispatch()
            console.log("dedect item from api, ")
            console.log('in minus')
            console.log(cartitem.quantity)
            dispatch(updateCartItem({'cartitemId': cartitem.pk, formData: {'quantity': cartitem.quantity-1}}))
        }
        setQuantity(q=>q-1)
    }
    const handleDisabledClick = () => {
        setError("Minimum quantity is 1")
    }
    useEffect(() => {
        var timer = setInterval(()=>{
            setError("")
        }, 5000 )
        return function cleanup() {
            clearInterval(timer)
        }
    }, [setError]);

    if(cartitem.quantity===1)
        return(
            <span  onClick={handleDisabledClick}>
                <Button className="qty_minus rounded-start" variant="light"
                disabled
                >-</Button>
            </span>
        )
    return(
        <Button className="qty_minus rounded-start" variant="light"
        onClick={handleClick}>-</Button>
    )
}
export default MinusButton