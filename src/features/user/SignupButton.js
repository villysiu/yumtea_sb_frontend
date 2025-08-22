import { Button} from 'react-bootstrap';
const SignupButton = ({nickname, email, password, nicknameError, emailError, passwordError}) =>{


    return (
        <Button type="submit" className='signin_button' disabled={ !nickname || !email || !password || nicknameError!=="" ||  emailError!=="" ||  passwordError!=="" }>
            Create account
        </Button>
    )
}
export default SignupButton