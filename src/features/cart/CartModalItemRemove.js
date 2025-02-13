import {Trash} from 'react-bootstrap-icons'
import { useDispatch, useSelector} from 'react-redux'
import {forwardRef, useState, useEffect} from 'react'

import {Button} from 'react-bootstrap'
import {removeItem, removeItemFromCart} from './cartSlice'
const CartModalItemRemove = forwardRef(
//     function CartModalItemRemove({menuitem_title, pk, removeRef}){
    function CartModalItemRemove(props, ref){
        const { menuitem_title, pk } = props;
        const dispatch = useDispatch()
        const [remove, setRemove] = useState(false)
    
        const handleClick = () =>{
            console.log('click trash')

            setRemove(true);
        }
        const handleRemove = () =>{
            console.log("inner remove button")

            dispatch(removeItemFromCart(pk))

            setRemove(false);
            
        }


        return (
            <div ref={ref}>
                {remove &&
                    <div className='remove'  > 
                        <Button className='remove_button' onClick={handleRemove}>Remove {menuitem_title}? </Button>
                    </div>
                }
                <div className='cart_modal_item_remove' onClick={handleClick}>
                    <Trash />
                </div>
            </div>
        )

    }
);
export default CartModalItemRemove