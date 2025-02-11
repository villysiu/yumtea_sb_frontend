
const AboutUs = () => {


    return (
        <>
            <div className='homepage_section'>
                <div className='homepage_subtitle'>About Us</div>
                <img src="http://127.0.0.1:8001/homepage/TeaPicking.jpg" alt="tea_picking" className="teapicking_img"/>
                <div className='homepage_content'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit
                    anim id est laborum.
                </div>
            </div>
            <div className='homepage_section'>
                <div className='home_row' >
                    <div className='home_col'>
                        <img src={`http://127.0.0.1:8001/homepage/teacup_color.png`} alt='' className='square_icon'/>
                        <h3>Our Tea</h3>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Purus dui feugiat interdum bibendum tellus,
                        fermentum
                        gravida nisi.

                    </div>

                    <div className='home_col'>
                        <img src={`http://127.0.0.1:8001/homepage/no-pesticides.png`} alt='' className='square_icon'/>

                        <h3>Ethically Sourced </h3>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Purus dui feugiat interdum bibendum tellus,
                        fermentum
                        gravida nisi.


                    </div>
                    <div className="home_col">
                        <img src={`http://127.0.0.1:8001/homepage/leaf.png`} alt='' className='square_icon'/>

                        <h3>Genuine Origin</h3>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Purus dui feugiat interdum bibendum tellus,
                        fermentum
                        gravida nisi.

                    </div>

                </div>
            </div>
            </>
            )
            }
            export default AboutUs