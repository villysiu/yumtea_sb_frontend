import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchMenuitems } from "./menuitemSlice"

const MenuitemApp = () =>{
    console.log("Menuitem App")
    const dispatch = useDispatch()
    let menuitems_status = useSelector(state => state.menuitem.menuitems.status)
    useEffect(()=>{
        
        if(menuitems_status==='idle'){
            dispatch(fetchMenuitems())
        }
      }, [dispatch, menuitems_status])

    if(menuitems_status === "loading"){
        return <>Loading</>
    }
    if(menuitems_status === 'failed' || menuitems_status === 'idle'){
        return null
    }
    return(
        <Outlet />
    )
}
export default MenuitemApp