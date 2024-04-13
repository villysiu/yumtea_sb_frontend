import { Button } from "react-bootstrap"
import { useState, useEffect } from "react"
import { Modal } from "react-bootstrap"
import CustomizeContainer from "./CustomizeContainer"
// import { useNavigate, useLocation } from "react-router-dom"
// import { useSelector, useDispatch } from "react-redux"

const CustomizeButton = ({menuitem}) =>{
    
    // const [click, setClick] = useState(false)
    const [show, setShow] = useState(false)
    console.log('customisz nbutton')
    
    // const current_user = useSelector(state => state.user.current_user)
    // const click = useSelector(state=>state.menuitem.click)

    // console.log(click)
    // const navigate = useNavigate()
    // const dispatch = useDispatch()
    // const location = useLocation()

    // useEffect(()=>{
        
    //     if(click && click.menuitem_id === menuitem.pk){
    //         if(current_user.username === null){
    //             navigate("/user/signin", { state: { path: location.pathname } })
    //         }
    //         else{
    //             console.log("dispatch...")
    //             console.log(menuitem.pk)
    //         }
    //     }
    // }, [click, current_user.username])


    return(
        <>
        
            <Modal show={show} onHide={()=>setShow(false)}>
                <CustomizeContainer menuitem={menuitem} setShow={setShow} 

                /> 
            </Modal>
        
        <Button className='gold_button' onClick={()=>setShow(true)}>Customize</Button>
        </>
    )
}
export default CustomizeButton