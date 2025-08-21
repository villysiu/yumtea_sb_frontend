import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import {
    fetchMenuitems,
    fetchMilks,
    fetchCategories,
    fetchSizes,
    fetchSugars,
    fetchBestSellerss,
    fetchTemperatures
} from "./menuitemSlice"



const GetMenuitems = ({getMenuitem, setGetMenuitem}) =>{
    console.log("Getting Menuitem")
    const dispatch = useDispatch()
    let menuitemsStatus = useSelector(state => state.menuitem.menuitems.status)
    let milkStatus = useSelector(state => state.menuitem.milk.status)
    let categoryStatus = useSelector(state => state.menuitem.category.status)
    let sizeStatus = useSelector(state => state.menuitem.size.status)
    let sugarStatus = useSelector(state => state.menuitem.sugar.status)
    let temperatureStatus = useSelector(state => state.menuitem.temperature.status)
    let bestsellersStatus = useSelector(state=>state.menuitem.bestSellers.status)
    
    // console.log("menuitem: " + menuitemsStatus);
    // console.log("milk: " + milkStatus);
    // console.log("category: " + categoryStatus);
    // console.log("sizeStatus: " + sizeStatus);
    // console.log("sugarStatus: " + sugarStatus);
    // console.log("bestsellersStatus: " + bestsellersStatus);

    useEffect(()=>{
        if(getMenuitem) return;

        if(menuitemsStatus==='idle'){
            dispatch(fetchMenuitems())
        }
        if(milkStatus === 'idle'){
            dispatch(fetchMilks())
        }
        if(categoryStatus==='idle'){
            dispatch(fetchCategories())
        }
        if(sizeStatus === 'idle'){
            dispatch(fetchSizes());
        }
        if(sugarStatus === 'idle'){
            dispatch(fetchSugars());
        }
        if(temperatureStatus === 'idle'){
            dispatch(fetchTemperatures());
        }
        if(bestsellersStatus === 'idle'){
            dispatch(fetchBestSellerss());
        }


        const allSucceeded = 
            menuitemsStatus === 'succeeded' &&
            milkStatus === 'succeeded' &&
            categoryStatus === 'succeeded' &&
            sizeStatus === 'succeeded' &&
            sugarStatus === 'succeeded' &&
            temperatureStatus === 'succeeded' &&
            bestsellersStatus === 'succeeded';

            
        setGetMenuitem(allSucceeded);
        

        
    }, [dispatch, menuitemsStatus, milkStatus, categoryStatus, sizeStatus, sugarStatus, temperatureStatus, bestsellersStatus, setGetMenuitem])

    // if(getMenuitem === false)
        return null;
}
export default GetMenuitems