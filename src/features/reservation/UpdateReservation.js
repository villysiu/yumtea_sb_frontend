import { Form, Spinner } from "react-bootstrap"
import { homeLink } from "../../app/global"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getReservationById, updateReservation } from "./reservationSlice"
import { useLocation, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"
import ReserveForm from "./ReserveForm"
// import { useParams } from "react-router-dom"
// import { useSelector } from "react-redux"
import { Button } from "react-bootstrap"

const UpdateReservation =() =>{

    //  setup no direct access later
    let {resId} = useParams()
    // const {state} = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const reservation = useSelector(state => getReservationById(parseInt(resId), state))
    const create_or_update_status = useSelector(state => state.reservation.create_or_update.status)
    // const from = useSelector(state=>state.route.from)

    console.log(reservation)
    const [date, setDate] = useState(null)
    const [time, setTime] = useState(null)
    const [guest, setGuest] = useState(null)
    // if reservation not existed, return to all reservation

    useEffect(()=>{
        if(create_or_update_status==='succeeded' 
        // && from === 'updated'
        ){
            navigate('/secure/reservations/success')
        }
    }, [create_or_update_status])

    useEffect(()=>{
        if(reservation){
            setDate(reservation.reservation_date)
            setTime(reservation.reservation_time.slice(0,5))
            setGuest(reservation.no_of_guests)
        }
        else //if(!reservation)
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