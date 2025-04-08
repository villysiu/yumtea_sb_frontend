import {homeLink} from "../../app/global";

const IntroBg = () =>{
    
    return (
        <div className='teapouring_wrapper'>
            <img src={`${homeLink}/homepage/pouring_tea.jpg`} alt="tea pouring" className='teapouring_img'/>
            <div id='teapouring_animated'>
                <p>
                    More than just a cup of tea;
                    <br/>
                    it’s a journey of taste, artistry, and purpose.
                </p>
            </div>

        </div>
    )
}
export default IntroBg