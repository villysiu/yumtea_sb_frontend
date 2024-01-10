import { useEffect } from "react";

const AddedOverlay = ({successMessage, setSuccessMessage}) =>{
    
    useEffect(() => {
        var timer = setInterval(()=>{
            setSuccessMessage("")
        }, 5000 )
        return function cleanup() {
            clearInterval(timer)
        }
    }, [setSuccessMessage]);
    
    return(
        <div className='added_message' >
            {successMessage}
        </div>
    )
}
export default AddedOverlay