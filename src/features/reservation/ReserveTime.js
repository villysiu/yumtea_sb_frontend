import { Form } from "react-bootstrap"
import InputGroup from 'react-bootstrap/InputGroup';
import { Clock } from "react-bootstrap-icons";
const ReserveTime = ({time, setTime}) =>{
    let timeArray = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
                    "15:00", "15:30", "16:00"]
    const handleChange = e =>{
        setTime(e.target.value)
    }
    return (
        <InputGroup className='reserve_time'>
        
        
        <InputGroup.Text id="basic-addon1">
            <Clock />
        </InputGroup.Text>
            <Form.Select className='reserve_time_select'
            onChange={handleChange}
            defaultValue={time}
            >
                {
                    timeArray.map(time =>{
                        return(
                            <option key={time} value={time}>
                                {time}PM
                            </option>
                        )
                    })
                }
            </Form.Select>
        </InputGroup>
    )
}
export default ReserveTime