import {Button} from 'react-bootstrap'
import {USDollar} from '../../app/global'
import {useDispatch, useSelector} from 'react-redux'
import { increment, addItemToCart } from '../cart/cartSlice'

const AddCartButton = ({data, handleHide}) => {
    console.log(data)
    
    const dispatch = useDispatch()
    const current_user_status = useSelector(state=>state.user.current_user.status)

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

    if(!data.size || !data.temperature){
        return (
            <div>
                <Button className='addtocart_button' disabled>
                    Make Required Choices  {USDollar.format(data.quantity * data.price)}
                </Button>
        </div>
        )
    }
    return(
        <>
            <Button className='addtocart_button' onClick={handleClick} >
                Add to Cart {USDollar.format(data.quantity * data.price)}
            </Button>
        </>

    )
}
export default AddCartButton