import './menuitem.css'
import {useEffect} from 'react';
import Categories from './Categories'
import AOS from "aos";
import "aos/dist/aos.css";

import BlackTea from './BlackTea'


const Collections = () =>{

    

    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 1000,
          easing: "ease-out-cubic",
        //   delay: 100,
        //   once: true,
        });
      }, []);
    return (
        <div className='collection_wrapper'>
            <div className='collection_img'>
                <div data-aos="zoom-in-left">
                    Love for flavors, <br/>the aroma of a lifetime
                </div>
            
            </div>
            Each cup of tea is made
            by the finest quality of tea leaves and made to order.

            <Categories />
        </div>
    )
}
export default Collections