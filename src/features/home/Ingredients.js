
const Ingredients = () =>{
    const dataArr = [
        ['brown_01', 'Finest Tea Leaves'],
        ['brown_02', 'Premium Pearl'],
        ['brown_03', 'Top Grade Cane Sugar'],
        ['brown_04', 'High Quality Ingredients']
    ]
    let delay = 0
    return (
        <div className='homepage_section'>
            <div className='homepage_subtitle' >Ingredients </div>
            <div className='homepage_row'>
                
            {
                dataArr.map(([imgLink, imgText])=>{
                    // const [img, content] = data
                    delay+=500
                    return (
                        <div key={imgLink} className="ingredients_col">
                        {/*<div key={key} className='homerow3_col' data-aos="zoom-in" data-aos-duration="3000" data-aos-delay={delay} >*/}
                            {/*<div className={`homerow3_img ${img}`}>*/}
                            {/*    {content}*/}
                            {/*</div>*/}
                            <img className="ingredients_img" src={`http://127.0.0.1:8001/homepage/${imgLink}.jpg`} />
                            <div className="ingredients_text">{imgText}</div>
                        </div>
                    )
                })
            }
            </div>    
        </div>    
    )
}
   
export default Ingredients