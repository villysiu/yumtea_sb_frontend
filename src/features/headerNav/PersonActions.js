import { useDispatch, useSelector } from 'react-redux';
import { PersonCircle } from 'react-bootstrap-icons'
import { homeLink } from '../../app/global';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchCurrentUser } from '../user/userSlice';
const PersonActions = ({closeMDDropdown}) =>{
    
    const current_user = useSelector(state => state.user.current_user )




        return (

            <Link to={`${homeLink}/secure/account`} 
            onClick={closeMDDropdown}
            >
                {
                    current_user.username===null ? 
                    <PersonCircle className="circle_button"/> :
                    <>Hello {current_user.username}</>
                }
                
            </Link>

        )

}
export default PersonActions