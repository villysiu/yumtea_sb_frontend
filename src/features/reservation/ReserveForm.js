import ReserveTime from "./ReserveTime"
import ReserveGuest from './ReserveGuest'
import ReserveDate from "./ReserveDate"
import { Button } from "react-bootstrap"
const ReserveForm =({date, setDate, time, setTime, guest, setGuest, btnName})=>{

    return(
        <>

            <div className='reserve_date_time'>
                <ReserveDate date={date} setDate={setDate} />
                <ReserveTime time={time} setTime={setTime} />
            
                <ReserveGuest guest={guest} setGuest={setGuest} />
            </div>
            <div className='reserve_button_container'>
                <Button type="submit" className='gold_button'>{btnName}</Button>
            </div>
        </>
            
    )
}
export default ReserveForm