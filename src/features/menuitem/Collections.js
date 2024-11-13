import './menuitem.css'
import {useEffect} from 'react';
import Categories from './Categories'
import AOS from "aos";
import "aos/dist/aos.css";

import BestSellers from './BestSellers'


const Collections = () =>{

    

    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 2000,
          easing: "ease-out-cubic",
          delay: 300,
        //   once: true,
        });
      }, []);
    return (
        <div className='collection_wrapper'>
            <div className='collection_header_wrapper'>
                <div className='collection_img collection'>
                    <div data-aos="zoom-in-left">
                    <div className="collection_label">
                        Love for flavors, <br/>the aroma of a lifetime
                    </div>
                    </div>
                
                </div>
            </div>
            {/* Each cup of tea is made
            by the finest quality of tea leaves and made to order. */}
            <BestSellers />
            <Categories />
        </div>
    )
}
export default Collections