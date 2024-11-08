import {useSelector, useDispatch} from 'react-redux';
import {useState, useRef} from 'react';
import {Modal} from 'react-bootstrap'
import {getMenuitemTitleById, triggerMenuItem} from '../menuitem/menuitemSlice'
import {resetCartBanner} from './cartSlice'
import {USDollar} from '../../app/global'
import CartModalItemRemove from './CartModalItemRemove'
import CustomizeContainer from '../customise/CustomizeContainer'

const CartModalItem = ({cartitem, idx, setCartShow}) =>{
    console.log(cartitem)
    const cartitemRef = useRef();
    const removeRef = useRef();

    const dispatch = useDispatch()
    const menuitem_title = useSelector(state=>getMenuitemTitleById(state, cartitem.menuitem_id))


    const handleUpdate=e=>{
        console.log("cartitem clicked")
        console.log(cartitemRef)
        console.log(removeRef)
        console.log(removeRef.current && !removeRef.current.contains(e.target))

        if(removeRef.current && !removeRef.current.contains(e.target)){
            dispatch(triggerMenuItem({cartitem: cartitem} ))
            setCartShow(false);
            dispatch(resetCartBanner())
        }
    }
    return (
        <>

        <div className='cart_modal_item_wrapper' ref={cartitemRef} onClick={handleUpdate} >
    
            <div className='cart_modal_item_header'>
                <div className='cart_modal_item_qty'>{cartitem.quantity}</div>
                <div className='cart_modal_item_title' >{menuitem_title}</div>
                <CartModalItemRemove pk={cartitem.pk} menuitem_title={menuitem_title} ref={removeRef}/>
                <div className='cart_modal_item_price'>{USDollar.format(cartitem.price * cartitem.quantity)}</div>
            </div>
            <div className='cart_modal_item_details'>
                {cartitem.size}oz, {cartitem.temperature}
            </div>

        </div>
        </>
    )
}
export default CartModalItem