import {useSelector, useDispatch} from 'react-redux';
import {useState, useRef} from 'react';
import {Modal} from 'react-bootstrap'
import {
    triggerCustomizeModal,
    getMilkById,
    getMenuitemById,
    getSizeById
} from '../menuitem/menuitemSlice'

import {USDollar} from '../../app/global'
import CartModalRemove from './CartModalRemove'

const CartModalItem = ({cartitem, setCartShow, remove, setRemove}) =>{

    // console.log(cartitem)
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
    const menuitem = useSelector(state => getMenuitemById(state, cartitem.menuitem.id))
    const milk = useSelector(state => getMilkById(state, cartitem.milk.id))
    const size = useSelector((state) => getSizeById(state, cartitem.size.id))

    const removeRef = useRef();

    const dispatch = useDispatch()

    const handleUpdate=e=>{
        console.log("cartitem update clicked")

        if(removeRef.current && !removeRef.current.contains(e.target)){
            dispatch(triggerCustomizeModal(
                {
                    'id': cartitem.id,
                    'menuitem': menuitem,
                    'milk': milk,
                    'temperature': cartitem.temperature,
                    'sugar': cartitem.sugar,
                    'size': size,
                    'quantity': cartitem.quantity
                }
            ))
            setCartShow(false);
        }
    }
    return (
        <>

        <div className='cart_modal_item_wrapper' onClick={handleUpdate} >
    
            <div className='cart_modal_item_header'>
                <div className='cart_modal_item_qty'>{cartitem.quantity}</div>
                <div className='cart_modal_item_title' >{cartitem.menuitem.title}</div>
                <div ref={removeRef}>
                    <CartModalRemove cartitem={cartitem} remove={remove} setRemove={setRemove}/>
                </div>
                <div className='cart_modal_item_price'>{USDollar.format(cartitem.price * cartitem.quantity)}</div>
            </div>
            <div className='cart_modal_item_details'>
                {cartitem.size.title}
                , {cartitem.temperature}
                 {cartitem.milk.id === 1 ? null : `, ${cartitem.milk.title}`}
                {cartitem.sugar === "NA" ? null: `, ${sugarMap.get(cartitem.sugar)} Sugar`}
            </div>

        </div>
        </>
    )
}
export default CartModalItem