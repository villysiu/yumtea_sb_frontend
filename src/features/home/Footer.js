import {Linkedin, Github, EnvelopeAtFill} from "react-bootstrap-icons";

const Footer = () =>{
    return(
        <div className='footer_wrapper'>
            <div className="footer">
                <div><b>@2025 Villy Siu</b> </div>
                <div className="mt-3">
                    <a href="mailto:villysiu@gmail.com" className="me-3" target="_blank" rel="noreferrer"><EnvelopeAtFill size={30} color="white" /></a>
                    <a href="https://www.linkedin.com/in/villy-siu-384b81132/" className="me-3"  target="_blank" rel="noreferrer"><Linkedin size={30} color="white" /></a>
                    <a href="https://github.com/villysiu/yum_tea_sb"  target="_blank" rel="noreferrer"><Github size={30} color="white" /></a>
                </div>
            </div>


        </div>
)
}
export default Footer