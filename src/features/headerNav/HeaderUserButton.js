import { PersonCircle } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';
import {homeLink} from '../../app/global.js'
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {Modal} from 'react-bootstrap'
import Spinner from "react-bootstrap/Spinner";
import LogoutNavButton from "../user/LogoutNavButton";
const HeaderUserButton =() =>{

    const {currentUser, fetchUserStatus, loginStatus, logoutStatus} = useSelector(state => state.user)
    const [show, setShow] = useState(false)

    console.log(currentUser)

    // Handle dropdown open
    const handleToggle = () => {
        setShow(!show);
    };


    if(fetchUserStatus==="loading" ||  loginStatus==="loading" || logoutStatus === "loading")
        return (
            <div>
                <Spinner animation="border" className="spinner"/>
            </div>
        )


    if(currentUser === null)
        return (

            <Link to={`${homeLink}/user/signin`} className="user_button_wrapper me-3">
                <PersonCircle className="user_button" />
            </Link>

        )
    return(
        <>
            {
                show &&
                <Modal show={show} onHide={()=>setShow(false)}
                       dialogClassName='user_modal'
                    >
                    <Link to={`${homeLink}/secure/account`} className="user_modal_link" onClick={handleToggle}>
                        <div className="user_modal_item top">
                            Account
                        </div>
                    </Link>

                    <Link to={`${homeLink}/secure/orders`}  className="user_modal_link" onClick={handleToggle}>
                        <div className="user_modal_item">
                            Order History
                        </div>
                    </Link>
                    {currentUser && currentUser.isAdmin &&
                        <Link to={`${homeLink}/admin/hub`} className='user_modal_link' onClick={handleToggle} >
                            <div className='user_modal_item'>
                                Admin Panel
                            </div>
                        </Link>
                    }
                    <LogoutNavButton setShow={setShow}/>

                </Modal>
            }
            <div className="user_button_wrapper me-3" onClick={handleToggle}>
                <PersonCircle className="user_button" />

                <span className="nav_username">{currentUser.nickname}</span>
            </div>

        </>
    )




}
export default HeaderUserButton
