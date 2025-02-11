import InputGroup from "react-bootstrap/esm/InputGroup"
import { Form } from "react-bootstrap"
import {useSelector} from "react-redux";
import {getSugars} from "../menuitem/menuitemSlice";

const CustomizeSugar = ({defaultSugar, sugar, setSugar}) =>{

    const sugarChoices = useSelector(state => getSugars(state));
   const sugarMap = new Map([
       ["ZERO", "No Sugar"],
       ["TWENTY_FIVE", "25%"],
       ["FIFTY", "50%"],
       ["SEVENTY_FIVE", "75%"],
       ["HUNDRED", "100%"]
   ]);

    if(defaultSugar === "NA")
        return null;
    return (
        <div className='customize_item not_required'>
            <b>Sweetness</b>
            <div>Optional</div>
            <Form className='customize_item_choices'>
            {
                sugarChoices.map(sgr=> {

                    return (

                        <Form.Check key={sgr}
                                    className='customize_item_choice'
                                    onChange={() => setSugar(sgr)}
                                    inline
                                    type="radio"
                                    checked={sgr === sugar}
                                    name="sweet"
                                    label={sugarMap.get(sgr)}
                                    id={`size-radio-${sgr}`}
                        />
                    )
                })

                        
            }

            </Form>     
        </div>
    )
}
export default CustomizeSugar