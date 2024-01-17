import { Button, NavItem } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { decrement } from "./cartSlice"
import { useEffect } from "react"
import { updateSingleCartQuantity } from "./cartSlice"
const MinusButton = ({cartitem, setQuantity, setError})=>{
    const dispatch = useDispatch()
    const current_user = useSelector(state => {
        return state.user.current_user
    })
    const handleClick = () => {
        if(current_user.username === null){
            dispatch(decrement(cartitem.pk))
            
        }else{
            // dispatch()
            console.log("dedect item from api, ")
            console.log('in minus')
            console.log(cartitem.quantity)
            dispatch(updateSingleCartQuantity({'cartitemId': cartitem.pk, 'quantity': cartitem.quantity-1}))
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