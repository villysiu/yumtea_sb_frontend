
import ReserveGuest from './ReserveGuest'
const ReserveForm = ({ resDate, setResDate, resTime, setResTime, guest, setGuest}) =>{
    



    return(
        <div className='reserve_date_time'>

            <ReserveGuest guest={guest} setGuest={setGuest} />
        </div>
    )
}
export default ReserveForm