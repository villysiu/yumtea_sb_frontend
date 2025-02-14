import {useSelector} from 'react-redux';
import {getMenuitemById, sugarMap} from '../menuitem/menuitemSlice'
import { homeLink, USDollar } from "../../app/global"

const CartSummaryLineItem = ({cartItem})=>{

    const menuitem = useSelector(state=>getMenuitemById(state, cartItem.menuitem.id))
    // const milk = useSelector(state=>getMilkById(state, cartItem.menuitem_id))
console.log(menuitem)
    // const sugarMap = new Map([
    //     ["ZERO", "No Sugar"],
    //     ["TWENTY_FIVE", "25%"],
    //     ["FIFTY", "50%"],
    //     ["SEVENTY_FIVE", "75%"],
    //     ["HUNDRED", "100%"]
    // ]);

    return(
        <div className='summary_lineitem_wrapper'>
            <div className='summary_lineitem_details'>
                <div className='me-4 cart_button_wrapper'>

                    <img src={`${homeLink}/menuitem/${menuitem.imageUrl}`} alt={menuitem.title} className='summary_lineitem_img' />
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