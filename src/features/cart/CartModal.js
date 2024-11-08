import { Modal, Button } from "react-bootstrap"
import { useState, useEffect } from 'react'
import './cart.css'
import EmptyCart from './EmptyCart'
import CartModalItem from './CartModalItem'
import Subtotal from './Subtotal'
import CheckoutButton from '../checkout/CheckoutButton'
import CartModalBanner from './CartModalBanner'
import {useSelector} from 'react-redux'

const CartModal = ({setCartShow}) =>{
    const cart = useSelector(state=>state.cart.cart.cart_arr)

    if(cart.length === 0){
        return <EmptyCart />
    }

    return (
        <>
            <div className='cart_modal_header'>
                Your Cart
            </div>
            <CartModalBanner />
            
            <div className='cart_modal_list'>
                {
                    cart.map((cartitem, idx)=>{
                        return(
                            <CartModalItem key={idx} cartitem={cartitem} idx={idx} setCartShow={setCartShow} />
                        )
                    })
                }
            </div>
            <div className='cart_modal_footer'>
                <Subtotal />
                
                <CheckoutButton setCartShow={setCartShow}/>
            </div>
      </>
    )
}
export default CartModal