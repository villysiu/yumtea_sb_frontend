import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { batchAddItems } from "./cartSlice"

const CartApp = () => {
    const dispatch = useDispatch()
    const current_user = useSelector(state => state.user.current_user)
    const temp_cart = useSelector(state=> state.cart.temp_cart)

    useEffect(()=>{
        if(current_user && temp_cart.length>0 ){
            dispatch(batchAddItems(temp_cart))
        }
    }, [current_user])

    return null
}
export default CartApp