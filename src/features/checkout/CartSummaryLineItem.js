import {useSelector} from 'react-redux';
import {getMenuitemById, sugarMap} from '../menuitem/menuitemSlice'
import {apiLink, homeLink, USDollar} from "../../app/global"

const CartSummaryLineItem = ({cartItem})=>{

    const menuitem = useSelector(state=>getMenuitemById(state, cartItem.menuitem.id))
console.log(menuitem)


    return(
        <div className='summary_lineitem_wrapper'>
            <div className='summary_lineitem_details'>
                <div className='me-4 cart_button_wrapper'>

                    <img src={`${apiLink}/images/${menuitem.imageUrl}`} alt={menuitem.title} className='summary_lineitem_img' />
                    <div className='cartitem_count'> {cartItem.quantity} </div>
                </div>
                <div>
                    <div><b>{cartItem.menuitem.title}</b></div>

                    <div>{cartItem.size.title}
                        , {cartItem.temperature}
                        {cartItem.milk.id === 1 ? null : `, ${cartItem.milk.title}`}
                        {cartItem.sugar === "NA" ? null: `, ${sugarMap.get(cartItem.sugar)}`}
                    </div>
                </div>
            </div>
            <div className='summary_lineitem_price'>{USDollar.format(cartItem.quantity * cartItem.price)}</div>
        </div>
    )
}
export default CartSummaryLineItem