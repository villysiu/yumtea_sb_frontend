import tea_char from './img/tea_chinese_2.png'
import './home.css'
import {useEffect} from 'react'
import Brand from './Brand'
const HomeBackground = () => {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const el = document.getElementById('home_bg')
            el.classList.add("hide")
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, []);
    return(
        <div id="home_bg">
            <div id="home_brand_container">
                <Brand />
            </div>
        </div>
    )
}
export default HomeBackground