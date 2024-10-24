import tea_char from './img/tea_chinese_2.png'
import './home.css'
import { useState, useEffect } from 'react'
import Brand from './Brand'
const HomeBackground = () => {
    const [show, setShow] = useState(true);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const el = document.getElementById('home_bg')
            el.classList.add("hide")
            
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        const www = setTimeout(() => {
            
            setShow(false)
        }, 2000);
        return () => clearTimeout(www);
    }, []);
    if(!show)
        return null
    return(
        <div id="home_bg">
            <div id="home_brand_container">
                <Brand />
            </div>
        </div>
    )
}
export default HomeBackground