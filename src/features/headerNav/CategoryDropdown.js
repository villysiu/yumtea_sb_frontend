import { homeLink } from "../../app/global"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../wine/wineSlice";
import { NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useRef } from "react";

const CategoryDropdown = ({show, closeMDDropdown, toggleShow}) =>{
    const dispatch=useDispatch();
    let {category_arr, status} = useSelector(state => state.wine.category)
    useEffect(()=>{
        if(status === 'idle'){
            dispatch(fetchCategories())
        }
    }, [status, dispatch])


    const ref = useRef();

    useEffect(() => {
      const handleClickOutside = (e) => {
        if (!ref.current.contains(e.target)) {
            toggleShow( window.innerWidth < 991.98 ? true : false )
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
    }, [ref]);


    const handleMouseEnterCategories = (e) =>{
        toggleShow(true)
    }
    const handleClick = (e) =>{
        if(window.innerWidth < 991.98)
            closeMDDropdown()
        else
            toggleShow(false)
    }
    const Title = <div className='header_text'>Wines</div>
    return (
        <NavDropdown title={Title} ref={ref} id="navbarScrollingDropdown" key="nav"
            show={show} 
            onMouseEnter={handleMouseEnterCategories} 
            // className='header_text'
        >
            <Link to={`${homeLink}/wines`} className='dropdown-item' 
            onClick={handleClick}>
                All
            </Link>
            {
                category_arr.map(category=>{
                    return (
                        <Link to={`${homeLink}/wines/cat/${category.pk}`} key={category.pk} className='dropdown-item' 
                            onClick={handleClick}
                        >{category.title}</Link>
                    )
                })
            }
        </NavDropdown>
    
    )
}
export default CategoryDropdown