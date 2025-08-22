
import { Button } from 'react-bootstrap';
const LoginButton = ({email, password, emailError, passwordError}) =>{


    return (
            <Button type="submit" className='signin_button' disabled={ emailError!=="" || passwordError!=="" || email==="" || password==="" }>
                Sign In
            </Button>
    )
}
export default LoginButton