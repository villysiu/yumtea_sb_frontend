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

        }, 5000 )
        return function cleanup() {
            clearInterval(timer)
        }

    }, []);
    
    if(show){
        return (
            <Alert className="message" variant={message.type} onClose={() => setShow(false)} dismissible>
                {message.content}
            </Alert>
        )
    }
}
const Messages = () =>{
    const {message_arr} = useSelector(state=>state.message)

    return (
        <>
            {
                message_arr.map(message=><Message message={message} />)
            }
        </>
    )
}
export default Messages