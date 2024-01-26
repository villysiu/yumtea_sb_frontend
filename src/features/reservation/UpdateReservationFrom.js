import { Outlet, useLocation } from "react-router-dom"
import { Navigate } from "react-router-dom"
const UpdateReservationFrom =() =>{


    const location = useLocation()
    console.log(location)
    // {pathname: '/secure/reservation/update', search: '', hash: '', state: null, key: 'default'}
    
    if(!location.state || !location.state.reservation){
        return <Navigate to="../reservations" replace={true} />
    }
    

    return (
        <Outlet />
    )
}
export default UpdateReservationFrom