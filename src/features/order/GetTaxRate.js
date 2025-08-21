import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {fetchTaxRate} from "./orderSlice";


const GetTaxRate = () => {

    console.log("Fetching tax rate for zipcode WA");
    
    const zipcode = "WA";
    const dispatch = useDispatch();
    const {fetchTaxRateStatus} = useSelector(state => state.order)

    

    useEffect(() => {
        console.log("fetchTaxRateStatus:" + fetchTaxRateStatus);
        if(fetchTaxRateStatus === "succeeded") return;
        console.log("Fetching tax rate for zipcode: " + zipcode);
         // Only fetch if the status is idle
         // This prevents unnecessary API calls if the tax rate is already fetched
         // or if the fetchTaxRateStatus is not 'idle'
        if(fetchTaxRateStatus === "idle")
            dispatch(fetchTaxRate(zipcode));
    }, [zipcode, dispatch, fetchTaxRateStatus]);

    return  null;
}
export default GetTaxRate