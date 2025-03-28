import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import {addItemToCart, fetchCart, removeItemFromCart, updateItemInCart} from "./cartSlice"
import {useLocation, useNavigate} from "react-router-dom";

const GetCarts = () => {
    console.log("in cartApp")
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const {currentUser} = useSelector(state => state.user)
    const {fetchCartStatus, tempCart, cart} = useSelector(state => state.cart)
    const location = useLocation();


    useEffect(()=>{
        if(tempCart !== null && currentUser !== null && cart.status === "failed") {
            console.log("has cuser, tempcart and failed update")
            if (cart.action === "add")
                dispatch(addItemToCart(tempCart))

            else if (cart.action === "update")
                dispatch(updateItemInCart(tempCart))

            else if (cart.action === "remove")
                dispatch(removeItemFromCart(tempCart))
        }
    }, [currentUser, dispatch, tempCart])



    useEffect(()=>{
        if(currentUser !== null && fetchCartStatus === 'idle'){
            console.log("there is an user and api cart not fetched ('idle)")
            dispatch(fetchCart())
            
        }
    }, [dispatch, currentUser, fetchCartStatus])


    useEffect(() => {
        // console.log(addToCartStatus)
        if(cart.status === "failed")
            navigate('/user/signin', { state: location.pathname });
    }, [cart]);

    return null
}
export default GetCarts