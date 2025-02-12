import {Button} from 'react-bootstrap'
import {USDollar} from '../../app/global'
import {useDispatch, useSelector} from 'react-redux'
import { increment, addItemToCart } from '../cart/cartSlice'
import menuitem from "../menuitem/Menuitem";

const AddCartButton = ({customizedItem, handleHide}) => {
    console.log(customizedItem)
    
    const dispatch = useDispatch()
    const {current_user} = useSelector(state=>state.user)

    // const customizedItem = {
    //         'menuitem': itemToCustomize.menuitem,
    //         'quantity': quantity,
    //         'temperature': temperature,
    //         'sugar': sugar,
    //         'size': size,
    //         'milk': milk
    //     }
    // {
    // 	"menuitemId": 2,
    // 	"milkId": 3,
    // 	"sizeId": 2,
    // 	"quantity": 1,
    // 	"sugar": "SEVENTY_FIVE",
    // 	"temperature": "ICED"
    // }
    // const price = data.menuitem.price + data.size.price
    const handleClick = (e) =>{
        if(current_user === null){
            console.log("add to local temp cart ")
            dispatch(increment(customizedItem))
        } 
        else{
            console.log("add to API cart  ")
            dispatch(addItemToCart(
                {
                	"menuitemId": customizedItem.menuitem.id,
                	"milkId": customizedItem.milk.id,
                	"sizeId": customizedItem.size.id,
                	"quantity": customizedItem.quantity,
                	"sugar": customizedItem.sugar,
                	"temperature": customizedItem.temperature
                }
            ))
        }    
        handleHide() 
    }

    if(!customizedItem.size || customizedItem.temperature === "FREE"){
        return (
            <>
                <Button className='addtocart_button' disabled>
                    Make Required Choices  {USDollar.format(customizedItem.quantity *
                    (customizedItem.menuitem.price + customizedItem.milk.price + (customizedItem.size === null ? 0 : customizedItem.size.price)))}
                </Button>
            </>
        )
    }
    return(
        <>
            <Button className='addtocart_button' onClick={handleClick} >
                Add to Cart {USDollar.format(customizedItem.quantity * (customizedItem.menuitem.price + customizedItem.size.price + customizedItem.milk.price))}
            </Button>
        </>

    )
}
export default AddCartButton