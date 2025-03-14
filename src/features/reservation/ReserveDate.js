import { Form, InputGroup } from "react-bootstrap"
import { Calendar3 } from "react-bootstrap-icons"
import { useEffect, useMemo } from "react"
const ReserveDate = ({resDate, setResDate}) =>{
    
    const dateToStringHelper =(dt)=>{
        const yearStr = dt.getFullYear()
        const monthStr = (dt.getMonth()+1).toString().padStart(2,"0")
        const dateStr = dt.getDate()
        const dtStr = `${yearStr}-${monthStr}-${dateStr}`
        return dtStr
    }

    // const minDate = new Date()
    // minDate.setDate(minDate.getDate()+1)
    //
    // const minDate = useMemo(()=>{
    //     let p=new Date()
    //     p.setDate(p.getDate()+1)
    //
    //     return p
    // },[])
    // const maxDate = new Date()
    maxDate.setDate(maxDate.getDate()+8)

    useEffect(()=>{
        console.log(resDate)
        if(!resDate)
            setResDate(dateToStringHelper(minDate))
    }, [resDate, minDate, setResDate])
    
    const handleDate = (e) =>{
        setResDate(e.target.value)
    }
    

    return (

        <InputGroup className='reserve_date' >
           
           {/*<InputGroup.Text><Calendar3 /></InputGroup.Text>*/}
           {/*<Form.Control*/}
           {/*    type="date" className='reserve_date_input'*/}
           {/*    value={resDate}*/}
           {/*    // min={dateToStringHelper(minDate)} */}
           {/*    //  max={dateToStringHelper(maxDate)}*/}
           {/*    onChange={handleDate}*/}
           {/*/>*/}
       </InputGroup>
        

    )
}
export default ReserveDate