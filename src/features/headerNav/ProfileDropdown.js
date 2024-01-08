import { PersonCircle } from 'react-bootstrap-icons'
import { NavDropdown, Image } from 'react-bootstrap';
import Logout from '../user/session/Logout';
import { backendAPI } from '../../app/helper';
import Avatar from '../user/profile/Avatar';
import { Link } from 'react-router-dom';
const ProfileDropdown = ({currUser}) =>{
    
    // const title = (<PersonCircle className="circle_button" /><div>Profile</div>);
    const title = (
        <div className="flex_row_center">
            {/* <Image className=" avatar circle_button" src={`${backendAPI}/${currUser.avatar}`} /> */}
            <div className="circle_button">
            <Avatar avatar={currUser.avatar} name={currUser.name} />
            </div>
            <div className='d-none d-lg-block'>Profile</div>
        </div> 
    )
    return (
      <>
      <NavDropdown  title={title} className="post_header_l">
          <NavDropdown.Item 
          href={`#/users/${currUser.id}`}
        >
              {/* <Link className="link_black" to={`/users/${currUser.id}`}> */}
                Profile
            {/* </Link> */}
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <Logout />
        
      </NavDropdown>
      </>
    )
}
export default ProfileDropdown