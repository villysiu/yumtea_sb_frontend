import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { Spinner } from "react-bootstrap"
import { fetchPastReservations } from "./reservationSlice"
import { Clock } from "react-bootstrap-icons"
import { Calendar3 } from "react-bootstrap-icons"
import { PeopleFill } from "react-bootstrap-icons"
import DeleteReservationButton from "./DeleteReservationButton"
import { getPastReservations } from "./reservationSlice"

const Past = () =>{
    const dispatch = useDispatch()
    const reservation_status = useSelector(state=>state.reservation.reservations.status)
    const reservation_array = useSelector(state=>getPastReservations(state))

    if(reservation_status === 'loading')
        return <Spinner />

    if(reservation_array.length===0)
        return null

    return (
        <div className='past_reservation_container mt-5'>
            <div className='past_reservation_title'>Past reservation</div>
            {
                reservation_array.map(reservation=>{
                    return (
                        <div key={reservation.pk} className='single_past_reservation_container'>
                            
                            <div className='past_reservation_date'>
                                <Calendar3 className='me-2'/>{reservation.reservation_date}
                            </div>
                        
                            <div className='past_reservation_time'>
                                <Clock className='me-2'/>{reservation.reservation_time.slice(0,5)}
                            </div>
                        
                            <div className='past_reservation_guests'>
                                <PeopleFill className='me-2'/>{reservation.no_of_guests}
                            </div>
                            <div className='past_reservation_edit_button'>
                                <DeleteReservationButton pk={reservation.pk} />
                      
                            </div>    
                           
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Past