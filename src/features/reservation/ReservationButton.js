import { Link } from "react-router-dom"
import { homeLink } from "../../app/global"
const ReservationButton = () =>{
    return (
        <div className='pb-2' >
            <Link to={`${homeLink}/secure/reservations`} className="solid_link" >
                Your Reservations
            </Link>
        </div>
    )
}
export default ReservationButton