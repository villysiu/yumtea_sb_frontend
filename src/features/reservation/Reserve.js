import { Form } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { makeReservation } from "./reservationSlice"
import { useNavigate } from "react-router-dom"
import ReserveForm from "./ReserveForm"
import ReserveBackground from "./ReserveBackground"
import { Button } from "react-bootstrap"
import ReserveDateTime from "./ReserveDateTime";
import ReserveGuest from "./ReserveGuest";

const Reserve = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()

   const [res, setRes] = useState({
       'resDate': "",
       'resTime': "",
       'guestCount': 2
   })



    // const [resDate, setResDate] = useState("")
    //
    // const [resTime, setResTime] = useState("")
    //
    const [guest, setGuest] = useState(2)
    

    const {createResStatus, updateReeStatus} = useSelector(state => state.reservation)

    useEffect(()=>{
        if(createResStatus==='succeeded'){
            navigate('/secure/reservations/success')
        }
    }, [createResStatus, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData={
            'resDate': res.resDate,
            'resTime': res.resDate,
            'guestCount': res.guestCount
        }
        console.log(formData)
        // dispatch(makeReservation(formData))
        
    }
    return(
        <div>
            <ReserveBackground />
            <Form onSubmit={handleSubmit} className='reserve_container'>

                <ReserveDateTime res={res} setRes={setRes} />
                <ReserveGuest guest={guest} setGuest={setGuest} />
                <div className='reserve_button_container'>
                    <Button type="submit" className='gold_button'>Reserve</Button>
                </div>
            </Form>
        </div>
    )
}
export default Reserve