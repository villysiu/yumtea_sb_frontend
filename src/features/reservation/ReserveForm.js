import ReserveTime from "./ReserveTime"
import ReserveGuest from './ReserveGuest'
import ReserveDate from "./ReserveDate"
const ReserveForm = ({ reservationDate, setReservationDate, reservationTime, setReservationTime, guest, setGuest}) =>{
    



    return(
        <div className='reserve_date_time'>
            <ReserveDate reservationDate={reservationDate} setReservationDate={setReservationDate} />
            <ReserveTime reservationDate={reservationDate} reservationTime={reservationTime} setReservationTime={setReservationTime} />
        
            <ReserveGuest guest={guest} setGuest={setGuest} />
        </div>
    )
}
export default ReserveForm