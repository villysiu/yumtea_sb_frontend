import Title from "../headerNav/Title";
import Footer from "./Footer";

const LoadingPage = () =>{
    return (
        <div className="loading_page">
            <div className='header_full_wrapper'>
                <Title/>
            </div>
            <div className=" loading_page_spinner">
                {/*<Spinner animation="border" className="spinner"/>*/}
                <img src="/logo/shana-tova.gif"/>
                <h2>Loading ...</h2>
            </div>
            <Footer/>
        </div>
    )
}
export default LoadingPage