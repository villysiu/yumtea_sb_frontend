
import {Trash3Fill} from "react-bootstrap-icons";
import {useDispatch} from "react-redux";
import {deleteMenuitem} from "../adminSlice";
import {useEffect, useRef, useState} from "react";
import {Button} from "react-bootstrap";
import {deleteAccount} from "./accountSlice";

const DeleteAccountButton = ({account}) =>{
    const dispatch = useDispatch()
    const deleteRef=useRef()

    const [confirm, setConfirm] = useState(false)

    const handleDelete = () =>{
        dispatch(deleteAccount(account.id))
        setConfirm(false)
    }
    const handleConfirm = () =>{
        setConfirm(true)
    }
    const handleCancel = () =>{
        setConfirm(false)
    }
    useEffect(()=>{
        const removeConfirm = e =>{
            if(deleteRef.current && !deleteRef.current.contains(e.target)) {
                setConfirm(false)
            }
        }
        document.addEventListener("click", removeConfirm)
        return () => {
            document.removeEventListener("click", removeConfirm)
        }
    },[deleteRef])


    return(
        <div ref={deleteRef}>
            {
                confirm &&
                <div className="delete_confirm_btn" >
                    <Button className='oblong_button remove_button me-5'  onClick={handleDelete}>Delete {account.email}</Button>
                    <Button className='oblong_button remove_button' onClick={handleCancel}>Cancel</Button>

                </div>
            }
            <Trash3Fill className="delete_btn mx-2" onClick={ handleConfirm } />
        </div>
    )
}
export default DeleteAccountButton