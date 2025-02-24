import {useSelector} from "react-redux";
import {Button, Spinner} from "react-bootstrap";

const SubmitButton = ({emailError, descError, email, desc}) =>{
    // const {loginStatus} = useSelector(state=>state.user)
    return (

        // if(loginStatus === 'loading')
        //     return(
        //         <Button className='signin_button'>
        //             <Spinner size="sm" />
        //         </Button>
        //     )

        <div className="submit_button_wrapper">
            <Button type="submit" className='submit_button'
                    disabled={ emailError!=="" || descError!=="" || email==="" || desc==="" } >
                Submit
            </Button>
        </div>
    )
}
export default SubmitButton