import { TrashFill } from "react-bootstrap-icons"
import { useDispatch, useSelector } from "react-redux"
import {useEffect} from "react"
import { deleteReservation } from "./reservationSlice"
import {  useNavigate } from "react-router-dom"
import { Spinner } from "react-bootstrap"

const DeleteReservation = ({pk, btn}) =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const create_or_update_status = useSelector(state => state.reservation.create_or_update.status)
    useEffect(()=>{
        console.log("in delete res")
        if(create_or_update_status==='succeeded'){
            navigate('/secure/reservations')
        }
    }, [create_or_update_status, navigate])

    const handleClick = () =>{
        dispatch(deleteReservation(pk))
    }
    return(
        <>
        {
            create_or_update_status === 'loading' 
            ? 
            <Spinner /> 
            :
            <div onClick={handleClick}>
                {btn}
            </div>
        }
        </>
    )
}
export default DeleteReservation