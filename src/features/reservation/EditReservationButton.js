import { PencilSquare } from "react-bootstrap-icons"
import { Link } from "react-router-dom"
import { homeLink } from "../../app/global"

const EditReservation = ({reservation}) =>{    
    return(
        <Link to={`${homeLink}/secure/reservations/${reservation.pk}/update`} 
            className='edit_btn'>
            <PencilSquare />
        </Link>
    )
}
export default EditReservation