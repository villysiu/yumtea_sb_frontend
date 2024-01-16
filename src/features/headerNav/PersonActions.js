import { useDispatch, useSelector } from 'react-redux';
import { PersonCircle } from 'react-bootstrap-icons'
import { homeLink } from '../../app/global';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchCurrentUser } from '../user/userSlice';
const PersonActions = ({closeMDDropdown}) =>{
     const dispatch = useDispatch()
    // const userStatus = useSelector(state => state.users.currUser.status)
    const current_user = useSelector(state => {
        
        return state.user.current_user
    })

    // useEffect(()=>{

    //     if(localStorage.getItem('token') && current_user.username===null){
    //         dispatch(fetchCurrentUser())
    //     }
    // }, [dispatch, current_user.username])
  


        return (
            // { if status == loading ?
            //     do a spinner
            //  }

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