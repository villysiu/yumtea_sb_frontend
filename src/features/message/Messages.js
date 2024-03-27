import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Alert } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { removeMessage } from "./messageSlice"
const Message = ({message}) =>{
    const [show, setShow] = useState(false)

    const dispatch = useDispatch()
    useEffect(() => {
        
        setShow(true)
        var timer = setInterval(()=>{
            dispatch(removeMessage())
            setShow(false)

        }, 2000 )
        return function cleanup() {
            clearInterval(timer)
        }

    }, []);
    
    if(show){
        return (
            <Alert className="app_message" variant={message.type} 
            onClose={() => setShow(false)} 
            dismissible
            >
                {message.content}
        
            </Alert>
        )
    }
}
const Messages = () =>{
    const {message_arr} = useSelector(state=>state.message)
    return (
        <div className="message_container">
            {
                message_arr.map((message, idx)=><Message key={idx} message={message} />)
            }
        </div>
    )
}
export default Messages