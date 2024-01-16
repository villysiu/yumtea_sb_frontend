import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { decrement } from "./cartSlice"
import { useEffect } from "react"
const MinusButton = ({cartitemId, qty, setQuantity, setError})=>{
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(decrement(cartitemId))
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

    if(qty===1)
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