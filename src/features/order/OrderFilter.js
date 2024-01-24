import Dropdown from 'react-bootstrap/Dropdown';
import { Check } from 'react-bootstrap-icons';

const OrderFilter = ({selected, setSelected}) =>{
    
    
    
    const filterChoices = [
        "All Order",
        "Past 30 days",
        // "Past 3 Months",
        "Current Year",
        "Last Year"
    ]
    

    
   return (
    <Dropdown className='order_filter_container'>
        <div className='order_filter_title'>Order Date</div>
        <Dropdown.Toggle className='order_filter_box' >
            <div>{filterChoices[selected]} </div>
            
        </Dropdown.Toggle>

        <Dropdown.Menu className='order_filter_choices'>
        {
            filterChoices.map((choice, idx)=>{
                return (
                    <Dropdown.Item className='order_filter_choice' onClick={()=>setSelected(idx)} >
                        <div style={{width: '1.5rem'}}>
                            {selected === idx && <Check />}
                        </div>
                        <div>{choice}</div>
                    </Dropdown.Item>
                )
            })
        }
        </Dropdown.Menu>
    </Dropdown>
   )
    
}
export default OrderFilter