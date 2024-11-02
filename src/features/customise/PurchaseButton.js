import { Button } from "react-bootstrap"

import { useDispatch, useSelector } from "react-redux"
import { addItemToCart, increment } from "../cart/cartSlice"
import { USDollar } from "../../app/global"


const PurchaseButton = ({
    price, quantity, menuitem_id, temp, size, setShow
    }) =>{
    console.log("purchase button ")
    console.log(temp, size)

    const dispatch = useDispatch()
    const current_user = useSelector(state=>state.user.current_user)
    // // const milk = useSelector(state=>getMilkById(state, milk_id))

    const handleClick = (e) =>{
        console.log("clicl??? d")
        if(current_user.username === null){
            console.log("add to cart without user ")
            
            dispatch(increment({
                'menuitem_id':menuitem_id,
                'quantity': quantity, 
                'temp': temp, 
                'size': size, 'price': price
                //  'milk': milk_id, sweetness: sweetness, unit_price: unit_price
            }))
        } 
    //     else{
    //         console.log("purchase login ")
    //         const data = {'menuitem_pk': menuitem_id, 'milk_pk': milk_id, 'temperature': temp, 'sweetness': sweetness}
    //         console.log(data)
    //         dispatch(addItemToCart(data))
    //     }    
        setShow(false) 
    }

    return(
        <div>
            <Button className='purchase_button' 
            disabled={!size || !temp}
            onClick={handleClick}
            >
                Add to Cart  {USDollar.format(quantity * price)}
            </Button>
        </div>

    )
}
export default PurchaseButton