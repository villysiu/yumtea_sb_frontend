import {getMenuitemById} from '../menuitem/menuitemSlice'
import {useSelector} from 'react-redux'
import CustomizeTemp from "./CustomizeTemp"
import CustomizeSize from "./CustomizeSize"
import CustomizeMilk from "./CustomizeMilk"
import CustomizeSweet from "./CustomizeSweet"
import AddtocartButton from "./AddtocartButton"
import UpdateCartButton from './UpdateCartButton'
import UpdateQuantity from "./UpdateQuantity"
import AddCartButton from './AddCartButton'
import { useState } from "react"
import { Modal } from 'react-bootstrap'
import  {homeLink} from '../../app/global'

const CustomizeModal = ({handleHide}) =>{
    const itemToCustomize = useSelector(state=>state.menuitem.customize.itemToCustomize)
    // const task = useSelector(state=>state.menuitem.customize.task)

    console.log(itemToCustomize)
    const task = !itemToCustomize.carrtitem_pk  ? "add" : "update"
    console.log(task)

    
    const menuitem = useSelector(state=>getMenuitemById(state, itemToCustomize.menuitem_pk))

    const [price, setPrice] = useState(itemToCustomize.price)
    const [temperature, setTemperature] = useState(itemToCustomize.temperature)
    const [size, setSize] =useState(itemToCustomize.size)
    const [milkId, setMilkId] = useState(itemToCustomize.milk_pk)
    const [quantity, setQuantity] = useState(1)
    const [sweetness, setSweetness] = useState(itemToCustomize.sweetness)

    const data = {
        'menuitem_pk': menuitem.pk,
        'price': price,
        'quantity': quantity,
        'temperature': temperature,
        'sweetness': sweetness,
        'size': size,
        'milk_pk': milkId
    }
    return (
        <>
            <Modal.Header className='customize_header' closeButton>
                <Modal.Title>Customize {menuitem.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='customize_list'>
            {
                menuitem.image_path &&
                <div className='customize_img_wrapper'>
                    <img src={`${homeLink}/menuitem/${menuitem.image_path}`} className="customize_img" alt={menuitem.title}></img>  
                </div>
            }
                
                <CustomizeTemp menuitem={menuitem} temperature={temperature} setTemperature={setTemperature} />
                <CustomizeSize size={size} setSize={setSize} setPrice={setPrice} />
                <CustomizeMilk menuitem={menuitem} milkId={milkId} setMilkId={setMilkId} setPrice={setPrice} />
                <CustomizeSweet sweetness={sweetness} setSweetness={setSweetness} />
            </Modal.Body>
            <Modal.Footer className='customize_footer'>
                <UpdateQuantity quantity={quantity} setQuantity={setQuantity} />
                <AddCartButton 
                    data={data}
                    handleHide={handleHide} 
                            
                />
                {/* {
                    task === 'add' ?
                        <AddCartButton 
                            data={data}
                            handleHide={handleHide} 
                            
                />
                        :
                        <UpdateCartButton
                            cartitem_pk={cartitemPk}
                            price = {price}
                            quantity = {quantity}
                            menuitem_id={itemId} 
                            temp = {temp}
                            sweetness = {sweetness}
                            size={size}
                            milk_id={milkId}
                            setShow={setShow} 
                        />

                }    */}

                        
        
            </Modal.Footer>
      </>
        
    )
}
export default CustomizeModal