import { homeLink } from "../../app/global"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCategories } from "../menuitem/menuitemSlice";
import { Link } from 'react-router-dom';


const CategoryDropdown = () =>{
    const dispatch=useDispatch();
    let category = useSelector(state => state.menuitem.category)
    useEffect(()=>{
        if(category.status === 'idle'){
            dispatch(fetchCategories())
        }
    }, [category.status, dispatch])


    const [show, setShow] = useState(false)
    const handleMouseenter = e =>{
        setShow(true)
    }
    const handleMouseleave = e =>{
        setShow(false)
    }

    const CategoryList = () =>{
        return (
            <>
            <div>
                <Link to={`${homeLink}/menuitems`} className='single_cat_text solid_link'>
                    All
                </Link>
            </div>

            {
                category.array.map(category=>{
                    return (
                        <div key={category.pk}  >
                            <Link to={`${homeLink}/menuitems/cat/${category.pk}`} 
                            className='single_cat_text solid_link'
                            >
                            {category.title}</Link>
                        </div>
                    )
                })
            }   
        </>
    )
    
    }
    

    return (
        <>
        {/* min-width: 992px */}
        <div className='d-none d-lg-block'>
            <div onMouseEnter={handleMouseenter}
                onMouseLeave={handleMouseleave}
                className='collapsable_item_link header_text header_category'
            >
                Wines
            
            {show && 
                    <div className='header_category_dropdown_wrapper'>
                        <div className='header_category_dropdown mt-3 pt-3'>
                            <CategoryList />
                        </div>
                    </div>
            }
            </div>
        </div>

        {/* max-width: 992px */}
        <div className='d-lg-none'>
            <div className='collapsable_item_link header_text' style={{textAlign: "center"}}>
                Wines
                <div className='header_category_dropdown'>
                <CategoryList />
                </div>
            </div>
        </div>

        </>
    
    )
}
export default CategoryDropdown