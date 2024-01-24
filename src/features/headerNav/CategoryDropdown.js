import { homeLink } from "../../app/global"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCategories } from "../wine/wineSlice";
import { Link } from 'react-router-dom';


const CategoryDropdown = () =>{
    const dispatch=useDispatch();
    let {category_arr, status} = useSelector(state => state.wine.category)
    useEffect(()=>{
        if(status === 'idle'){
            dispatch(fetchCategories())
        }
    }, [status, dispatch])


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
                <Link to={`${homeLink}/wines`} className='single_cat_text solid_link'>
                    All
                </Link>
            </div>

            {
                category_arr.map(category=>{
                    return (
                        <div  >
                            <Link to={`${homeLink}/wines/cat/${category.pk}`} 
                            key={category.pk} className='single_cat_text solid_link'
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