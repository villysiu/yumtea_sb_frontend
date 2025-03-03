import {useSelector} from "react-redux"
import "./account.css"
import LogoutButton from "./LogoutButton";
import {Modal} from "react-bootstrap";
import CartModal from "../cart/CartModal";
import {useState} from "react";
import EditNicknameModal from "./EditNicknameModal";

const Account = () => {

    const {currentUser} = useSelector(state => state.user );
    console.log(currentUser);
    const [show, setShow] = useState(false)

    return (
        <>
            {
                show &&
                <Modal show={show} onHide={()=>setShow(false)}  dialogClassName='edit_account_modal_wrapper' >

                        <EditNicknameModal setShow={setShow}/>

                </Modal>

            }

            <div className='mb-2' ><h3>Youy Account</h3></div>
            <div className="account_wrapper">
                <div className="account_line ">
                    <div><b>Email: </b>{currentUser.email}</div>

                </div>
                <div className="account_line">
                    <div><b>Nickname: </b>{currentUser.nickname}</div>
                    <div className="edit_account_button" onClick={()=>setShow(true)}>edit</div>
                </div>
                <div className="account_line">
                    <div><b>Password: </b> password</div>
                    <div>edit</div>
                </div>

            </div>
            {/*<p> name --- edit</p><p>email --- cannot be changed???</p><p>change passwotd</p>*/}
            {/*<div> make a left panel for choices</div>*/}
            {/*<div>previous orders</div>*/}
            {/*<div>upcoming orders</div>*/}

            <LogoutButton />
        </>
    )
}
export default Account