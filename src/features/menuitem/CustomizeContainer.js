import { Modal, Button } from "react-bootstrap"
import CustomizeList from "./CustomizeList"
import PurchaseButton from "./PurchaseButton"
import { useState } from "react"

const CustomizeContainer = ({setShow, menuitem}) =>{

    const [milk, setMilk] = useState(menuitem.milk_id)
    
    return (
        <>
            <Modal.Header closeButton>
            <Modal.Title>Customize {menuitem.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CustomizeList menuitem={menuitem} milk={milk} setMilk={setMilk} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={()=>setShow(false)}>
                    Cancel
                </Button>
            
                <PurchaseButton singleMenuitem={menuitem} 
                    milkId = {milk}
                    setShow={setShow} 
                />
                        
        
            </Modal.Footer>
      </>
    )
}
export default CustomizeContainer