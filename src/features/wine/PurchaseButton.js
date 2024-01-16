import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { addItemToCart, increment } from "../cart/cartSlice"
import { useState } from "react"
import AddedOverlay from "./AddedOverlay"
const PurchaseButton = ({menuitemId, menuitemTitle, price}) =>{
    const dispatch = useDispatch()
    const [successMessage, setSuccessMessage] = useState("")
    const current_user = useSelector(state => {
        return state.user.current_user
    })
    const handleClick = (e) =>{
        console.log("purchase button ")
        
        if(current_user.username === null){
            dispatch(increment({"menuitemId":menuitemId, "price": price}))
        } 
        else{
            dispatch(addItemToCart({'menuitem': menuitemId}))
        }    
        setSuccessMessage(`${menuitemTitle} added to shopping cart.` )
    }
    return(
        <div style={{"position": "relative"}}>
            {successMessage && <AddedOverlay successMessage={successMessage} setSuccessMessage={setSuccessMessage}/>}
            <Button className='gold_button short' onClick={handleClick}>Purchase</Button>

        </div>
    )
}
export default PurchaseButton