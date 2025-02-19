import { PersonCircle } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';
import {homeLink} from '../../app/global.js'
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {Modal} from 'react-bootstrap'
import UserDropdown from './UserDropdown'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Spinner from "react-bootstrap/Spinner";
import LogoutNavButton from "../user/LogoutNavButton";
import CartModal from "../cart/CartModal";
const HeaderUserButton =() =>{

    const {currentUser, fetchUserStatus, loginStatus, logoutStatus} = useSelector(state => state.user)
    const [show, setShow] = useState(false)


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

    if(currentUser !== null){
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
                        <LogoutNavButton setShow={setShow}/>

                    </Modal>
                }

    <div className="header_user_name" onClick={handleToggle}>
    <PersonCircle size={45} className='me-2'/>
                    <span className="nav_username">{currentUser.nickname}</span>
                </div>

            </>
        )
    }


    return (

        <Link to={`${homeLink}/user/signin`} className="header_user_button">
            <PersonCircle size={45} className='mx-2'/>
            {/*Sign in*/}
        </Link>

    )
}
export default HeaderUserButton
