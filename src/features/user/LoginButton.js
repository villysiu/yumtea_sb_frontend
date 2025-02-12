import { useSelector } from 'react-redux';
import { Button, Spinner } from 'react-bootstrap';
const LoginButton = ({email, password}) =>{

    // console.log(email, password)
    const login_status = useSelector(state=>state.user.login_status)
    if(login_status === 'loading')
        return(
            <Button className='signin_button'>
                <Spinner size="sm" />
            </Button>
        )

    return (
            <Button type="submit" className='signin_button' disabled={ !email || !password }>
                    Sign In
            </Button>
    )
}
export default LoginButton