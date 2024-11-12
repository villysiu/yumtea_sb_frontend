import {useSelector} from 'react-redux';
import {getMenuitemById, getMilkById} from '../menuitem/menuitemSlice'
import { homeLink, USDollar } from "../../app/global"

const CartSummaryLineItem = ({cartItem})=>{
    const item = useSelector(state=>getMenuitemById(state, cartItem.menuitem_id))
    const milk = useSelector(state=>getMilkById(state, cartItem.menuitem_id))

    console.log(item)
    return(
        <div className='summary_lineitem_wrapper'>
            <div className='summary_lineitem_details'>
                <div className='me-4'> 
                    <img src={`${homeLink}/menuitem/${item.image_path}`} alt={item.title} className='summary_lineitem_img' /> 
                </div>
                <div>
                    <div><b>{item.title}</b></div>

                    <div>{cartItem.temperature==="H"?"Hot": "Iced"}, {cartItem.size}oz, {milk}, 
                    {cartItem.sweetness === 0 ? 'No Sugar' : `${cartItem.sweetness}% Sugar`}
                    </div>
                </div>
            </div>
            <div className='summary_lineitem_price'>{USDollar.format(cartItem.price)}</div>
        </div>
    )
}
export default CartSummaryLineItem