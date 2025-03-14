import InputGroup from "react-bootstrap/InputGroup";
import {Calendar3, Clock} from "react-bootstrap-icons";
import {Form} from "react-bootstrap";

const ReserveDateTime = ({res, setRes}) =>{

    const dateHelper = (dateObj, days) =>{
        const y = dateObj.getFullYear()
        const m = (dateObj.getMonth()+1).toString().padStart(2,"0")
        const d = (dateObj.getDate()+days).toString().padStart(2,"0")
        // const h
        // const min

        return y+ "-" + m +"-"+ d
    }
    let timeArray = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
        "15:00", "15:30", "16:00"]

    const handleChangeDate = (e) =>{
        console.log(e)
        setRes(curr=>({
                ...curr,
                "resDate": e.target.value
            }
        ))
    }


    return (
        <>
            <InputGroup className='reserve_date' >

                <InputGroup.Text><Calendar3 /></InputGroup.Text>

                <Form.Control
                    type="date" className='reserve_date_input' id="resDate"
                    value={dateHelper(res.resDate)}
                    min={dateHelper(new Date(),1 )}
                    max={dateHelper(new Date(),8 )}
                    onChange={handleChangeDate}
                />
            </InputGroup>
            <InputGroup className='reserve_time'>

                <InputGroup.Text id="basic-addon1"><Clock /></InputGroup.Text>

                <Form.Select id="resTime" className='reserve_time_select'
                             // onChange={handleChangeTime}
                             value={res.resTime}
                >
                    {
                        timeArray.map((time) =>{
                            return(

                                <option key={time} value={time}
                                        // disabled={blocked.includes(time) ? true : false}
                                >
                                    {time}PM
                                </option>

                            )
                        })
                    }
                </Form.Select>
            </InputGroup>
        </>
    )
}
export default ReserveDateTime