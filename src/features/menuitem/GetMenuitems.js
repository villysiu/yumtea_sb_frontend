import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import {fetchMenuitems, fetchMilks, fetchCategories, fetchSizes, fetchSugars} from "./menuitemSlice"
// import FullSpinner from "../headerNav/FullSpinner"


const GetMenuitems = ({setGetMenuitem}) =>{
    console.log("Menuitem App")
    const dispatch = useDispatch()
    let menuitems_status = useSelector(state => state.menuitem.menuitems.status)
    let milk_status = useSelector(state => state.menuitem.milk.status)
    let category_status = useSelector(state => state.menuitem.category.status)
    let size_status = useSelector(state => state.menuitem.size.status)
    let sugar_status = useSelector(state => state.menuitem.sugar.status)
    
    // console.log("menuitem: " + menuitems_status);
    // console.log("milk: " + milk_status);
    // console.log("category: " + category_status);

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
        if(sugar_status === 'idle'){
            dispatch(fetchSugars());
            // setSpinner(true);
        }
        if(menuitems_status === 'succeeded'
            && milk_status === 'succeeded'
            && category_status === 'succeeded'
            && size_status === 'succeeded'
            && sugar_status === 'succeeded'){
            setGetMenuitem(true)
        }
        else
            setGetMenuitem(false)
        

        
    }, [dispatch, menuitems_status, milk_status, category_status, size_status, sugar_status])

}
export default GetMenuitems