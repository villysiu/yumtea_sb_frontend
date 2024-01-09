import { FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { incrementByAmount } from './cartSlice';
const QtyInputBox = ({itemId, qty}) =>{
    
    return(
        <div style={{'position': "relative"}}>
            <Form.Control type="text"
            className='qty_box' 
            // defaultValue={qty} 
            value={qty} 
            />
            <div className='qty_label'>QTY</div>
        </div>
        
    )
}
export default QtyInputBox