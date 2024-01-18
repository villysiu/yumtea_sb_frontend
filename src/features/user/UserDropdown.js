import Logout from "./Logout"
import AccountButton from "./AccountButton"
const UserDropdown = () =>{
    return(
        <div className='user_dropdown_wrapper'>
            <div className='user_dropdown mt-1 pt-3'>
                <AccountButton />
                <div className='pb-2'>Order History</div>
                <div>Reservations</div>
                <hr/>
                <Logout />
                
                
                
                
            </div>
        </div>
    )

}
export default UserDropdown