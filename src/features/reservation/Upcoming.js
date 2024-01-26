import { fetchReservations } from "./reservationSlice"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { Spinner } from "react-bootstrap"
import { Clock } from "react-bootstrap-icons"
import { Calendar3 } from "react-bootstrap-icons"
import { PeopleFill } from "react-bootstrap-icons"
import DeleteReservationButton from "./DeleteReservationButton"
import EditReservationButton from "./EditReservationButton"
const Upcoming = () =>{
    const dispatch = useDispatch()
    const reservation = useSelector(state=>state.reservation.upcoming_reservations)
    useEffect(()=>{
        if(reservation.status==='idle'){
            dispatch(fetchReservations())
        }
    }, [dispatch, reservation.status])

    if(reservation.status === 'loading')
        return <Spinner />

    if(reservation.upcoming_reservations_arr.length===0)
        return <div>No upcoming res at all, make one now</div>

    return (
        <div className='upcoming_reservation_container mt-5'>
            <div className='upcoming_reservation_title'>Upcoming reservation</div>
            {
                reservation.upcoming_reservations_arr.map(reservation=>{
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