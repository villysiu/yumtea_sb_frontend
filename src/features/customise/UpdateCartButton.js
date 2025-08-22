import { Button } from "react-bootstrap"

import { useDispatch } from "react-redux"
import { updateItemInCart } from "../cart/cartSlice"
import { USDollar } from "../../app/global"

const UpdateCartButton = ({customizedItem, handleHide}) =>{
    console.log("update cart button ")
    console.log(customizedItem)
    // const customizedItem = {
    //          'id': itemToCustomize.id,
    //         'menuitem': itemToCustomize.menuitem,
    //         'quantity': quantity,
    //         'temperature': temperature,
    //         'sugar': sugar,
    //         'size': size,
    //         'milk': milk
    //     }

    const dispatch = useDispatch()

    const handleClick = (e) =>{
        dispatch(updateItemInCart(
            {
                "id": customizedItem.id,
                "milkId": customizedItem.milk.id,
                "sizeId": customizedItem.size.id,
                "quantity": customizedItem.quantity,
                "sugar": customizedItem.sugar,
                "temperature": customizedItem.temperature
            }
        ))


        handleHide()
    }

    return(
        <div>
            <Button className='update_cart_button' 
            onClick={handleClick}
            >
                Update {USDollar.format(customizedItem.quantity * (customizedItem.menuitem.price + customizedItem.size.price + customizedItem.milk.price))}

            </Button>
        </div>

    )
}
export default UpdateCartButton