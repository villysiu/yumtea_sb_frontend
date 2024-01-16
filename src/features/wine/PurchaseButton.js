import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { addItemToCart, increment } from "../cart/cartSlice"
import { useState } from "react"
import AddedOverlay from "./AddedOverlay"
const PurchaseButton = ({menuitemId, menuitemTitle, price}) =>{
    const dispatch = useDispatch()
    const [message, setMessage] = useState("")
    const current_user = useSelector(state => {
        return state.user.current_user
    })
    const cart_status = useSelector(state=>{
        return state.cart.cart.status
    })
    
    const handleClick = (e) =>{
        console.log("purchase button ")
        
        if(current_user.username === null){
            dispatch(increment({"menuitemId":menuitemId, "price": price}))
            setMessage(`${menuitemTitle} added to shopping cart hahahahah.` )
        } 
        else{
            dispatch(addItemToCart({'menuitem': menuitemId}))
            .then((originalPromiseResult) => {
                setMessage(`${menuitemTitle} added to shopping cart.` )
            })
            .catch((rejectedValueOrSerializedError) => {
                setMessage("Failed to add item to shopping cart.")
            })
            
                
        }    
        
    }
    return(
        
        <div style={{"position": "relative"}}>
            {/* {console.log(cart_status)} */}
            {message && <AddedOverlay message={message} setMessage={setMessage}/>}
            <Button className='gold_button short' onClick={handleClick}>Purchase</Button>

        </div>
    )
}
export default PurchaseButton