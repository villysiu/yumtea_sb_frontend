import './customize.css'
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
    const task = useSelector(state=>state.menuitem.customize.task)

    // console.log(itemToCustomize)
    // const task = !itemToCustomize.pk  ? "add" : "update"
    // console.log(task)
//item data sent from menu and order history is menutitem_pk 
//item data sent from shopping cart is menuitem_id instead of menutitem_pk 
    const menuitem = useSelector(state=>getMenuitemById(state, itemToCustomize.menuitemId))

    const [price, setPrice] = useState(itemToCustomize.price)
    const [temperature, setTemperature] = useState(itemToCustomize.temperature)

    // const [size, setSize] =useState(itemToCustomize.size)
    // const [milkId, setMilkId] = useState(itemToCustomize.milk_pk || itemToCustomize.milk_id)
    const [quantity, setQuantity] = useState(1)
    // const [sugar, setSugar] = useState(itemToCustomize.sugar)

    const data = {
        'menuitemId': menuitem.id,
        'price': price,
        'quantity': quantity,
        'temperature': temperature
        // 'sweetness': sweetness,
        // 'size': size,
        // 'milk_pk': milkId
    }
    return (
        <>
            <Modal.Header className='customize_header' closeButton>
                <Modal.Title>Customize {menuitem.title} new </Modal.Title>
            </Modal.Header>
            <Modal.Body className='customize_list'>
            {
                menuitem.image_path &&
                <div className='customize_img_wrapper'>
                    <img src={`${homeLink}/menuitem/${menuitem.image_path}`} className="customize_img" alt={menuitem.title}></img>  
                </div>
            }
                
                <CustomizeTemp defaultTemperature={menuitem.temperature} temperature={temperature} setTemperature={setTemperature} />
                <CustomizeSize size={size} setSize={setSize} setPrice={setPrice} />
                {/*<CustomizeMilk menuitem={menuitem} milkId={milkId} setMilkId={setMilkId} setPrice={setPrice} />*/}
                {/*<CustomizeSweet sweetness={sweetness} setSweetness={setSweetness} />*/}
            </Modal.Body>
            <Modal.Footer className='customize_footer'>
                <UpdateQuantity quantity={quantity} setQuantity={setQuantity} />
               
                {/*{*/}
                {/*    task === 'add' ?*/}
                        <AddCartButton 
                            data={data}
                            handleHide={handleHide} 
                        />
                {/*        :*/}
                {/*        <UpdateCartButton*/}
                {/*            data={{...data, pk: itemToCustomize.pk}}*/}
                {/*            handleHide={handleHide} */}
                {/*        />*/}
                {/*    */}

                {/*}   */}

                        
        
            </Modal.Footer>
      </>
        
    )
}
export default CustomizeModal