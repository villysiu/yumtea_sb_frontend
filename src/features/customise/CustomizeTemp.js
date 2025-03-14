import InputGroup from "react-bootstrap/esm/InputGroup"
import { Form } from "react-bootstrap"
import {getTemperatures} from "../menuitem/menuitemSlice";
import {useSelector} from "react-redux";
const CustomizeTemp = ({defaultTemperature, temperature, setTemperature}) => {
    
    // const tempChoices =  ["Hot", "Iced"]
    const tempChoices = useSelector(state => getTemperatures(state));
    if(defaultTemperature !== "FREE")
        return null;


    return (
        <div className='customize_item required'>
            <b>Hot Or Iced</b>
            <div>Required - Choose 1.</div>
            <Form className='customize_item_choices'>
                {
                    tempChoices.map((temp, idx) => {
                        return (

                            <Form.Check
                                key={idx}
                                className='customize_item_choice'
                                onChange={() => setTemperature(temp.toUpperCase())}
                                inline
                                type="radio"
                                defaultChecked={temperature === temp.toUpperCase()}
                                name="temp"
                                label={temp[0]+temp.slice(1).toLowerCase()}
                                id={`temp-radio-${idx}`}
                            />

                        )
                    })

                }

            </Form>
        </div>
    )
}
export default CustomizeTemp