import { Modal, Button } from "react-bootstrap"
import CustomizeList from "./CustomizeList"
import PurchaseButton from "./PurchaseButton"
import { useState } from "react"

const CustomizeContainer = ({setShow, singleMenuitem, setMessage}) =>{

    const [milk, setMilk] = useState(singleMenuitem.milk_id)
    
    return (
        <>
            <Modal.Header closeButton>
            <Modal.Title>Customize {singleMenuitem.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CustomizeList menuitem={singleMenuitem} milk={milk} setMilk={setMilk} />
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
export default CustomizeContainer