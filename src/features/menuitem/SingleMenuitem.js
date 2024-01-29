import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { homeLink } from "../../app/global"
import { USDollar } from "../../app/global"
import PurchaseButton from "./PurchaseButton"

const SingleMenuitem = () =>{
    let {itemId} = useParams()

    let menuitems = useSelector(state => state.menuitem.menuitems)

    const singleMenuitem = menuitems.array.find(menuitem => menuitem.pk === parseInt(itemId))
    const title = singleMenuitem.title + " very very long name"
    const Desc = () =>{
        return (
            <>
                {singleMenuitem.description}
                {singleMenuitem.description}
                
            </>
        )
    }
    const Props = () =>{
        return (
            <ul className='singlewine_props_wrapper'>
                <li className='singlewine_prop pe-3'>
                    <span>Hot / Cold</span>
                    
                </li>
                <li className='singlewine_prop ps-3 pe-3'>
                    <span>Sweetness</span>
                </li>
                <li className='singlewine_prop ps-3'>
                    <span>Milk Alternative</span>
                </li>
                <li className='singlewine_prop ps-3' style={{borderRight: '0px'}}>
                    <span>Topping</span>
                </li>

            </ul>
        )
    }
    const Price =() =>{
        return(
            <div className='singlewine_cart mb-3'>
                <span className="singlewine_price pe-4 ">{USDollar.format(singleMenuitem.price)}</span>
                <PurchaseButton menuitemId={singleMenuitem.pk} menuitemTitle={singleMenuitem.year +" " + singleMenuitem.title} price={singleMenuitem.price} />
            </div>
        )
    }
    if(singleMenuitem===undefined)
        return( <div>cannot find item, not existed? </div>
        
    )
    
    return(
        <div className="singlewine_wrapper">
            
            <div className="singlewine_bg_wrapper" >
                {/* <div className='singlewine_bg'></div> */}
                <img src={`${homeLink}/IMG_0216.JPG`} className="singlewine_bg" alt={singleMenuitem.title}
                
                ></img>
                
          
                <div className="singlewine_img_pos_wrapper app_width d-none d-sm-block">
                    <div className="singlewine_img_wrapper">
                        <img src={`${homeLink}/IMG_0210.PNG`} className="singlewine_img" alt={singleMenuitem.title}></img>
                    </div>
                </div>
                <div className="singlewine_title_pos_wrapper app_width d-none d-sm-block">
                    <div className="singlewine_title_cart_props_wrapper">
                        <div className='singlewine_title '> 
                            {title}
                        </div>
                        <Price />
                        <Props />
                        
                    </div>
                </div>
                <div className=" d-block d-sm-none singlewine_title_img_visibility_wrapper">
                    <div className="singlewine_title_img_sm_wrapper">
                        <div className='singlewine_title '> 
                            {title}
                        </div>
                        
                        <div className="singlewine_img_wrapper">
                            <img src={`${homeLink}/IMG_0210.PNG`} className="singlewine_img" alt={singleMenuitem.title}></img>
                        </div>
                         
                    </div>
                </div>
            </div>
            <div className="d-block d-sm-none" style={{marginTop: "8rem"}}>
                <Price />
                <Props />
            </div>
            <div className="singlewine_desc_wrapper app_width">
                <Desc />
            </div>
           
         </div>

    )
}
export default SingleMenuitem