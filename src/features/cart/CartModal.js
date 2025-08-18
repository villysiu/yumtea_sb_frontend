import { useState } from 'react'
import './cart.css'
import EmptyCart from './EmptyCart'
import CartModalItem from './CartModalItem'
import Subtotal from './Subtotal'
import CheckoutButton from './CheckoutButton'
import CartMessage from './CartMessage'
import {useSelector} from 'react-redux'

const CartModal = ({setCartShow}) =>{
    console.log("in cart modal")
    const {carts, cart, fetchCartStatus} = useSelector(state=>state.cart)
    const [remove, setRemove] = useState(null)

    if(carts.length === 0){
        return <EmptyCart />
    }
    return (
        <>
            <div className='cart_modal_header'>
                Your Cart
            </div>
            <CartMessage />
            
            <div className='cart_modal_list'>
                {
                    carts.map((cartitem)=>{
                        return(
                            <CartModalItem key={cartitem.id} cartitem={cartitem}  setCartShow={setCartShow} remove={remove} setRemove={setRemove} />
                        )
                    })
                }
            </div>
            <div className='cart_modal_footer'>
                <Subtotal />
                
                <CheckoutButton setCartShow={setCartShow}/>
            </div>


            {((cart.status === 'loading' && cart.action === 'remove') || fetchCartStatus=== 'loading') 
            && (
                <div className="cart-loading-overlay">
                    <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
        )}
      </>
    )
}
export default CartModal