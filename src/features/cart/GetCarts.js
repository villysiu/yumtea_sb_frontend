import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import {addItemToCart, fetchCart} from "./cartSlice"
import {useLocation, useNavigate} from "react-router-dom";

const GetCarts = () => {
    console.log("in cartApp")
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const {currentUser} = useSelector(state => state.user)
    const {fetchCartStatus, tempCart} = useSelector(state => state.cart)
    const location = useLocation();


    useEffect(()=>{
        if(tempCart !== null && currentUser !== null)
                dispatch(addItemToCart(tempCart))

    }, [currentUser, dispatch, tempCart])

    useEffect(()=>{
        if(currentUser !== null && fetchCartStatus === 'idle'){
            console.log("there is an user and api cart not fetched ('idle)")
            dispatch(fetchCart())
            
        }
    }, [dispatch, currentUser, fetchCartStatus])


    return null
}
export default GetCarts