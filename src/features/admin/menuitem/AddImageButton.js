import {Image, PlusCircle} from "react-bootstrap-icons";
import {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import MenuitemForm from "./MenuitemForm";
import ImageForm from "./ImageForm";

import {useDispatch} from "react-redux";
import {uploadImage} from "../../menuitem/menuitemSlice";

const AddImageButton = ({menuitem}) =>{
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const [newImage, setNewImage] = useState("")
    const [file, setFile] = useState(null)
    const handleClose = () => {
        setShow(false)
    }
    const handleSubmit = () =>{

        const formData = new FormData();
        formData.append('file', file);
        formData.append('id', menuitem.id);

        dispatch(uploadImage(formData))
        setShow(false)
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ImageForm image={newImage} setImage={setNewImage} file={file} setFile={setFile} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Add Image
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="addimg_wrapper" onClick={()=>setShow(true)}>
                <Image size={85}/>
                <PlusCircle size={25} className="addimg"/>
            </div>


        </>
    )
}
export default AddImageButton