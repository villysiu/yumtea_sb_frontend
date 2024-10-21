import { Form, Spinner } from "react-bootstrap"
import { homeLink } from "../../app/global"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getReservationById, updateReservation, deleteReservation } from "./reservationSlice"
import {  useNavigate } from "react-router-dom"
import ReserveForm from "./ReserveForm"
import ReserveBackground from "./ReserveBackground"
import { Button } from "react-bootstrap"
import DeleteReservation from './DeleteReservation'

const UpdateReservation =() =>{

    //  setup no direct access later
    let {resId} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const reservation = useSelector(state => getReservationById(parseInt(resId), state))

    const create_or_update_status = useSelector(state => state.reservation.create_or_update.status)
    const delete_status = useSelector(state => state.reservation.delete.status)

    console.log(reservation)
    const [reservationDate, setReservationDate] = useState(reservation.reservation_date)
    const [reservationTime, setReservationTime] = useState(reservation.reservation_time.slice(0,5))
    const [guest, setGuest] = useState(reservation.no_of_guests)
    

    useEffect(()=>{
        console.log("in update res")

        if(create_or_update_status==='succeeded'){
            navigate('/secure/reservations/success')
        }
        if(delete_status === 'succeeded')
            navigate('/secure/reservations')
    }, [create_or_update_status, navigate])

    // if reservation not existed, return to all reservation
    useEffect(()=>{
        if(reservation.reservation_date==="")
            navigate('/secure/reservations')
        
    },[reservation, navigate])


    const handleUpdate = (e) => {
        e.preventDefault()
        
        const formData={
            'reservation_date': reservationDate,
            'reservation_time': `${reservationTime}:00`,
            'no_of_guests': guest
        }
        console.log(formData)
        dispatch(updateReservation({pk:reservation.pk, data: formData}))

    }
    const handleDelete = () =>{
        dispatch(deleteReservation(reservation.pk))
    }
    return(
       
        <div>
            <ReserveBackground />
            
            <Form className='reserve_container'>
                <ReserveForm
                    reservationDate={reservationDate} setReservationDate={setReservationDate}
                    reservationTime={reservationTime} setReservationTime={setReservationTime}
                    guest={guest} setGuest={setGuest}
                />
                <div className="reservation_buttons_container">
                { 
                    create_or_update_status === 'loading' 
                    ? 
                    <Spinner /> 
                    :
                    <div className='reserve_button_container'>
                        <Button onClick={handleUpdate}  className='gold_button'>Update Reservation</Button>
                    </div>
                }
                
                <div className='reserve_button_container'>
                    <Button onClick={handleDelete} className='red_button'>Cancel Reservation</Button>
                </div>
            
                </div>

            </Form>
        </div>
    )
}
export default UpdateReservation