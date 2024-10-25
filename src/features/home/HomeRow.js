
const HomeRow = () =>{

    

    return (
        <div className='home_row' data-aos="slide-up" data-aos-delay="100" data-aos-duration="1000">
            <div className='home_col'>
                <img src={`http://127.0.0.1:8001/teacup_color.png`} alt='' className='square_icon'/>
                <h3>Our Tea</h3>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Purus dui feugiat interdum bibendum tellus, fermentum gravida nisi. 
                
            </div>

            <div className='home_col'>
                <img src={`http://127.0.0.1:8001/no-pesticides.png`} alt='' className='square_icon'/>
                
                    <h3>Ethically Sourced </h3>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Purus dui feugiat interdum bibendum tellus, fermentum gravida nisi. 

            
            </div>
            <div class="home_col" >
                <img src={`http://127.0.0.1:8001/leaf.png`} alt='' className='square_icon'/>
                
                <h3>Genuine Origin</h3>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Purus dui feugiat interdum bibendum tellus, fermentum gravida nisi. 
                
            </div>

        </div>
    )
}
export default HomeRow