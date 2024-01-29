import { Form } from "react-bootstrap"
import { homeLink } from "../../app/global"

import { useState } from "react"

import { useDispatch } from "react-redux"
import { makeReservation } from "./reservationSlice"
import { useNavigate } from "react-router-dom"
import ReserveForm from "./ReserveForm"

const Reserve = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const today = new Date() 
    const todayStr= `${today.getFullYear()}-${parseInt((today.getMonth()) +1).toString().padStart(2,"0")}-${today.getDate()}`

    const [date, setDate] = useState(todayStr)
    const [time, setTime] = useState("12:00")
    const [guest, setGuest] = useState(2)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const formData={
            'reservation_date': date,
            'reservation_time': `${time}:00`,
            'no_of_guests': guest
        }
        console.log(formData)
        dispatch(makeReservation(formData))
        .unwrap()
        .then((originalPromiseResult) => {
            console.log(originalPromiseResult)
            console.log('hhh?')
            navigate("../reservation/success", { state: { reservation: originalPromiseResult} });
        })
        .catch((rejectedValueOrSerializedError) => {
        // handle error here
        })
    }
    return(
        <div className="reserve_wrapper">
            <div className="reserve_bg_wrapper">
                <img src={`${homeLink}/A4CAC926-19A1-4D99-AA1A-F9CD36186C5C.jpeg`} alt="" className="singlewine_bg"></img>
            
                <div className='reserve_title_container'>
                    <div className='reserve_title'><b>Little D Tasting Reservations </b></div>
                </div>
            </div>
            <Form onSubmit={handleSubmit} className='reserve_container'>
                <ReserveForm date={date} setDate={setDate} time={time} setTime={setTime} 
                    guest={guest} setGuest={setGuest} btnName={'Make Reservation'} />
            </Form>
        </div>
    )
}
export default Reserve