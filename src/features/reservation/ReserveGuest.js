import { Form } from "react-bootstrap"
import InputGroup from 'react-bootstrap/InputGroup';
import { Person } from "react-bootstrap-icons";
const ReserveGuest =({guest, setGuest}) =>{
    const guestArr = Array.from(Array(5), (_, index) => index + 2);
    
    const handleChange = e =>{
        setGuest(e.target.value)
    }
    return(
        <InputGroup className='reserve_guest'>
        
        <InputGroup.Text id="basic-addon1">
            <Person />
        </InputGroup.Text>
            <Form.Select className='reserve_guest_count'
                onChange={handleChange}
                defaultValue={guest}
            >
                {
                    guestArr.map(count=>{
                        return(
                            <option key={count} value={count}>{count} Guests</option>
                        )
                    })
                }
            </Form.Select>
        </InputGroup>
    )
}
export default ReserveGuest