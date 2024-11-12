import { homeLink } from "../../app/global"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCategories, getCategories } from "../menuitem/menuitemSlice";
import { Link } from 'react-router-dom';


const CategoryDropdown = ({setShow}) =>{
    const categories = useSelector(state=>state.menuitem.category.array)

    return (
        
            <>
            <Link key='bestseller' to={`${homeLink}/collection`} className=' header_drinks_link' 
            onClick={()=>setShow(false)}>
                <div className='header_drinks_box top'> 
                    Best Sellers
                </div> 
            </Link>
            {
                categories.map((category, idx)=>{    
                    console.log(idx)
                    return (
                        <Link key={category.slug} to={`${homeLink}/collection#${category.slug}`} className=' header_drinks_link' 
                        onClick={()=>setShow(false)}>
                            <div className={`header_drinks_box ${categories.length-1===idx ? 'bottom' : ''}`}> 
                                {category.title}
                            </div> 
                        </Link>
                    )

                })
                
          
        
            }
            </>


        
    )
    
   
        
                        
                    
}
export default CategoryDropdown