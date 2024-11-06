import { homeLink } from "../../app/global"
const CustomizeImage = ({menuitem}) =>{
    console.log(menuitem)
    if(menuitem.image_path === null)
        return null
    return(
        <div className='customize_img_wrapper'>
            <img src={`${homeLink}/menuitem/${menuitem.image_path}`} className="customize_img" alt={menuitem.title}></img>  
        </div>
    )
}
export default CustomizeImage