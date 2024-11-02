import {useDispatch, useSelector} from 'react-redux'
import {resetAddToCart} from './cartSlice'
import {useEffect} from 'react'
const CartModalBanner = () => {
    const addToCartStatus = useSelector(state=>state.cart.addToCartStatus)
    const removeStatus = useSelector(state => state.cart.removeStatus)
    const dispatch = useDispatch();

    useEffect(() => {
        if(addToCartStatus === 'succeeded' || removeStatus === 'succeeded'){
            const itemAddedTimer = setTimeout(() => {
                dispatch(resetAddToCart());
                
            }, 3000);
            return () => clearTimeout(itemAddedTimer);
        }
        
        
    }, [addToCartStatus, removeStatus,resetAddToCart, dispatch]);

    if(addToCartStatus === 'idle' && removeStatus==='idle')
        return null
    return (
        <div className='item_added_banner'>
            {addToCartStatus === 'succeeded' && <>Item added.</>}
            {removeStatus === 'succeeded' && <>Item removed.</>}
        </div>
        
    )
}
export default CartModalBanner