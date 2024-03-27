import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchMenuitems, fetchMilks } from "./menuitemSlice"
import FullSpinner from "../headerNav/FullSpinner"

const MenuitemApp = () =>{
    console.log("Menuitem App")
    const dispatch = useDispatch()
    let menuitems_status = useSelector(state => state.menuitem.menuitems.status)
    let milk_status = useSelector(state => state.menuitem.milk.status)
    // let menuitemsByCategory_status = useSelector(state=>state.menuitem.menuitemsByCategory.status)

    useEffect(()=>{
        if(menuitems_status==='idle'){
            dispatch(fetchMenuitems())
        }
        if(milk_status === 'idle'){
            dispatch(fetchMilks())
   }
      }, [dispatch, menuitems_status, milk_status])

      if(menuitems_status === "idle" || milk_status==="idle" ){
        return <FullSpinner />

    }
    if(menuitems_status === "loading" || milk_status==="loading" ){
        return <FullSpinner />

    }
    if(menuitems_status === 'failed' || milk_status==='failed'){
        return null
    }
    return(
        <Outlet />
    )
}
export default MenuitemApp