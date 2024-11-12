import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { batchAddItems, fetchCart } from "./cartSlice"
import { resetCartBanner} from './cartSlice'

const CartApp = () => {
    const dispatch = useDispatch()
    const current_user_status = useSelector(state => state.user.current_user.status)
    const temp_cart = useSelector(state=> state.cart.temp_cart)
    const cart_status = useSelector(state=>state.cart.cart.status)
    const batchAddStatus = useSelector(state=>state.cart.batchAddStatus)
    const cartBannerMessage = useSelector(state => state.cart.cartBannerMessage)

    useEffect(()=>{
        if(current_user_status === 'succeeded' && batchAddStatus === 'idle' ){
            dispatch(batchAddItems(temp_cart))
            
        }
    }, [current_user_status, batchAddStatus, temp_cart, dispatch])

    useEffect(()=>{
        if(current_user_status === 'succeeded' && cart_status === 'idle' && batchAddStatus ==='succeeded'){
            console.log("there is an user and api cart not fetched ('idle)")
            dispatch(fetchCart())
            
        }
    }, [dispatch, current_user_status, cart_status, batchAddStatus])

    useEffect(() => {
        if(cartBannerMessage !== ""){
            const msgTimer = setTimeout(() => {
                dispatch(resetCartBanner());
            }, 3000);
            return () => clearTimeout(msgTimer);
        }
        
        
    }, [cartBannerMessage, dispatch]);

    return null
}
export default CartApp