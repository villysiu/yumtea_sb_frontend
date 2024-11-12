import Logout from "./Logout"
import AccountButton from "./AccountButton"
import OrdersButton from "../order/OrdersButton"
// import ReservationButton from "../reservation/ReservationButton"
import { Link } from 'react-router-dom';
import { homeLink } from "../../app/global"
const UserDropdown = ({setShow}) =>{
    return(
        <>
            <Link to={`${homeLink}/secure/account`} className='header_user_link' onClick={()=>setShow(show=>!show)} >
                <div className='header_user_box top'> 
                    Account
                </div> 
            </Link>
            <Link to={`${homeLink}/secure/orders`} className='header_user_link' onClick={()=>setShow(show=>!show)} >
                <div className='header_user_box'> 
                    Order history
                </div> 
            </Link>
            
            <Logout setShow={setShow} />
        
        </>


    )

}
export default UserDropdown