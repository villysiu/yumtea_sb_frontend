import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { Spinner } from "react-bootstrap"
import { fetchPastReservations } from "./reservationSlice"
import { Clock } from "react-bootstrap-icons"
import { Calendar3 } from "react-bootstrap-icons"
import { PeopleFill } from "react-bootstrap-icons"
import DeleteReservationButton from "./DeleteReservationButton"

const Past = () =>{
    const dispatch = useDispatch()
    const reservation = useSelector(state=>state.reservation.past_reservations)
    useEffect(()=>{
        if(reservation.status==='idle'){
            dispatch(fetchPastReservations())
        }
    }, [dispatch, reservation.status])

    if(reservation.status === 'loading')
        return <Spinner />

    if(reservation.array.length===0)
        return <div>No upcoming res at all, make one now</div>

    return (
        <div className='past_reservation_container mt-5'>
            <div className='past_reservation_title'>Past reservation</div>
            {
                reservation.array.map(reservation=>{
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