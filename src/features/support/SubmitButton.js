import {useSelector} from "react-redux";
import {Button, Spinner} from "react-bootstrap";

const SubmitButton = ({emailError, descError, email, desc}) =>{

    return (



        <div className="submit_button_wrapper">
            <Button type="submit" className='submit_button'
                    disabled={ emailError!=="" || descError!=="" || email==="" || desc==="" } >
                Submit
            </Button>
        </div>
    )
}
export default SubmitButton