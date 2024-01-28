import { useEffect } from "react";

const AddedOverlay = ({message, setMessage}) =>{
    
    useEffect(() => {
        var timer = setInterval(()=>{
            setMessage("")
        }, 5000 )
        return function cleanup() {
            clearInterval(timer)
        }
    }, [setMessage]);
    
    return(
        <div className='added_message' >
            {message}
        </div>
    )
}
export default AddedOverlay