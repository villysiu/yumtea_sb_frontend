import Plus from './Plus';
import { useSelector } from 'react-redux';

import ProfileDropdown from './ProfileDropdown';
import User from '../user/session/User'
import { PersonCircle } from 'react-bootstrap-icons'
import { Spinner } from 'react-bootstrap';

const PersonActions = () =>{
    const userStatus = useSelector(state => state.users.currUser.status)
    const currUser = useSelector(state => state.users.currUser.currUser)
  
    if (!currUser){
        return (
            userStatus === 'loading' ? 
                <Spinner  /> 
                : 
                <User display={
                    <>
                        <div  className="flex_row_center">
                            <PersonCircle className="circle_button"/>
                            <div className='d-none d-lg-block'>
                                <div style={{cursor: 'pointer'}} >
                                    Login
                                </div>
                            </div>
                        </div>
                    </>
                }/>

        )}
    return(
        <>
            <Plus />
            <ProfileDropdown currUser={currUser} />
        </>
           
    )
}
export default PersonActions