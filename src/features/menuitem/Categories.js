import SingleCategory from './SingleCategory'
import {useSelector} from 'react-redux'
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
const Categories = () =>{
    const location = useLocation();
    console.log(location)
    
    const categories = useSelector(state=>state.menuitem.category.array)
    // console.log('in Categories')

    // useLayoutEffect(() => {
    //     if (location.hash) {
    //       const element = document.getElementById(location.hash.slice(1));
    //       if (element) {
    //         element.scrollIntoView();
    //       }
    //     }
    //   }, [location.hash]);

    return (
        <>
        {
            categories.map(category=><SingleCategory key={category.id} category={category} />)
        }
        </>
    )
}
export default Categories