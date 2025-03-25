import {useEffect, useState} from "react";
import {removeMessage} from "./messageSlice";
import {Alert} from "react-bootstrap";
import {useDispatch} from "react-redux";

const Message =({message}) =>{
    const [show, setShow] = useState(true);
    const dispatch = useDispatch();


    useEffect(() => {

        // setShow(true)
        let timer = setInterval(()=>{
            dispatch(removeMessage())
            setShow(false)

        }, 8000 )
        return function cleanup() {
            clearInterval(timer)
        }

    }, [dispatch]);
    return(
        <>{
            show &&
            <Alert className="app_message" variant={message.type}
                   onClose={() => setShow(false)}
                   dismissible
            >
                {message.content}

            </Alert>
        }
        </>
    )
}
export default Message