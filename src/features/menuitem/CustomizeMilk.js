import InputGroup from "react-bootstrap/esm/InputGroup"
import { Clock } from "react-bootstrap-icons"
import { Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { fetchMilks } from "./menuitemSlice"
const CustomizeMilk = ({milk, setMilk}) =>{
    const dispatch = useDispatch()
    const milkChoices = useSelector(state=>state.menuitem.milk)

    dispatch(()=>{
        if(milkChoices.status === 'idle')
            dispatch(fetchMilks())
    }, [milkChoices.status, dispatch])

    const handleChange = e =>{
        setMilk(parseInt(e.target.value))
    }
    if(milkChoices.status === 'loading')
        return <div>Loading</div>
    if(milkChoices.status === 'failed')
    return null
    return (
        <InputGroup className='customize_milk'>
        
            <InputGroup.Text id="basic-addon1">
                <Clock />
            </InputGroup.Text>
            <Form.Select className='customize_milk_select'
            onChange={handleChange}
            defaultValue={milk}
            >
                {
                    milkChoices.array.map(choice =>{
                        if(choice.pk === 1 ) 
                            return;

                        return(
                            <option key={choice.pk} value={choice.pk}>
                                {choice.title}
                            </option>
                        )
                    })
                }
            </Form.Select>
        </InputGroup>
    )
}
export default CustomizeMilk