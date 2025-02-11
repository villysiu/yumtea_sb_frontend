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
                  onClick={() => setShow(false)}>
                <div className='header_drinks_box top'>
                    Best Sellers
                </div>
            </Link>
            {
                categories.map((category) => {

                    return (
                        <Link key={category.id} to={`${homeLink}/collection#${category.id}`}
                              className=' header_drinks_link'
                              onClick={() => setShow(false)}>
                            <div className="header_drinks_box">
                                {category.title}
                            </div>
                        </Link>
                    )

                })
            }
            <div className='header_drinks_box bottom'>

            </div>
        </>


    )


}
export default CategoryDropdown