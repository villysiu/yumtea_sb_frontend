import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from "react";
import {clearCartMessage} from "../message/messageSlice";


const CartMessage = () => {
    const {cartMessage} = useSelector(state => state.message)
    const dispatch = useDispatch();

    useEffect(() => {
        if(cartMessage !== null){
            setTimeout(() => {
                dispatch(clearCartMessage());
            }, 3000);
        }
    }, [cartMessage]);

    if(cartMessage === null)
        return null
    return (
        <div className='item_added_banner'>
            {cartMessage}
        </div>

    )
}
export default CartMessage