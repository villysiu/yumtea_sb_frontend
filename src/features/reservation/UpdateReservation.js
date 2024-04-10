import { Form, Spinner } from "react-bootstrap"
import { homeLink } from "../../app/global"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getReservationById, updateReservation } from "./reservationSlice"
import {  useNavigate } from "react-router-dom"
import ReserveForm from "./ReserveForm"

import { Button } from "react-bootstrap"

const UpdateReservation =() =>{

    //  setup no direct access later
    let {resId} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const reservation = useSelector(state => getReservationById(parseInt(resId), state))

    const create_or_update_status = useSelector(state => state.reservation.create_or_update.status)

    console.log(reservation)
    const [date, setDate] = useState(reservation.reservation_date)
    const [time, setTime] = useState(reservation.reservation_time.slice(0,5))
    const [guest, setGuest] = useState(reservation.no_of_guests)
    // if reservation not existed, return to all reservation

    useEffect(()=>{
        if(create_or_update_status==='succeeded'){
            navigate('/secure/reservations/success')
        }
    }, [create_or_update_status])

    useEffect(()=>{
        if(reservation.reservation_date==="")
            navigate('/secure/reservations')
        
    },[reservation])

   
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        const formData={
            'reservation_date': date,
            'reservation_time': `${time}:00`,
            'no_of_guests': guest
        }
        console.log(formData)
        dispatch(updateReservation({pk:reservation.pk, data: formData}))

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
                { create_or_update_status === 'loading' ? <Spinner /> :
                <div className='reserve_button_container'>
                    <Button type="submit" className='gold_button'>Update Reservation</Button>
                </div>
}
            </Form>
        </div>
    )
}
export default UpdateReservation