import { Modal, Button } from "react-bootstrap"
import { useState, useEffect } from 'react'
import './cart.css'
import EmptyCart from './EmptyCart'
import CartModalItem from './CartModalItem'
import Subtotal from './Subtotal'
import CheckoutButton from './CheckoutButton'
import CartMessage from './CartMessage'
import {useSelector} from 'react-redux'

const CartModal = ({setCartShow}) =>{
    console.log("in cart modal")
    const {carts} = useSelector(state=>state.cart)

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
                            <CartModalItem key={cartitem.id} cartitem={cartitem}  setCartShow={setCartShow} />
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