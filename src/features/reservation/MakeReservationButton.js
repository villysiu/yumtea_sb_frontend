import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { homeLink } from "../../app/global"

const MakeReservationButton = () =>{
    return( 
            <Link to={`${homeLink}/secure/reservations/reserve`}>
                <Button className="gold_button">Make reservation</Button>
            </Link>
       
    )
}
export default MakeReservationButton