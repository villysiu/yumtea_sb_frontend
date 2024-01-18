import Logout from "./Logout"
const UserDropdown = () =>{
    return(
        <div className='user_dropdown_wrapper'>
            <div className='user_dropdown mt-1 pt-3'>
                <div className='pb-2'>My Account</div>
                <div className='pb-2'>Order History</div>
                <div>Reservations</div>
                <hr/>
                <Logout />
                
                
                
                
            </div>
        </div>
    )

}
export default UserDropdown