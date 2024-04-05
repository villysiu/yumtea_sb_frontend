import { Form } from "react-bootstrap"
import { homeLink } from "../../app/global"

import { useState } from "react"

import { useDispatch } from "react-redux"
import { updateReservation } from "./reservationSlice"
import { useLocation, useNavigate } from "react-router-dom"
import ReserveForm from "./ReserveForm"
// import { useParams } from "react-router-dom"
// import { useSelector } from "react-redux"
// import { getReservationById } from "./reservationSlice"
import { Button } from "react-bootstrap"

const UpdateReservation =() =>{

    //  setup no direct access later
    // const {pk} = useParams()
    const {state} = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const reservation = state.reservation
    console.log(reservation)
    

    const [date, setDate] = useState(reservation.reservation_date)
    const [time, setTime] = useState(reservation.reservation_time.slice(0,5))
    const [guest, setGuest] = useState(reservation.no_of_guests)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        const formData={
            'reservation_date': date,
            'reservation_time': `${time}:00`,
            'no_of_guests': guest
        }
        console.log(formData)
        dispatch(updateReservation({pk:reservation.pk, data: formData}))
        .unwrap()
        .then((originalPromiseResult) => {
            console.log(originalPromiseResult)
            console.log('hhh?')
            navigate("../../reservation/success", { state: { reservation: originalPromiseResult} });
        })
        .catch((rejectedValueOrSerializedError) => {
        // handle error here
        })
    }
    return(
       
        <div className="reserve_wrapper">
            <div className="reserve_bg_wrapper">
                <img src={`${homeLink}/2018-CK-lifestyle.jpeg`} alt="" className="singlewine_bg"></img>
            
                <div className='reserve_title_container'>
                    <div className='reserve_title'><b>Little D Tasting Reservations </b></div>
                </div>
            </div>
            <Form onSubmit={handleSubmit} className='reserve_container'>
                <ReserveForm date={date} setDate={setDate} time={time} setTime={setTime} 
                    guest={guest} setGuest={setGuest} 
                />
                <div className='reserve_button_container'>
                    <Button type="submit" className='gold_button'>Update Reservation</Button>
                </div>
            </Form>
        </div>
    )
}
export default UpdateReservation