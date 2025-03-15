import {Trash} from 'react-bootstrap-icons'
import { useDispatch, useSelector} from 'react-redux'
import {forwardRef, useState, useEffect} from 'react'

import {Button} from 'react-bootstrap'
import {removeItem, removeItemFromCart} from './cartSlice'
const CartModalRemove = forwardRef(
//     function CartModalRemove({menuitem_title, pk, removeRef}){
    function CartModalItemRemove({cartitem}, ref){

        const dispatch = useDispatch()
        const [confirm, setConfirm] = useState(false)
    
        const handleClick = () =>{
            console.log('click trash')

            setConfirm(true);
        }
        const handleConfirm = () =>{
            console.log("inner remove button")

            dispatch(removeItemFromCart(cartitem.id))

            setConfirm(false);
            
        }


        return (
            <div ref={ref}>
                {confirm &&
                    <div className='remove'  > 
                        <Button className='oblong_button remove_button ' onClick={handleConfirm}>Remove {cartitem.menuitem.title}? </Button>
                    </div>
                }
                <div className='cart_modal_item_remove' onClick={handleClick}>
                    <Trash />
                </div>
            </div>
        )

    }
);
export default CartModalRemove