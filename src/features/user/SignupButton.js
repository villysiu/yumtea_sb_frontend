import { useSelector } from 'react-redux';
import { Button, Spinner } from 'react-bootstrap';
const SignupButton = ({nickname, email, password}) =>{

    // console.log(email, password)
    const {signupStatus} = useSelector(state=>state.user)
    if(signupStatus === 'loading')
        return(
            <Button className='signin_button'>
                <Spinner size="sm" />
            </Button>
        )

    return (
        <Button type="submit" className='signin_button' disabled={ !nickname || !email || !password }>
            Create account
        </Button>
    )
}
export default SignupButton