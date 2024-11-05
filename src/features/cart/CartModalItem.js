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
   
    const dispatch = useDispatch()
    const menuitem_title = useSelector(state=>getMenuitemTitleById(state, cartitem.menuitem_id))


    const handleUpdate=e=>{
        dispatch(triggerMenuItem({cartitem: cartitem} ))
        setCartShow(false);
        dispatch(resetCartBanner())

    }
    return (
        <>
        {/* {
            show && 
            <Modal show={show} onHide={()=>setShow(false)}>
                <CustomizeContainer 
                        itemId = {cartitem.menuitem_id}
                        itemTitle={menuitem_title}
                        itemTemp = {cartitem.temperature}
                        itemSize = {cartitem.size}
                        itemPrice = {cartitem.price}
                        itemQty={cartitem.quantity} 
                        setShow={setShow} 
                        task='update' 
                /> 
            </Modal>
        
        } */}
        <div className='cart_modal_item_wrapper' >
    
            <div className='cart_modal_item_header'>
                <div className='cart_modal_item_qty'>{cartitem.quantity}</div>
                <div className='cart_modal_item_title' onClick={handleUpdate}>{menuitem_title}</div>
                <CartModalItemRemove pk={cartitem.pk} menuitem_title={menuitem_title}/>
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