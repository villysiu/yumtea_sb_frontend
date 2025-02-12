import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { batchAddItems, fetchCart } from "./cartSlice"
import { resetCartBanner} from './cartSlice'

const CartApp = () => {
    console.log("in cartApp")
    const dispatch = useDispatch()
    const {fetch_user_status, } = useSelector(state => state.user)
    const {fetchCartStatus, cartBannerMessage} = useSelector(state => state.cart)
    const batchAddStatus = useSelector(state=>state.cart.batchAddStatus)


    // useEffect(()=>{
    //     if(current_user_status === 'succeeded' && batchAddStatus === 'idle' ){
    //         dispatch(batchAddItems(temp_cart))
    //
    //     }
    // }, [current_user_status, batchAddStatus, temp_cart, dispatch])

    useEffect(()=>{
        if(fetch_user_status === 'succeeded' && fetchCartStatus === 'idle'
            // && batchAddStatus ==='succeeded'
        ){
            console.log("there is an user and api cart not fetched ('idle)")
            dispatch(fetchCart())
            
        }
    }, [dispatch, fetch_user_status, fetchCartStatus, batchAddStatus])

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