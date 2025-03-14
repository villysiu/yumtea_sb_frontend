import './reservation.css'
import Past from "./Past"
import Upcoming from "./Upcoming"
import MakeReservationButton from "./MakeReservationButton"
const Reservations = () =>{
    

    return (
        <div>
            <div className="reservations_bg_wrapper">
                    {/* <div className='reserve_title'><b>Yum Tea Tasting Reservations </b></div> */}
                <MakeReservationButton />
            </div>
            <div className='reservation_container'>

                
                {/*<Upcoming />*/}
                {/*<Past/>*/}
            </div>
        </div>
    )
}
export default Reservations