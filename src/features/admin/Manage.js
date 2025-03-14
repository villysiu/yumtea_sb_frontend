import {Button} from "react-bootstrap";
import {logoutAdmin} from "./adminSlice";
import {useDispatch} from "react-redux";
import {logoutUser} from "../user/userSlice";
import AdminOffcanvas from "./AdminOffcanvas";
import ManageMenuitem from "./ManageMenuitem"
import {useState} from "react";
import ManageCategory from "./ManageCategory";
const Manage = () =>{
    const dispatch = useDispatch()
    const [choice, setChoice] = useState("Home")

    const switchPage = () => {

        switch (choice) {
            case "Menuitem":
                return <ManageMenuitem choice={choice}/>

            case 'Category':
                return <ManageCategory choice={choice}/>


            default:
                return "Notjhingnnkjjf"
        }
    }
    console.log(choice)
    return (
        <div className="admin_wrapper">
            <div className="admin_left">
                <AdminOffcanvas choice={choice} setChoice={setChoice} />
            </div>
            <div className="admin_right">
                {
                   switchPage()
                 }

            </div>
        </div>
    )
}
export default Manage