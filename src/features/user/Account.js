import {useSelector} from "react-redux"
import "./account.css"
import LogoutButton from "./LogoutButton";
import {Modal} from "react-bootstrap";
import CartModal from "../cart/CartModal";
import {useState} from "react";
import EditNicknameModal from "./EditNicknameModal";
import EditPasswordModal from "./EditPasswordModal";

const Account = () => {

    const {currentUser} = useSelector(state => state.user );
    console.log(currentUser);
    const [show, setShow] = useState("")

    return (
        <>
            {
                show &&
                <Modal show={ show!=="" } onHide={()=>setShow("")}  dialogClassName='edit_account_modal_wrapper' >
                    {
                        show === "nickname" ?
                            <EditNicknameModal setShow={setShow}/>
                            :
                            <EditPasswordModal setShow={setShow} />
                }

                </Modal>

            }

            <div className='mb-2' ><h3>Your Account</h3></div>
            <div className="account_wrapper">
                <div className="account_line ">
                    <div><b>Email: </b>{currentUser.email}</div>

                </div>
                <div className="account_line">
                    <div><b>Nickname: </b>{currentUser.nickname}</div>
                    <div className="edit_account_button" onClick={()=>setShow("nickname")}>edit</div>
                </div>
                <div className="account_line">
                    <div><b>Password </b> </div>
                    <div className="edit_account_button" onClick={()=>setShow("password")}>edit</div>
                </div>

            </div>


            <LogoutButton />
        </>
    )
}
export default Account