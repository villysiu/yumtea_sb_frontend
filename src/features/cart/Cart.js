import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchCart, getItemCount } from "./cartSlice"
import { CartFill } from "react-bootstrap-icons"

import CartItem from "./CartItem"
import CartSummary from "./CartSummary"

import { batchAddItems } from "./cartSlice"
import EmptyCart from "./EmptyCart"
import FullSpinner from "../headerNav/FullSpinner"

const Cart = () => {
    console.log("in cart")
    const dispatch = useDispatch()
    const current_user = useSelector(state => state.user.current_user)
    const cart = useSelector(state=>state.cart.cart)
    const itemCount = useSelector(state=>getItemCount(state.cart.cart.cart_arr))
    
    useEffect(()=>{
        if(current_user.username && cart.status === 'idle' ){
            console.log("there is an user and api cart not fetched ('idle)")
            dispatch(fetchCart())
            .then(()=>{
                if(cart.temp_cart_arr.length>0)
                    dispatch(batchAddItems())
            })
        }
    }, [dispatch, current_user.username, cart.cart_arr, cart.status, cart.temp_cart_arr.length])

    console.log(cart)
    if((cart.status === 'idle'  || cart.status === 'loading') && current_user.username!==null)
        return <FullSpinner />

    if(cart.cart_arr.length === 0){
        return <EmptyCart />
    }
    
    
    return (
        <div className='cart_container'>
            <CartSummary />
        
            <div className='cart_cartitems'>
                <div className="border border-bottom-0">
                    <div className="cart_a m-3">
                        <CartFill style={{fontSize:'2rem', marginRight: '1rem'}} /> 
                        Your Cart: {itemCount} item(s)
                    </div>
                </div>
                <div className="border borderSecondary px-3">
                    {
                        cart.cart_arr.map((item)=><CartItem key={item.pk} cartItem={item} />)
                    }
                </div>       
            </div>
        </div>

    )

}
export default Cart