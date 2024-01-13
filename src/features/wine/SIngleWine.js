import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { homeLink } from "../../app/global"
import { USDollar } from "../../app/global"
import PurchaseButton from "./PurchaseButton"
const SingleWine = () =>{
    let {itemId} = useParams()

    let {status, wine_arr} = useSelector(state => {
        console.log(state.wine.wines)
        return state.wine.wines
    })

    const singleWine = wine_arr.find(wine => wine.pk === parseInt(itemId))
    const title = singleWine.year +" " + singleWine.title + " very very long name"
    const Desc = () =>{
        return (
            <>
                {singleWine.description}
                {/* {singleWine.description}
                {singleWine.description}
                {singleWine.description}
                {singleWine.description}
                {singleWine.description}

                {singleWine.description}
                {singleWine.description} */}
            </>
        )
    }
    const Props = () =>{
        return (
            <ul className='singlewine_props_wrapper'>
                            <li className='singlewine_prop pe-3'>
                                <span>WINEMAKER</span>
                                <span>Danielle</span>
                            </li>
                            <li className='singlewine_prop ps-3 pe-3'>
                                <span>APPELLATION</span>
                                <span>{singleWine.origin}</span>
                            </li>
                            <li className='singlewine_prop ps-3' style={{borderRight: '0px'}}>
                                <span>VARIETAL</span>
                                <span>{singleWine.varietal}</span>
                            </li>
                        </ul>
        )
    }
    const Price =() =>{
        return(
            <div className='singlewine_cart mb-3'>
                <span className="pe-4">{USDollar.format(singleWine.price)}</span>
                <PurchaseButton menuitemId={singleWine.pk} menuitemTitle={singleWine.year +" " + singleWine.title} price={singleWine.price} />
            </div>
        )
    }
    if(singleWine===undefined)
        return( <div>cannot find wine, not existed?</div>)
        let myDivObj = document.getElementById("singlewine_bg"); 
        // let myDivObjBgColor = window.getComputedStyle(myDivObj).backgroundColor;
        console.log(myDivObj);
    return(
        <div className="singlewine_wrapper">
            <div className="singlewine_bg_wrapper" >
                <img src={`${homeLink}/pick_grape_bg.jpeg`} id="singlewine_bg" alt={singleWine.title}></img>
                
                <div className="singlewine_img_pos_wrapper app_width d-none d-sm-block">
                    <div className="singlewine_img_wrapper">
                        <img src={`${homeLink}/ASC_websize.png`} className="singlewine_img" alt={singleWine.title}></img>
                    </div>
                </div>
                <div className="singlewine_title_pos_wrapper app_width d-none d-sm-block">
                    <div className="singlewine_title_cart_props_wrapper">
                        <div className='singlewine_title '> 
                            {title}
                        </div>
                       <Price />
                        {/* <div className='singlewine_cart mb-3'>
                            <span className="pe-4">{USDollar.format(singleWine.price)}</span>
                            <PurchaseButton menuitemId={singleWine.pk} menuitemTitle={singleWine.year +" " + singleWine.title} price={singleWine.price} />
                        </div> */}
                        <Props />
                        
                    </div>
                </div>
                <div className=" d-block d-sm-none singlewine_title_img_visibility_wrapper">
                    <div className="singlewine_title_img_sm_wrapper">
                        <div className='singlewine_title '> 
                            {title}
                        </div>
                        
                        <div className="singlewine_img_wrapper">
                            <img src={`${homeLink}/ASC_websize.png`} className="singlewine_img" alt={singleWine.title}></img>
                        </div>
                         
                    </div>
                </div>
            </div>
            <div className="d-block d-sm-none" style={{"margin-top": "8rem"}}>
                <Price />
                <Props />
            </div>
            <div className="singlewine_desc_wrapper app_width ">
                <Desc />
            </div>
            

         </div>

    )
}
export default SingleWine