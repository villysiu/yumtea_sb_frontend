import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchWines } from "./wineSlice"
import WineList from "./WineList"
import { Link } from "react-router-dom"
import { Cart } from "react-bootstrap-icons"
import { homeLink } from "../../app/global"
const WineApp = () =>{
    console.log("wine App")
    const dispatch = useDispatch()
    let {status} = useSelector(state => state.wine.wines)
    
    useEffect(()=>{

        if(status==='idle'){
            dispatch(fetchWines())
        }
      }, [dispatch, status])

    if(status === "loading"){
      
        return <>Loading</>
    }
    return(
        <>

            <Outlet />
        </>
    )
}
export default WineApp