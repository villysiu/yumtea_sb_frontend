import { useSelector } from 'react-redux';
import { Button, Spinner } from 'react-bootstrap';
const LoginButton = ({email, password}) =>{

    // console.log(email, password)
    const {loginStatus} = useSelector(state=>state.user)
    if(loginStatus === 'loading')
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