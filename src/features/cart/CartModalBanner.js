import {useSelector} from 'react-redux'


const CartModalBanner = () => {
    
    const {cartMessage} = useSelector(state => state.message)

    if(cartMessage === null)
        return null
    return (
        <div className='item_added_banner'>
            {cartMessage}
        </div>

    )
}
export default CartModalBanner