import ReserveTime from "./ReserveTime"
import ReserveGuest from './ReserveGuest'
import ReserveDate from "./ReserveDate"

const ReserveForm =({date, setDate, time, setTime, guest, setGuest})=>{

    return(
        <>

            <div className='reserve_date_time'>
                <ReserveDate date={date} setDate={setDate} />
                <ReserveTime time={time} setTime={setTime} date={date}/>
            
                <ReserveGuest guest={guest} setGuest={setGuest} />
            </div>
            
        </>
            
    )
}
export default ReserveForm