import Logout from "./Logout"
import AccountButton from "./AccountButton"
import OrdersButton from "../order/OrdersButton"
import ReservationButton from "../reservation/ReservationButton"

const UserDropdown = () =>{
    return(
        <div className='user_dropdown_wrapper'>
            <div className='user_dropdown mt-3 pt-3'>
                <AccountButton />
                <OrdersButton />
                <ReservationButton />
                <hr/>
                <Logout />

            </div>
        </div>
    )

}
export default UserDropdown