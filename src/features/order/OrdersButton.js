import { Link } from "react-router-dom"
import { homeLink } from "../../app/global"
const OrdersButton = () =>{
    return (
        <div className='pb-2' >
            <Link to={`${homeLink}/secure/orders`} className="solid_link" >
                Order History
            </Link>
        </div>
    )
}
export default OrdersButton