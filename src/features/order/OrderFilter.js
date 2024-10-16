import { Form } from "react-bootstrap"

const OrderFilter = ({filter, setFilter}) =>{

    const filterChoices = [
        "All Order",
        "Past 7 days",
        // "Past 3 Months",
        "Current Year",
        "Last Year"
    ]
    const handleChange = e =>{
        // console.log(e.target.value)
        setFilter(e.target.value)
    }
   return (
        <div className='order_filter_container'>
            <div className='order_filter_title'>Order Date</div>
            <Form.Select className='order_filter_box'
                onChange={handleChange}
                defaultValue={filter}
            >
            {
                filterChoices.map((choice, idx)=>{
                    return (     
                        <option key={idx} value={idx}>
                            {choice}
                        </option>
                    )})
            }
            </Form.Select>
        </div>          
   )
    
}
export default OrderFilter