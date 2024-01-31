import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { addItemToCart, increment } from "../cart/cartSlice"


const PurchaseButton = ({singleMenuitem, milkId, setShow, setMessage}) =>{
    const dispatch = useDispatch()
    
    const current_user = useSelector(state => {
        return state.user.current_user
    })
    
    const handleClick = (e) =>{
        console.log("purchase button ")
   
        if(current_user.username === null){
            dispatch(increment({'singleMenuitem':singleMenuitem, 'milkId': milkId }))
            setShow(false)
            setMessage(`${singleMenuitem.title} added to shopping cart.` )
        } 
        else{
            const data = {'menuitem_pk': singleMenuitem.pk, 'milk_pk': singleMenuitem.milk_id}
            console.log(data)
            dispatch(addItemToCart(data))
            .unwrap()
            .then((originalPromiseResult) => {
                setShow(false)
                setMessage(`${singleMenuitem.title} added to shopping cart.` )
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