import {useSelector} from 'react-redux'
import { getSubtotal, getItemsCountInCart } from './cartSlice'
import {USDollar} from '../../app/global'

const Subtotal = ({cartLength}) =>{
    const subtotal = useSelector(state => getSubtotal(state))

    return(

        <div className='cart_subtotal_wrapper'>
            <span>Subtotal: {cartLength} items</span>
            <span>{USDollar.format(subtotal)}</span>
        </div>
    )
}
export default Subtotal