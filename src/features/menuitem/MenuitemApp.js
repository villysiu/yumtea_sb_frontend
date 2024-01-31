import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchMenuitems, fetchMilks } from "./menuitemSlice"

const MenuitemApp = () =>{
    console.log("Menuitem App")
    const dispatch = useDispatch()
    let menuitems_status = useSelector(state => state.menuitem.menuitems.status)
    let milk_status = useSelector(state => state.menuitem.milk.status)
    useEffect(()=>{
        console.log(milk_status)
        if(menuitems_status==='idle'){
            dispatch(fetchMenuitems())
        }
        if(milk_status === 'idle'){
            console.log('fetching milk?')
            dispatch(fetchMilks())
   }
      }, [dispatch, menuitems_status, milk_status])

    if(menuitems_status === "loading" || milk_status==="loading"){
        return <>Loading</>
    }
    if(menuitems_status === 'failed' || menuitems_status === 'idle' ||
    milk_status==='failed' || milk_status==='idle'
    ){
        return null
    }
    return(
        <Outlet />
    )
}
export default MenuitemApp