import SmokySpinner from '../headerNav/SmokySpinner'
import {useEffect} from 'react';
import { homeLink } from "../../app/global"
// import {teacup} from '../home/img/teacup.png'

import HomeBanner from '../home/HomeBanner'
import HomeRow from '../home/HomeRow'
import HomeRow1 from '../home/HomeRow1'
import HomeRow2 from '../home/HomeRow2'
import HomeRow3 from '../home/HomeRow3'
import Footer from '../home/Footer'
import AOS from "aos";
import "aos/dist/aos.css";


const Home = () =>{

    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 1000,
          easing: "ease-out-cubic",
        //   delay: 100,
        //   once: true,
        });
      }, []);
    return(
        
        <div className="home">
            <HomeBanner />
            <HomeRow1 />
            <HomeRow />
            <HomeRow2 />
            <HomeRow3 />

            <Footer />
            
            


            
        </div>
    )
}
export default Home