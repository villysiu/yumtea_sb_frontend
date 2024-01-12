import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchWines } from "./wineSlice"

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
    if(status === 'failed' || status === 'idle'){
        return null
    }
    return(
        <Outlet />
    )
}
export default WineApp