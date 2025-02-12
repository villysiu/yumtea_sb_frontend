import InputGroup from "react-bootstrap/esm/InputGroup"
import { Form } from "react-bootstrap"
const CustomizeTemp = ({defaultTemperature, temperature, setTemperature}) => {
    
    const tempChoices =  ["Hot", "Iced"]

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
                                defaultChecked={temperature === temp}
                                name="temp"
                                label={temp}
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