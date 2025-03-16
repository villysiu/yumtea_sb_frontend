import {Button, Col, Modal, Row} from "react-bootstrap";
import MenuitemForm from "./MenuitemForm";
import Form from "react-bootstrap/Form";

const ImageForm = ({image, setImage, file, setFile}) => {
    // const [image, setImage] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]); // Get the selected file
        if (event.target.files[0]) {
            // Create a URL for the image file
            const imageUrl = URL.createObjectURL(event.target.files[0]);
            setImage(imageUrl); // Update state with the image URL
        }
    };
    return (
        <>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {image && (
            <div>
                <h4>Preview:</h4>
                {/* Image Preview */}
                <img src={image} alt="Selected" style={{ width: '300px', height: '300px' }} />
            </div>
        )}
        </>

    )
}
export default ImageForm