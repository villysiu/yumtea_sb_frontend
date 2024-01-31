import { Modal, Button } from "react-bootstrap"
import CustomizeMilk from "./CustomizeMilk"
import { useState } from "react"
import PurchaseButton from "./PurchaseButton"
const CustomizeList = ({setShow, singleMenuitem, setMessage}) =>{
    const [milk, setMilk] = useState(singleMenuitem.milk_id)
    
    return (
        <>
            <Modal.Header closeButton>
            <Modal.Title>Customize {singleMenuitem.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                { 
                    singleMenuitem.milk_id !== 1 && 
                    <li className='single_item_customize ps-3'>
                        <span>Milk Alternative</span>
                        <CustomizeMilk milk={milk} setMilk={setMilk} />
                    </li>
                }
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={()=>setShow(false)}>
                Cancel
            </Button>
            <PurchaseButton singleMenuitem={singleMenuitem} 
                            milkId = {milk}
                            setShow={setShow} 
                            setMessage={setMessage} />
            </Modal.Footer>
      </>
    )
}
export default CustomizeList