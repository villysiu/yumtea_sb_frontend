import {Button} from 'react-bootstrap'
import {USDollar} from '../../app/global'
import {useDispatch, useSelector} from 'react-redux'
import { increment, addItemToCart } from '../cart/cartSlice'
import menuitem from "../menuitem/Menuitem";

const AddCartButton = ({data, handleHide}) => {
    console.log(data)
    
    const dispatch = useDispatch()
    const current_user_status = useSelector(state=>state.user.current_user.status)

    // const price = data.menuitem.price + data.size.price
    const handleClick = (e) =>{
        if(current_user_status !== 'succeeded'){
            console.log("add to local temp cart ")
            dispatch(increment(data))
        } 
        else{
            console.log("add to API cart  ")
            dispatch(addItemToCart(data))
        }    
        handleHide() 
    }

    if(!data.size || data.temperature === "FREE"){
        return (
            <>
                <Button className='addtocart_button' disabled>
                    Make Required Choices  {USDollar.format(data.quantity *
                    (data.menuitem.price + data.milk.price + (data.size === null ? 0 : data.size.price)))}
                </Button>
            </>
        )
    }
    return(
        <>
            <Button className='addtocart_button' onClick={handleClick} >
                Add to Cart {USDollar.format(data.quantity * (data.menuitem.price + data.size.price + data.milk.price))}
            </Button>
        </>

    )
}
export default AddCartButton