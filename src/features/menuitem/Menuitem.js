// import { Link } from "react-router-dom"
import { homeLink } from "../../app/global"
import { USDollar } from "../../app/global"
import OutOfStockButton from "./OutOfStockButton"
// import CustomizeContainer from "./CustomizeContainer"
import CustomizeButton from "./CustomizeButton"

const Menuitem = ({menuitem}) =>{

    
    return (
        <div className='menuitem_wrapper'>
        
        
            <div className='menuitem_text'>
                <div><b>{menuitem.title} </b></div>
                <div>{USDollar.format(menuitem.price)}</div>
            </div>
            <div className="menuitem_img_wrapper">
                <img src={`${homeLink}/chai.jpg`} className="menuitem_img" alt={menuitem.title}></img>  
            </div> 

            <div className='menuitem_plus_circle'>
                +
            </div>     
            

       
            {/* <div className='mb-3'></div>

            { menuitem.inventory === 0 ?
                <OutOfStockButton />
                :
                <div>
                    <CustomizeButton menuitem={menuitem}/>
                    {/* <Button className='gold_button' onClick={()=>setShow(true)}>Customize</Button> */}
                    {/* {message && <AddedOverlay message={message} setMessage={setMessage}/>} */}
                {/* </div>
            } */}

        </div>
    )
}
export default Menuitem