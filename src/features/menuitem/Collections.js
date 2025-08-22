import './menuitem.css'
import Categories from './Categories'
import "aos/dist/aos.css";

import BestSellers from './BestSellers'


const Collections = () =>{

    return (
        <div className='collection_wrapper'>


            <BestSellers/>
            <Categories/>
        </div>
    )
}
export default Collections