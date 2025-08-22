
import { useSelector } from "react-redux"
import Message from "./Message";

const Messages = () =>{

    const {messages} = useSelector(state=>state.message)

    return(
        <>
        {  messages.map((m, idx) => <Message key={idx} message ={m} />)  }
        </>
    )
}

export default Messages