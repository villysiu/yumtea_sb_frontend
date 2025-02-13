import { PersonCircle } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';
import {homeLink} from '../../app/global.js'
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {Modal} from 'react-bootstrap'
import UserDropdown from './UserDropdown'

const HeaderUserButton =() =>{

    const {currentUser, loginStatus} = useSelector(state => state.user)
    const [show, setShow] = useState(false)

    if(loginStatus === 'succeeded'){
        return (
            <>
            {
                show && 
                <Modal show={show} onHide={()=>setShow(false)}  dialogClassName='user_dropdown_modal' >
                    <UserDropdown setShow={setShow} />
                </Modal>
                
            }
                <div className="header_user_button" onClick={()=>setShow(!show)}>
                    <PersonCircle className='header_user_icon me-2' /> 
                    <div className='header_user_name'>Hi, {currentUser.email}</div>
                </div>
            </>
        )
    }


    return (

        <Link to={`${homeLink}/user/signin`} className="header_user_button">
            <PersonCircle className='header_user_icon me-2' /> 
            Sign in
        </Link>   
        
    )
}
export default HeaderUserButton