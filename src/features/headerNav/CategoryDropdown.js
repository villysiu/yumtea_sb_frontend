import { homeLink } from "../../app/global"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCategories, getCategories } from "../menuitem/menuitemSlice";
import { Link } from 'react-router-dom';


const CategoryDropdown = () =>{
    const categories = useSelector(state=>state.menuitem.category.array)
    return (
        <div className="header_drinks_dropdown">
            
            <Link to={`${homeLink}/collection`} className=' header_drinks_link' >
                <div className='header_drinks_box'> 
                    Best Sellers
                </div> 
            </Link>
            {
                categories.map(category=>{    
                    return (
                        <Link key={category.pk} to={`${homeLink}/collection#${category.image_path}`} className=' header_drinks_link' >
                            <div className='header_drinks_box'> 
                                {category.title}
                            </div> 
                        </Link>
                    )

                })
                
          
        
            }
            {/* <Link to={`${homeLink}/collection/oolong`} className=' header_drinks_link' >
                <div className='header_drinks_box'> 
                    Oolong Tea
                </div> 
            </Link>
            <Link to={`${homeLink}/collection/blacktea`} className=' header_drinks_link' >
                <div className='header_drinks_box'> 
                    Black Tea
                </div> 
            </Link>
            <Link to={`${homeLink}/collection/greentea`} className=' header_drinks_link' >
                <div className='header_drinks_box'> 
                    Green Tea
                </div> 
            </Link>
            
            <Link to={`${homeLink}/collection/caffeinefree`} className=' header_drinks_link' >
                <div className='header_drinks_box'> 
                    Caffeine Free
                </div> 
            </Link> */}


        </div>
        
    )
    
   
        
                        
                    
}
export default CategoryDropdown