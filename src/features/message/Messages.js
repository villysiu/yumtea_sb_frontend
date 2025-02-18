import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Alert } from "react-bootstrap"
import { useDispatch } from "react-redux"
import {clearCartMessage, removeMessage} from "./messageSlice"
import Message from "./Message";
const Messages = () =>{

    const {messages} = useSelector(state=>state.message)

    return(
        <>
        {  messages.map(m => <Message message ={m} />)  }
        </>
    )
}

export default Messages