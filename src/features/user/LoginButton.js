import { useSelector } from 'react-redux';
import { Button, Spinner } from 'react-bootstrap';
const LoginButton = ({username, password}) =>{
    const token_status = useSelector(state=>state.user.token.status)
    const current_user_status = useSelector(state=>state.user.current_user.status)
    return (
        <>
        
        {
            token_status === 'loading' || current_user_status === 'loading' ? 
            <Button className='signin_button mb-3' style={{'width': '81px'}}>
                <Spinner size="sm" />
            </Button>

            :
            <Button type="submit" className='signin_button' disabled={ !username || !password }>
                {
                    (!username || !password) ? <>Enter Username and Password</>  : <>Sign In</>
                }
                
            </Button>
        }   
        </> 
    )
}
export default LoginButton