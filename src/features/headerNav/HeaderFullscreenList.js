import HeaderCollapableItems from "./HeaderCollapsableItems"
import AccountButton from "../user/AccountButton"
import OrdersButton from "../order/OrdersButton"
import ReservationButton from "../reservation/ReservationButton"
import LogoutNavButton from "../user/LogoutNavButton"

const HeaderFullscreenList =() =>{
    return(
        <div className='header_md_fullscreen_dropdown'>
            <HeaderCollapableItems />

            <div className='header_user_dropdown header_text'>
                <div className='header_text pt-3 '>
                    <AccountButton />
                </div>
                <div className='header_text pt-3 '>
                    <OrdersButton />
                </div>
                <div className='header_text pt-3 '>
                    <ReservationButton />
                </div>
                
                <div className='header_text pt-3'>
                    <LogoutNavButton />
                </div> 
                
            </div>
        </div>
    )
}
export default HeaderFullscreenList