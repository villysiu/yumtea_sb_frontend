import Form from 'react-bootstrap/Form';
import {useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import NameInputBox from "./NameInputBox";
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentUser, updateUser} from "./userSlice";
const EditNicknameModal = ({setShow}) =>{

    // const {updateStatus} = useSelector(state=>state.user)
    const [nickname, setNickname] = useState("");
    const [nicknameError, setNicknameError] = useState("");
    const dispatch = useDispatch();


    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("ipfate?")
        dispatch(updateUser({'nickname': nickname}))
        setShow(false);
    }

    // useEffect(()=>{
    //     if(updateStatus === 'succeeded')
    //         dispatch(fetchCurrentUser());
    //
    // }, [updateStatus])

    return (
        <div className="edit_account_modal">
            <Modal.Header className="edit_account_modal_header"  closeButton>
                <h3>Edit your Nickname</h3>
            </Modal.Header>

            <Form onSubmit={handleSubmit}>
                <NameInputBox nickname={nickname} setNickname={setNickname} nicknameError={nicknameError} setNicknameError={setNicknameError}/>

                <Button type="submit" className="save_account_button mt-4" disabled={ !nickname || nicknameError!=="" }>
                    Save
                </Button>
            </Form>

        </div>
    )
}
export default EditNicknameModal