import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {fetchTaxRate} from "./orderSlice";


const GetTaxRate = () => {
    const zipcode = "WA";
    const dispatch = useDispatch();
    const {fetchTaxRateStatus} = useSelector(state => state.order)

    useEffect(() => {
        if(fetchTaxRateStatus === "idle")
            dispatch(fetchTaxRate(zipcode));
    }, [zipcode]);

    return  null;
}
export default GetTaxRate