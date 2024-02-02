import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchCart } from "./cartSlice"
import { Button } from "react-bootstrap"
import { CartFill } from "react-bootstrap-icons"
import { homeLink } from "../../app/global"
import { Link } from "react-router-dom"
import CartItem from "./CartItem"
import CartSummary from "./CartSummary"
import Spinner from "react-bootstrap/Spinner"
import { batchAddItems } from "./cartSlice"
import EmptyCart from "./EmptyCart"
const Cart = () => {
    console.log("in cart")
    const dispatch = useDispatch()
    const current_user = useSelector(state => state.user.current_user)
    const cart = useSelector(state=>state.cart.cart)
   
    useEffect(()=>{
        if(current_user.username && cart.status === 'idle' ){
            console.log("there is an user and api cart not fetched ('idle)")
            dispatch(fetchCart())
            .then(()=>{
                if(cart.temp_cart_arr.length>0)
                    dispatch(batchAddItems())
            })
        }
    }, [dispatch, current_user.username, cart.cart_arr])

    // console.log(cart_arr)
    // if(cart.status === 'loading' || current_user.status === 'loading')
    //     return <div>Loading</div>

    if(cart.cart_arr.length === 0){
        return <EmptyCart />
    }
    
    let [itemCount, subtotal] = cart.cart_arr.reduce(
        (acumulator, currCartItem) => {
            return [acumulator[0]+currCartItem.quantity, acumulator[1]+currCartItem.linetotal]
        }, [0,0]
    )
    
    return (
        <div className='cart_container'>
            <CartSummary subtotal={subtotal} />
        
            <div className='cart_cartitems'>
                <div className="border border-bottom-0">
                    <div className="cart_a m-3">
                        <CartFill style={{fontSize:'2rem', marginRight: '1rem'}} /> 
                        Your Cart: {itemCount} item(s)
                    </div>
                </div>
                <div className="border borderSecondary cart_c px-3">
                    {
                        cart.cart_arr.map((item, idx)=><CartItem key={idx} cartId={idx} cartItem={item} />)
                    }
                </div>       
            </div>
        </div>

    )

}
export default Cart