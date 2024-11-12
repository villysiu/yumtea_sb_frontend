import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchReservations } from "./reservationSlice"
import FullSpinner from "../user/FullSpinner"
import { Navigate } from "react-router-dom"

const ReservationsApp =() =>{
    const dispatch = useDispatch()
    const reservation_status = useSelector(state=>state.reservation.reservations.status)
    useEffect(()=>{
        if(reservation_status==='idle'){
            dispatch(fetchReservations())
        }
    }, [dispatch, reservation_status])

    if(reservation_status === "idle" || reservation_status === 'loading')
        return <FullSpinner />

    if(reservation_status === "failed")
    return <Navigate to={`/`}  />
    return (
        <Outlet />
    )
}
export default ReservationsApp