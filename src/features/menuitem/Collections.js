import './menuitem.css'
import {useEffect} from 'react';
import Categories from './Categories'
import AOS from "aos";
import "aos/dist/aos.css";

import BestSellers from './BestSellers'
import {useSelector} from "react-redux";

const Collections = () =>{

    return (
        <div className='collection_wrapper'>


            <BestSellers/>
            <Categories/>
        </div>
    )
}
export default Collections