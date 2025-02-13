import {useSelector} from "react-redux"

import LogoutButton from "./LogoutButton";

const Account = () => {

    const {currentUser} = useSelector(state => state.user );
    console.log(currentUser);

    return (
        <>
            <div className='pb-2' ><h3>{currentUser.email}'s Account</h3></div>
            <div>your Account profile</div>
            <p> name --- edit</p><p>email --- cannot be changed???</p><p>change passwotd</p>
            <div> make a left panel for choices</div>
            <div>previous orders</div>
            <div>upcoming orders</div>

            <LogoutButton />
        </>
    )
}
export default Account