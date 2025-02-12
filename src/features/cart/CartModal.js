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
    const {carts} = useSelector(state=>state.cart)

    if(carts.length === 0){
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
                    carts.map((cartitem)=>{
                        return(
                            <CartModalItem key={cartitem.id} cartitem={cartitem}  setCartShow={setCartShow} />
                        )
                    })
                }
            </div>
            <div className='cart_modal_footer'>
                <Subtotal cartLength = {carts.length} />
                
                <CheckoutButton setCartShow={setCartShow}/>
            </div>
      </>
    )
}
export default CartModal