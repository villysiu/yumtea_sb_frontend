import { Modal, Button } from "react-bootstrap"
import CustomizeMilk from "./CustomizeMilk"
import { useState } from "react"
import PurchaseButton from "./PurchaseButton"
const CustomizeList = ({setShow, singleMenuitem, setMessage}) =>{
    const [milk, setMilk] = useState(singleMenuitem.milk)
    
    return (
        <>
            <Modal.Header closeButton>
            <Modal.Title>Customize {singleMenuitem.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                { 
                    singleMenuitem.milk !== 1 && 
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
            <PurchaseButton menuitemId={singleMenuitem.pk} 
                            menuitemTitle={singleMenuitem.title} 
                            price={singleMenuitem.price}
                            milk={milk} 
                            setShow={setShow} 
                            setMessage={setMessage} />
            </Modal.Footer>
      </>
    )
}
export default CustomizeList