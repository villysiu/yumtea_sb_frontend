import { useSelector } from "react-redux"
import { Clock } from "react-bootstrap-icons"
import { Calendar3 } from "react-bootstrap-icons"
import { PeopleFill } from "react-bootstrap-icons"
import DeleteReservationButton from "./DeleteReservationButton"
import EditReservationButton from "./EditReservationButton"
import { getUpcomingReservations } from "./reservationSlice"

import MakeReservationButton from "./MakeReservationButton"
const Upcoming = () =>{
    // const reservation_status = useSelector(state=>state.reservation.reservations.status)
    const reservation_array = useSelector(state=>getUpcomingReservations(state))
   

    if(reservation_array.length===0)
        return (
            <div className="no_reservation">
                <div className="mb-3">No reservation yet.</div>
                <MakeReservationButton />
            </div>
        )

    return (
        <div className='upcoming_reservation_container mt-5'>
            <div className='upcoming_reservation_title'>Upcoming reservation</div>
            {
                reservation_array.map(reservation=>{
                    return (
                        <div key={reservation.pk} className='single_upcoming_reservation_container'>
                            
                            <div className='upcoming_reservation_date'>
                                <Calendar3 className='me-2'/>{reservation.reservation_date}
                            </div>
                        
                            <div className='upcoming_reservation_time'>
                                <Clock className='me-2'/>{reservation.reservation_time.slice(0,5)}
                            </div>
                        
                            <div className='upcoming_reservation_guests'>
                                <PeopleFill className='me-2'/>{reservation.no_of_guests}
                            </div>
                            <div className='upcoming_reservation_edit_button'>
                                <EditReservationButton reservation={reservation} />
                                <DeleteReservationButton pk={reservation.pk} />
                            </div>    
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Upcoming