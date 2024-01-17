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

const Cart = () => {
    console.log("in cart")
    const dispatch = useDispatch()

    const {cart_arr, status} = useSelector(state=>state.cart.cart)

    useEffect(()=>{
        dispatch(fetchCart())
    }, [dispatch])

 
    if(cart_arr.length === 0){
        return(
        <>
            <div className="cart_b">Your Cart is Empty</div> 
            <div className='my-3 cart_d'>
                <Link to={`${homeLink}/wines`}>
                    <Button className='gold_button short'>Continue Shopping</Button>
                </Link>
            </div>
        </>
        )
    }
    let [itemCount, subtotal] = cart_arr.reduce(
        (acumulator, currCartItem) => {
            return [acumulator[0]+currCartItem.quantity, acumulator[1]+currCartItem.linetotal]
        }, [0,0]
    )
    return (
        <div className='cart_container'>
            {

                status === 'loading' && 
                
                    <div className="loading" >
                     
                        <Spinner animation="border" role="status" className="spinner_props">
                        <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
            }
    
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
                        cart_arr.map(item=><CartItem key={item.pk} cartItem={item} />)
                    }
                </div>
     
            
            </div>
        </div>

    )

}
export default Cart