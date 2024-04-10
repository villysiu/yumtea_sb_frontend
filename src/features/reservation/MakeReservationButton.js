import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { homeLink } from "../../app/global"

const MakeReservationButton = () =>{
    return(
        <div className='make_reservation_button'>
            <Link to={`${homeLink}/secure/reservations/reserve`}>
                <Button className="gold_button">Make reservation</Button>
            </Link>
        </div>
    )
}
export default MakeReservationButton