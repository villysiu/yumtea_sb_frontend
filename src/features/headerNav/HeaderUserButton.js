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
const HeaderUserButton =() =>{

    const {currentUser, fetchUserStatus, loginStatus, logoutStatus} = useSelector(state => state.user)
    const [show, setShow] = useState(false)

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Handle dropdown open
    const handleToggle = (isOpen) => {
        setIsDropdownOpen(!isDropdownOpen);
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
                {isDropdownOpen && <div className="dropdown-overlay" />}
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
            <Nav>
                <NavDropdown
                    className="nav-dropdown"
                    show={isDropdownOpen}
                    onToggle={handleToggle}
                    title={
                        <div className="header_user_name">
                            <PersonCircle size={45} className='me-2' />
                            <span>{currentUser.nickname}</span>
                        </div>
                        }
                >
                    <NavDropdown.Item className="nav-dropdown-item" href={`${homeLink}/secure/account`} >
                        Account
                    </NavDropdown.Item>
                    <NavDropdown.Item className="nav-dropdown-item" href={`${homeLink}/secure/orders`} >
                        Order History
                    </NavDropdown.Item>

                    <NavDropdown.Divider />

                    <LogoutNavButton />

                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </>
    )
    }


    return (

        <Link to={`${homeLink}/user/signin`} className="header_user_button">
            <PersonCircle size={45} className='me-2' />
            {/*Sign in*/}
        </Link>   
        
    )
}
export default HeaderUserButton

// if(currentUser !== null){
//     return (
//         <>
//         {
//             show &&
//             <Modal show={show} onHide={()=>setShow(false)}  dialogClassName='user_dropdown_modal' >
//                 <UserDropdown setShow={setShow} />
//             </Modal>
//
//         }
//             <div className="header_user_button" onClick={()=>setShow(!show)}>
//                 <PersonCircle className='header_user_icon me-2' />
//                 <div className='header_user_name'>Hi, {currentUser.nickname}</div>
//             </div>
//         </>
//     )
// }