import {useDispatch, useSelector} from 'react-redux'
import {resetAddToCart, resetCartBanner} from './cartSlice'
import {useEffect} from 'react'

const CartModalBanner = () => {
    const addToCartStatus = useSelector(state=>state.cart.addToCartStatus)
    const removeStatus = useSelector(state => state.cart.removeStatus)
    const updateStatus = useSelector(state => state.cart.updateStatus)
    const message = useSelector(state => state.cart.cartBannerMessage)
    const dispatch = useDispatch();

    useEffect(() => {
        if(message !== ""){
            const itemAddedTimer = setTimeout(() => {
                dispatch(resetCartBanner());
            }, 3000);
            return () => clearTimeout(itemAddedTimer);
        }
        
        
    }, []);

   
    return (
        <>
        {
            message !== '' && 
            <div className='item_added_banner'>
                {message}
            </div>
        }
    </>
        
    )
}
export default CartModalBanner