import SmokySpinner from '../headerNav/SmokySpinner'
import {useEffect} from 'react';
import { homeLink } from "../../app/global"
// import {teacup} from '../home/img/teacup.png'

import HomeBanner from '../home/HomeBanner'
import AboutUs from './AboutUs'
import Ingredients from './Ingredients'
import Footer from '../home/Footer'
import AOS from "aos";
import "aos/dist/aos.css";


const Home = () =>{

      
    return(
        
        <div className="home">
            <HomeBanner />
            <AboutUs />
            <Ingredients />

        </div>
    )
}
export default Home