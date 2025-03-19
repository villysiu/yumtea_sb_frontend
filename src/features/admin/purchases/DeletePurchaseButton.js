import {Trash3Fill} from "react-bootstrap-icons";
import {useDispatch} from "react-redux";
import {deleteOrder} from "../../order/orderSlice";

const DeletePurchaseButton = ({purchase}) =>{
    const dispatch = useDispatch()
    const handleClick = () =>{
        console.log("clicked delete")
        dispatch(deleteOrder(purchase.id))
    }
    return (
        <Trash3Fill onClick={handleClick}/>
    )
}
export default DeletePurchaseButton