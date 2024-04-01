import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { addItemToCart, increment } from "../cart/cartSlice"
import { getMilkById } from "./menuitemSlice"
import {Spinner} from "react-bootstrap"
const PurchaseButton = ({singleMenuitem, milkId, temp, setShow}) =>{
    const dispatch = useDispatch()
    const milk = useSelector(state => getMilkById(state, milkId))
    const current_user = useSelector(state => {
        return state.user.current_user
    })
    const cart = useSelector(state => state.cart.cart)
    const handleClick = (e) =>{
        console.log("purchase button ")
   
        if(current_user.username === null){
            dispatch(increment({'singleMenuitem':singleMenuitem, 'milk': milk }))
            setShow(false)
            // setMessage(`${singleMenuitem.title} added to shopping cart.` )
        } 
        else{
            const data = {'menuitem_pk': singleMenuitem.pk, 'milk_pk': milkId, 'temperature': temp}
            console.log(data)
            dispatch(addItemToCart(data))
            .unwrap()
            .then((originalPromiseResult) => {
                setShow(false)
                // setMessage(`${singleMenuitem.title} added to shopping cart.` )
            })
            .catch((rejectedValueOrSerializedError) => {
                setShow(false)
                // setMessage("Failed to add item to shopping cart.")
            })  
        }     
    }
    if(cart.status === 'loading')
        return ( <div>
            <Button className='gold_button' disabled><Spinner animation="border" size="sm" /></Button>
            </div>
    )
    return(
        
        <div>
            <Button className='gold_button' onClick={handleClick}>Add to Cart</Button>
        </div>
    )
}
export default PurchaseButton