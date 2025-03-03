import Form from 'react-bootstrap/Form';
import {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {updatePassword} from "./userSlice";
import PasswordInputBox from "./PasswordInputBox";
const EditPasswordModal = ({setShow}) =>{

    // const {updateStatus} = useSelector(state=>state.user)
    const [currentPassword, setCurrentPassword] = useState("");
    const [currentPasswordError, setCurrentPasswordError] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordError, setNewPasswordError] = useState("");
    const dispatch = useDispatch();


    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("update password?")
        dispatch(updatePassword({'currentPassword': currentPassword, 'newPassword': newPassword}))
        setShow("");
    }



    return (
        <div className="edit_account_modal">
            <Modal.Header className="edit_account_modal_header"  closeButton>
                <h3>Edit your password</h3>
            </Modal.Header>

            <Form onSubmit={handleSubmit}>
                <PasswordInputBox password={currentPassword} setPassword={setCurrentPassword} passwordError={currentPasswordError} setPasswordError={setCurrentPasswordError} placeHolder="Current Password"/>


                <PasswordInputBox password={newPassword} setPassword={setNewPassword} passwordError={newPasswordError} setPasswordError={setNewPasswordError} placeHolder="New Password"/>

                <Button type="submit" className="save_account_button mt-4" disabled={ !currentPassword || currentPasswordError!=="" || !newPassword || newPasswordError!==""}>
                    Save
                </Button>
            </Form>

        </div>
    )
}
export default EditPasswordModal