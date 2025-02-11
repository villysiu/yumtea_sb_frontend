import './menuitem.css'
import {useEffect} from 'react';
import Categories from './Categories'
import AOS from "aos";
import "aos/dist/aos.css";

import BestSellers from './BestSellers'
import {homeLink} from "../../app/global";


const Collections = () =>{

    return (
        <div className='collection_wrapper'>
            <div className='collection_header_wrapper'>

                <img src={`${homeLink}/category/12typestea.jpg`} className="collection_img" />
                <div className='collection_text'>
                    Each cup of tea is made<br />
                    by the finest quality of tea leaves and made to order.
                </div>
            </div>

            <BestSellers/>
            <Categories/>
        </div>
    )
}
export default Collections