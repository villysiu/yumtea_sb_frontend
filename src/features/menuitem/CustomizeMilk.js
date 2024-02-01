import InputGroup from "react-bootstrap/esm/InputGroup"
import { Form } from "react-bootstrap"
import { useSelector } from "react-redux"
import { USDollar } from "../../app/global"
const CustomizeMilk = ({milk, setMilk}) =>{
    
    const milkChoices = useSelector(state=>state.menuitem.milk)

    const handleChange = e =>{
        setMilk(parseInt(e.target.value))
    }
    if(milkChoices.status === 'loading')
        return <div>Loading</div>
    if(milkChoices.status === 'failed')
        return null
    return (
        <InputGroup className='customize_milk'>
            <span className="customize_milk_title">Milk Alternative</span>
           
            <Form.Select className='customize_milk_select'
                onChange={handleChange} defaultValue={milk}
            >
                {
                    milkChoices.array.map(choice =>{
                        if(choice.id === 1 ) 
                            return;

                        return(
                            <option key={choice.id} value={choice.id}>
                                {choice.title} +{USDollar.format(choice.price)}
                            </option>
                        )
                    })
                }
            </Form.Select>
        </InputGroup>
    )
}
export default CustomizeMilk