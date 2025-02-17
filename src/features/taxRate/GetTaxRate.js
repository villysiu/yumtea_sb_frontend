import {useEffect} from "react";
import {fetchTaxRate} from "./taxRateSlice";
import {useDispatch, useSelector} from "react-redux";

const GetTaxRate = () => {
    const zipcode = "WA";
    const dispatch = useDispatch();
    const {fetchTaxRateStatus} = useSelector(state => state.taxRate)

    useEffect(() => {
        if(fetchTaxRateStatus === "idle")
            dispatch(fetchTaxRate(zipcode));
    }, [zipcode]);

    return  null;
}
export default GetTaxRate