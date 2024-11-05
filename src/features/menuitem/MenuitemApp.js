import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchMenuitems, fetchMilks, fetchCategories } from "./menuitemSlice"
// import FullSpinner from "../headerNav/FullSpinner"


const MenuitemApp = ({setSpinner}) =>{
    console.log("Menuitem App")
    const dispatch = useDispatch()
    let menuitems_status = useSelector(state => state.menuitem.menuitems.status)
    let milk_status = useSelector(state => state.menuitem.milk.status)
    let category_status = useSelector(state => state.menuitem.category.status)
    
    console.log(menuitems_status)
    useEffect(()=>{
        if(menuitems_status==='idle'){
            dispatch(fetchMenuitems())
            setSpinner(true)
        }
        if(milk_status === 'idle'){
            dispatch(fetchMilks())
            setSpinner(true)
        }
        if(category_status==='idle'){
            dispatch(fetchCategories())
            setSpinner(true)
        }
        if(menuitems_status==='succeeded' && milk_status==='succeeded' && category_status==='succeeded'){
            setSpinner(false)
        }
        

        
    }, [dispatch, menuitems_status, milk_status])


    // if(menuitems_status === "idle" || milk_status==="idle"){    
    //     return <Spinner animation="border" className="spinner"/>
    // }
    // if(menuitems_status === "loading" || milk_status==="loading"){
       
    //     return <Spinner animation="border" className="spinner"/>
    // }

    return null
}
export default MenuitemApp