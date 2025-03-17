import {apiLink} from "../../../app/global";
import {PencilSquare} from "react-bootstrap-icons";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {deleteImage, uploadImage} from "../adminSlice";
import {Button, Modal} from "react-bootstrap";
import ImageForm from "./ImageForm";

const EditImage =({menuitem}) =>{
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const [image, setImage] = useState(`${apiLink}/images/${menuitem.imageUrl}`)
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
    const handleDelete = () => {
        dispatch(deleteImage(menuitem.id));
        setShow(false);
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ImageForm image={image} setImage={setImage} file={file} setFile={setFile} />
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={handleSubmit}>
                        Save Image
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="editImg_wrapper" onClick={()=>setShow(true)}>
                <img src={`${apiLink}/images/${menuitem.imageUrl}`}
                     className="menuitem_img "
                     alt={menuitem.title}

                ></img>
                <PencilSquare size={27} className="editImg"/>

            </div>
        </>
    )
}
export default EditImage