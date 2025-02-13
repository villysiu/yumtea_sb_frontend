import {useSelector, useDispatch} from 'react-redux';
import {useState, useRef} from 'react';
import {Modal} from 'react-bootstrap'
import {getMenuitemTitleById, triggerCustomizeModal, getMilkById} from '../menuitem/menuitemSlice'
import {resetCartBanner} from './cartSlice'
import {USDollar} from '../../app/global'
import CartModalRemove from './CartModalRemove'

const CartModalItem = ({cartitem, setCartShow}) =>{

    console.log(cartitem)
    // {
    // 		"sugar": "SEVENTY_FIVE",
    // 		"temperature": "HOT",
    // 		"quantity": 1,
    // 		"milk": {
    // 			"title": "Whole Milk",
    // 			"id": 2
    // 		},
    // 		"price": 5.0,
    // 		"menuitem": {
    // 			"title": "Chai",
    // 			"id": 2
    // 		},
    // 		"id": 12,
    // 		"size": {
    // 			"title": "8oz",
    // 			"id": 1
    // 		}
    // 	},
    const sugarMap = new Map([
        ["ZERO", "No"],
        ["TWENTY_FIVE", "25%"],
        ["FIFTY", "50%"],
        ["SEVENTY_FIVE", "75%"],
        ["HUNDRED", "100%"]
    ]);
    const cartitemRef = useRef();
    const removeRef = useRef();

    const dispatch = useDispatch()


    const handleUpdate=e=>{
        console.log("cartitem update clicked")
        const data = {
            ...cartitem,
            // menuitem_pk: cartitem.menuitem_id,
            // milk_pk: cartitem.milk_id,
        }
        
        if(removeRef.current && !removeRef.current.contains(e.target)){
            dispatch(triggerCustomizeModal(data ))
            setCartShow(false);
            dispatch(resetCartBanner());
        }
    }
    return (
        <>

        <div className='cart_modal_item_wrapper' ref={cartitemRef} onClick={handleUpdate} >
    
            <div className='cart_modal_item_header'>
                <div className='cart_modal_item_qty'>{cartitem.quantity}</div>
                <div className='cart_modal_item_title' >{cartitem.menuitem.title}</div>
                <CartModalRemove cartitem={cartitem} ref={removeRef}/>
                <div className='cart_modal_item_price'>{USDollar.format(cartitem.price * cartitem.quantity)}</div>
            </div>
            <div className='cart_modal_item_details'>
                {cartitem.size.title}
                , {cartitem.temperature}
                , {cartitem.milk.title}
                {cartitem.sugar === "NA" ? null: `, ${sugarMap.get(cartitem.sugar)} Sugar`}
            </div>

        </div>
        </>
    )
}
export default CartModalItem