import {useSelector} from 'react-redux'


const CartModalBanner = () => {
    
    const message = useSelector(state => state.cart.cartBannerMessage)
    const batchAddItemsStatus = useSelector(state => state.cart.batchAddStatus)
    if(batchAddItemsStatus === 'loading')
        return null
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