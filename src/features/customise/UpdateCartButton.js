import { Button } from "react-bootstrap"

import { useDispatch, useSelector } from "react-redux"
import { updateItem } from "../cart/cartSlice"
import { resetMenuitemClicked } from '../menuitem/menuitemSlice'
import { USDollar } from "../../app/global"
const UpdateCartButton = ({cartitem_pk, price, quantity, menuitem_id, temp, size, setShow}) =>{
    console.log("update cart button ")
    console.log(temp, size, quantity, price)

    const dispatch = useDispatch()
    const current_user = useSelector(state=>state.user.current_user)
    // // const milk = useSelector(state=>getMilkById(state, milk_id))

    const handleClick = (e) =>{
       
        if(current_user.username === null){
            console.log("update to cart without user ")
            
            dispatch(updateItem({
                'cartitem_pk': cartitem_pk,
                'menuitem_id':menuitem_id,
                'quantity': quantity, 
                'temperature': temp, 
                'size': size, 
                'price': price,
                
            //     //  'milk': milk_id, sweetness: sweetness, unit_price: unit_price
            }))
        } 

    //     else{
    //         console.log("purchase login ")
    //         const data = {'menuitem_pk': menuitem_id, 'milk_pk': milk_id, 'temperature': temp, 'sweetness': sweetness}
    //         console.log(data)
    //         dispatch(addItemToCart(data))
    //     }    
        setShow(false) 
        dispatch(resetMenuitemClicked())
    }

    return(
        <div>
            <Button className='update_cart_button' 
            onClick={handleClick}
            >
                Update  {USDollar.format(quantity * price)}
            </Button>
        </div>

    )
}
export default UpdateCartButton