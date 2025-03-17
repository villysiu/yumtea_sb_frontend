import {Trash} from 'react-bootstrap-icons'
import { useDispatch, useSelector} from 'react-redux'
import {forwardRef, useState, useEffect} from 'react'

import {Button} from 'react-bootstrap'
import {removeItem, removeItemFromCart} from './cartSlice'
const CartModalRemove = forwardRef(
//     function CartModalRemove({menuitem_title, pk, removeRef}){
    function CartModalItemRemove({cartitem}){

        const dispatch = useDispatch()
        const [confirm, setConfirm] = useState(false)

        const handleConfirm = () =>{
            console.log("inner remove button")

            dispatch(removeItemFromCart(cartitem.id))

            setConfirm(false);
            
        }


        return (
            <>
                {confirm &&
                    <div className='remove'  > 
                        <Button className='oblong_button remove_button me-2' onClick={handleConfirm}>Remove {cartitem.menuitem.title}? </Button>
                        <Button className='oblong_button remove_button' onClick={()=>setConfirm(false)}>Cancel</Button>
                    </div>
                }
                <div className='cart_modal_item_remove' onClick={()=>setConfirm(true)}>
                    <Trash />
                </div>
            </>
        )

    }
);
export default CartModalRemove