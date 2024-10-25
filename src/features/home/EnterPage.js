import './home.css'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Brand from './Brand'
import MenuitemApp from '../menuitem/MenuitemApp'
import ResetApp from './ResetApp'
import Spinner from 'react-bootstrap/Spinner';
import { Outlet } from 'react-router-dom';

const EnterPage = () =>{
    console.log("in Enter Page")

    const [show, setShow] = useState(true);
    const [spinner, setSpinner] = useState(false);

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
        }, 7000);
        return () => clearTimeout(www);
    }, []);

    // if(!show)
    //     return 
    return(
        <>
            
            <MenuitemApp setSpinner={setSpinner}/>
            <ResetApp />
            <Outlet />
            { show && 
            <div id="home_bg">
                <div id="home_brand_container">
                    <Brand />
                </div>
                <div style={{'height': '4rem'}}>
                    {spinner && <Spinner animation="border" className="spinner"/> }
                </div>
            </div>  
            }
            
        </>
    )
    
}
export default EnterPage