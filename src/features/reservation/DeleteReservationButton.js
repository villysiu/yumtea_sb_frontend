import { TrashFill } from "react-bootstrap-icons"
import { useDispatch } from "react-redux"
import { deleteReservation } from "./reservationSlice"

const DeleteReservationButton = ({pk}) =>{
    const dispatch = useDispatch()
    const handleClick = () =>{
        dispatch(deleteReservation(pk))
    }
    return(
        <div className='trash_btn' >
            <TrashFill onClick={handleClick}/>
        </div>
    )
}
export default DeleteReservationButton