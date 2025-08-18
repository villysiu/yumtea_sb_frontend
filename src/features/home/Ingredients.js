import {imgLink} from "../../app/global";

const Ingredients = () =>{
    const dataArr = [
        ['brown_01', 'Finest Tea Leaves'],
        ['brown_02', 'Premium Pearl'],
        ['brown_03', 'Top Grade Cane Sugar'],
        ['brown_04', 'High Quality Ingredients']
    ]
    return (
        <div className='homepage_section'>
            <div className='homepage_subtitle' >Ingredients </div>
            <div className='homepage_row'>
                
            {
                dataArr.map(([imgName, imgAlt])=>{
                    return (
                        <div key={imgName} className="ingredients_col">
                            {/*<img className="ingredients_img" src={`${homeLink}/homepage/${imgLink}.jpg`} />*/}
                            <img className="ingredients_img"
                                 src={`${imgLink}/homepage/${imgName}.jpg`}
                                 alt={imgAlt} />
                            <div className="ingredients_text">{imgAlt}</div>

                        </div>
                    )
                })
            }
            </div>    
        </div>    
    )
}
   
export default Ingredients