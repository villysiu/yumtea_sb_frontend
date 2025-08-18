import Title from "../headerNav/Title";
import Footer from "./Footer";
import Messages from "../message/Messages";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setMessage} from "../message/messageSlice";
import {imgLink} from "../../app/global";
const LoadingPage = () =>{


    return (
        <div className="loading_page">
            <div className='header_full_wrapper'>
                <Title/>
            </div>
            <Messages />
            <div className="loading_page_spinner">
                {/*<Spinner animation="border" className="spinner"/>*/}
                <img src={`${imgLink}/homepage/hotcup.gif`} alt='loading' className='hotcup'/>
                <h2>Loading ...</h2>
            </div>
            <Footer/>
        </div>
    )
}
export default LoadingPage