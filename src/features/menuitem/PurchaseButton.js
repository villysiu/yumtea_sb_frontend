import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { addItemToCart, increment } from "../cart/cartSlice"


const PurchaseButton = ({menuitemId, menuitemTitle, price, milk, setShow, setMessage}) =>{
    const dispatch = useDispatch()
    
    const current_user = useSelector(state => {
        return state.user.current_user
    })
    
    const handleClick = (e) =>{
        console.log("purchase button ")
   
        if(current_user.username === null){
            dispatch(increment({"menuitemId":menuitemId, 'title': menuitemTitle, "price": price, "milk": milk}))
            setShow(false)
            setMessage(`${menuitemTitle} added to shopping cart.` )
        } 
        else{
            const data = {'menuitem_pk': menuitemId, 'milk_pk': milk}
            console.log(data)
            dispatch(addItemToCart(data))
            .unwrap()
            .then((originalPromiseResult) => {
                setShow(false)
                setMessage(`${menuitemTitle} added to shopping cart.` )
            })
            .catch((rejectedValueOrSerializedError) => {
                setShow(false)
                setMessage("Failed to add item to shopping cart.")
            })
            
                
        }    
        
    }
    return(
        
        <div style={{"position": "relative"}}>

            
            <Button className='gold_button short' onClick={handleClick}>Add to Cart</Button>

        </div>
    )
}
export default PurchaseButton