import {useSelector} from 'react-redux'
import {getMenuitemTitleById} from '../menuitem/menuitemSlice'
import {Trash} from 'react-bootstrap-icons'
import {USDollar} from '../../app/global'

const CartModalItem = ({cartitem}) =>{

    const menuitem_title = useSelector(state=>getMenuitemTitleById(state, cartitem.menuitem_id))
    return (
        <div className='cart_modal_item_wrapper'>
            <div className='cart_modal_item_header'>
                <div className='cart_modal_item_qty'>{cartitem.quantity}</div>
                <div className='cart_modal_item_title'>{menuitem_title}</div>
                <div className='cart_modal_item_remove'><Trash /> </div>
                <div className='cart_modal_item_price'>{USDollar.format(cartitem.price * cartitem.quantity)}</div>
            </div>
            <div className='cart_modal_item_details'>
                {cartitem.size}oz, {cartitem.temp}
            </div>
        </div>
    )
}
export default CartModalItem