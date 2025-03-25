import {Trash3Fill} from "react-bootstrap-icons";
import {useDispatch} from "react-redux";
import {deleteMenuitem} from "../../menuitem/menuitemSlice";
import {useEffect, useRef, useState} from "react";
import {Button} from "react-bootstrap";

const DeleteMenuitemButton = ({menuitem}) =>{
    const dispatch = useDispatch()
    const deleteRef=useRef()

    const [confirm, setConfirm] = useState(false)

    const handleDelete = () =>{
        dispatch(deleteMenuitem(menuitem.id));
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
        <span ref={deleteRef}>
            {
                confirm &&
                <div className="delete_confirm_btn" >
                    <Button className='oblong_button remove_button me-5'  onClick={handleDelete}>Delete {menuitem.title}</Button>
                    <Button className='oblong_button remove_button' onClick={handleCancel}>Cancel</Button>

                </div>
            }
            <Trash3Fill className="delete_btn mx-2" onClick={ handleConfirm } />
        </span>
    )
}
export default DeleteMenuitemButton