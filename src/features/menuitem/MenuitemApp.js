import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import {fetchMenuitems, fetchMilks, fetchCategories, fetchSizes} from "./menuitemSlice"
// import FullSpinner from "../headerNav/FullSpinner"


const MenuitemApp = ({setSpinner}) =>{
    console.log("Menuitem App")
    const dispatch = useDispatch()
    let menuitems_status = useSelector(state => state.menuitem.menuitems.status)
    let milk_status = useSelector(state => state.menuitem.milk.status)
    let category_status = useSelector(state => state.menuitem.category.status)
    let size_status = useSelector(state => state.menuitem.size.status)
    
    console.log("menuitem: " + menuitems_status);
    console.log("milk: " + milk_status);
    console.log("category: " + category_status);

    useEffect(()=>{
        if(menuitems_status==='idle'){
            dispatch(fetchMenuitems())
            // setSpinner(true)
        }
        if(milk_status === 'idle'){
            dispatch(fetchMilks())
            // setSpinner(true)
        }
        if(category_status==='idle'){
            dispatch(fetchCategories())
            // setSpinner(true)
        }
        if(size_status === 'idle'){
            dispatch(fetchSizes());
            // setSpinner(true);
        }
        if(menuitems_status==='succeeded' && milk_status==='succeeded' && category_status==='succeeded'){
            setSpinner(false)
        }
        else
            setSpinner(true)
        

        
    }, [dispatch, menuitems_status, milk_status])

}
export default MenuitemApp