import {Trash} from 'react-bootstrap-icons'
import { useDispatch, useSelector} from 'react-redux'
import {forwardRef, useState, useEffect} from 'react'

import {Button} from 'react-bootstrap'
import {removeItem, removeItemFromCart} from './cartSlice'
const CartModalRemove = forwardRef(
//     function CartModalRemove({menuitem_title, pk, removeRef}){
    function CartModalItemRemove({cartitem, remove, setRemove}){

        const dispatch = useDispatch()


        const handleDelete = () =>{
            console.log("inner remove button")

            dispatch(removeItemFromCart(cartitem.id))

            // setConfirm(false);
            setRemove(null)
        }


        return (
            <>
                {remove && remove === cartitem.id &&
                    <div className='remove'>
                        <Button className='oblong_button remove_button me-2' onClick={handleDelete}>Remove {cartitem.menuitem.title}? </Button>
                        <Button className='oblong_button remove_button' onClick={()=>setRemove(null)}>Cancel</Button>
                    </div>
                }
                <div className='cart_modal_item_remove' onClick={()=>setRemove(cartitem.id)}>
                    <Trash />
                </div>
            </>
        )

    }
);
export default CartModalRemove