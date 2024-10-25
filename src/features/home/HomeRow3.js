
const HomeRow3 = () =>{
    const dataArr = [
        ['brown01', 'Finest Tea Leaves'],
        ['brown02', 'Premium Pearl'],
        ['brown03', 'Top Grade Cane Sugar'],
        ['brown04', 'High Quality Ingredients']
    ]
    let delay = 0
    return (
        <div className='homerow3'>
            <div className='homerow3_text' >Ingredients </div>
            <div className='homerow3_row'>
                
            {
                dataArr.map((data, key)=>{
                    const [img, content] = data
                    delay+=500
                    return (
                        <div key={key} className='homerow3_col' data-aos="zoom-in" data-aos-duration="3000" data-aos-delay={delay} >
                            <div className={`homerow3_img ${img}`}>
                                {content}
                            </div>
                        </div>
                    )
                })
            }
            </div>    
        </div>    
    )
}
   
export default HomeRow3