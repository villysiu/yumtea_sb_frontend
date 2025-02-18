import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import {addItemToCart, fetchCart} from "./cartSlice"
import { resetCartBanner} from './cartSlice'

const GetCarts = () => {
    console.log("in cartApp")
    const dispatch = useDispatch()
    const {currentUser} = useSelector(state => state.user)
    const {fetchCartStatus, tempCart} = useSelector(state => state.cart)


    useEffect(()=>{
        if(currentUser !== null && tempCart !== null){
            dispatch(addItemToCart(tempCart));

        }
    }, [currentUser, dispatch])

    useEffect(()=>{
        if(currentUser !== null && fetchCartStatus === 'idle'){
            console.log("there is an user and api cart not fetched ('idle)")
            dispatch(fetchCart())
            
        }
    }, [dispatch, currentUser, fetchCartStatus])


    return null
}
export default GetCarts