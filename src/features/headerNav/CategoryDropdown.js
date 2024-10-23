import { homeLink } from "../../app/global"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCategories, getCategories } from "../menuitem/menuitemSlice";
import { Link } from 'react-router-dom';


const CategoryDropdown = () =>{
    // const dispatch=useDispatch();

    // let categories = useSelector(state=>getCategories(state))
    // console.log(categories)

    // const [show, setShow] = useState(false)
    
    // useEffect(() => {
    //     const handleClick = (e) => {
    //         if(e.target.tagName.toLowerCase() === 'a')
    //             setShow(false)
    //     };
    //     window.addEventListener('click', handleClick);

    //     return () => {
    //         window.removeEventListener('click', handleClick);
    //     };
    // }, []);



    
        return (
            

            <div className="header_drinks_dropdown">
                
                    <Link to={`${homeLink}/menuitems`} className=' header_drinks_link' >
                        <div className='header_drinks_box'> 
                            All Drinks
                        </div> 
                    </Link>

                <div className='header_drinks_box'>Oolong Tea</div>
                <div className='header_drinks_box'>Black Tea</div>
                <div className='header_drinks_box'>Green Tea</div>
                <div className='header_drinks_box'>Caffeine-Free </div>


            </div>
        
    )
    
   
        
                        
                    
}
export default CategoryDropdown