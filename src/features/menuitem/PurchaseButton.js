import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { addItemToCart, increment } from "../cart/cartSlice"
import { getUnitprice } from "./menuitemSlice"


const PurchaseButton = ({setShow, menuitem_id, milk_id, temp, sweetness}) =>{
    console.log("purchase button ")
    // console.log(menuitem)
    // console.log(milk_id)
    const dispatch = useDispatch()
    const current_user = useSelector(state=>state.user.current_user)
    // const milk = useSelector(state=>getMilkById(state, milk_id))
    const unit_price = useSelector(state=>getUnitprice(state, menuitem_id, milk_id))
    const handleClick = (e) =>{
        
        if(current_user.username === null){
            console.log("add to cart without user ")
            
            dispatch(increment({'menuitem_id':menuitem_id, 'milk': milk_id, temp: temp, sweetness: sweetness, unit_price: unit_price }))
        } 
        else{
            console.log("purchase login ")
            const data = {'menuitem_pk': menuitem_id, 'milk_pk': milk_id, 'temperature': temp, 'sweetness': sweetness}
            console.log(data)
            dispatch(addItemToCart(data))
        }    
        setShow(false) 
    }

    return(
        
        <div>
            <Button className='gold_button' onClick={handleClick}>Add to Cart</Button>
        </div>
    )
}
export default PurchaseButton