import {useSelector} from 'react-redux'


const CartModalBanner = () => {
    
    const message = useSelector(state => state.cart.cartBannerMessage)
    if(message === "")
        return null

    return (
        <div className='item_added_banner'>
            {message}
        </div>
    )
}
export default CartModalBanner