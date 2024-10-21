import { Form } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { makeReservation } from "./reservationSlice"
import { useNavigate } from "react-router-dom"
import ReserveForm from "./ReserveForm"
import ReserveBackground from "./ReserveBackground"
import { Button } from "react-bootstrap"

const Reserve = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [reservationDate, setReservationDate] = useState("")
    const [reservationTime, setReservationTime] = useState("")

    const [guest, setGuest] = useState(2)
    

    const create_or_update_status = useSelector(state => state.reservation.create_or_update.status)

    useEffect(()=>{
        if(create_or_update_status==='succeeded'){
            navigate('/secure/reservations/success')
        }
    }, [create_or_update_status, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData={
            'reservation_date': reservationDate,
            'reservation_time': `${reservationTime}:00`,
            'no_of_guests': guest
        }
        console.log(formData)
        dispatch(makeReservation(formData))
        
    }
    return(
        <div>
            <ReserveBackground />
            <Form onSubmit={handleSubmit} className='reserve_container'>

                <ReserveForm
                    reservationDate={reservationDate} setReservationDate={setReservationDate}
                    reservationTime={reservationTime} setReservationTime={setReservationTime}
                    guest={guest} setGuest={setGuest}
                />
                <div className='reserve_button_container'>
                    <Button type="submit" className='gold_button'>Reserve</Button>
                </div>
            </Form>
        </div>
    )
}
export default Reserve