import {Link} from "react-router-dom";
import {homeLink} from "../../app/global";
import {Button} from "react-bootstrap";

const BackToMenuButton = () => {
    // const handleClick = () =>{
    //     console.log('clicke bck menu button')
    //     setCartShow(false)
    // }
    return (
        <Link to={`${homeLink}/collection`}
              // onClick={handleClick}
            >
            <Button className='checkout_button' >Return to Menu</Button>
        </Link>
    )
}
export default BackToMenuButton