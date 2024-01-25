import { Button, Form } from "react-bootstrap"
import { homeLink } from "../../app/global"

import { useState } from "react"
import ReserveTime from "./ReserveTime"
import ReserveGuest from './ReserveGuest'
import ReserveDate from "./ReserveDate"
import { useDispatch } from "react-redux"
import { makeReservation } from "./reservationSlice"
import { useNavigate } from "react-router-dom"
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
        console.log(date, time, guest)
        const formData={
            'reservation_date': date,
            'reservation_time': `${time}:00`,
            'no_of_guests': guest
        }
        dispatch(makeReservation(formData))
        .unwrap()
        .then((originalPromiseResult) => {
            console.log(originalPromiseResult)
            navigate("../reservation_success", { state: { from: "secure/reservation", data: originalPromiseResult} });
        })
        .catch((rejectedValueOrSerializedError) => {
        // handle error here
        })
    }
    return(
        <div className="reserve_wrapper">
            <div className="reserve_bg_wrapper">
                <img src={`${homeLink}/2018-CK-lifestyle.jpeg`} className="singlewine_bg"></img>
            
                <div className='reserve_title_container'>
                    <div className='reserve_title'><b>Little D Tasting Reservations </b></div>
                </div>
            </div>
            <Form onSubmit={handleSubmit} className='reserve_container'>

                <div className='reserve_date_time'>
                    <ReserveDate date={date} setDate={setDate} />
                    <ReserveTime time={time} setTime={setTime} />
                
                    <ReserveGuest guest={guest} setGuest={setGuest} />
                </div>
                <div className='reserve_button_container'>
                    <Button type="submit" className='gold_button'>Search</Button>
                </div>
            </Form>
        </div>
    )
}
export default Reserve