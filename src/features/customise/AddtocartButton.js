import { Button } from "react-bootstrap"

import { useDispatch, useSelector } from "react-redux"
import { addItemToCart, increment } from "../cart/cartSlice"
import { USDollar } from "../../app/global"


const AddtocartButton = ({
    price, quantity, menuitem_id, temp, milk_id, sweetness, size, setShow
    }) =>{
    console.log("purchase button ")
    console.log(milk_id, temp, size,sweetness)

    const dispatch = useDispatch()
    const current_user_status = useSelector(state=>state.user.current_user.status)
    // // const milk = useSelector(state=>getMilkById(state, milk_id))

    const handleClick = (e) =>{
        console.log("clicl??? d")
        const data = {
            'menuitem_pk':menuitem_id,
            'milk_pk': milk_id,
            'price': price,
            'quantity': quantity, 
            'size': size, 
            'sweetness': sweetness,
            'temperature': temp, 
            
        }
        if(current_user_status !== 'succeeded'){
            console.log("add to cart without user ")
            dispatch(increment(data))
        } 
        else{
            console.log("purchase login ")
            dispatch(addItemToCart(data))
        }    
        setShow(false) 
    }
    if(!size || !temp){
        return (
            <div>
                <Button className='addtocart_button' disabled>
                    Make Required Choices  {USDollar.format(quantity * price)}
                </Button>
        </div>
        )
    }
    return(
        <div>
            <Button className='addtocart_button' 
            // disabled={!size || !temp}
            onClick={handleClick}
            >
                Add to Cart  {USDollar.format(quantity * price)}
            </Button>
        </div>

    )
}
export default AddtocartButton