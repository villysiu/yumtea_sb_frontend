import { Form, InputGroup } from "react-bootstrap"
import { Calendar3 } from "react-bootstrap-icons"
const ReserveDate = ({date, setDate}) =>{

    const dateHelper =(days)=>{
        const today = new Date() 
        today.setDate(today.getDate()+days)
        let year = today.getFullYear()
        let month = parseInt(today.getMonth())+1
        let day = today.getDate()
        let todayStr= `${year}-${month.toString().padStart(2,"0")}-${day}`
        return todayStr
    }
    let maxStr=dateHelper(20)
    let minStr=dateHelper(0)
    
    const handleDate = (e) =>{
        const dateControl = document.querySelector('input[type="date"]');
        setDate(dateControl.value)
    }
    return (
        // <div className='reserve_date' >
        //     <input type="date" className='reserve_date_input'
        //     value={date} 
        //     min={minStr} max={maxStr}
        //     onChange={handleDate}
        //     />
        //  </div>   
        <InputGroup className='reserve_date' >
           
           <InputGroup.Text><Calendar3 /></InputGroup.Text>
           <Form.Control
               type="date" className='reserve_date_input'
               value={date} 
               min={minStr} max={maxStr}
               onChange={handleDate}
           />
       </InputGroup>
        

    )
}
export default ReserveDate