import Past from "./Past"
import Upcoming from "./Upcoming"
import { fetchReservations } from "./reservationSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
// import { getUpcomingReservations } from "./reservationSlice"
const Reservations = () =>{
    const dispatch = useDispatch()
    // const reservation_array = useSelector(state=>getUpcomingReservations(state))
    const reservation_status = useSelector(state=>state.reservation.reservations.status)
    useEffect(()=>{
        if(reservation_status==='idle'){
            dispatch(fetchReservations())
        }
    }, [dispatch, reservation_status])
    return (
        <div className='reservation_container'>
            <Upcoming />
            <Past/>
        </div>
    )
}
export default Reservations