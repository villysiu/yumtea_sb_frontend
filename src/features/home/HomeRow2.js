// import AOS from "aos";
// import "aos/dist/aos.css";

// import { useEffect } from 'react';

const HomeRow2 = () =>{
    // useEffect(() => {
    //     AOS.init({
    //       disable: "phone",
    //     //   duration: 3000,
    //       easing: "ease-out-cubic",
    //     //   delay: 700,
    //     //   once: true,
    //     });
    //   }, []);

    return (
        <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay="500">
            <img src="http://127.0.0.1:8001/teapicking.jpg"  alt="" className='teapicking_img'/>
 
        </div>
    )
}
export default HomeRow2