import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

const SingleWine = () =>{
    let {itemId} = useParams()

    let {status, wine_arr} = useSelector(state => {
        console.log(state.wine.wines)
        return state.wine.wines
    })

    const singleWine = wine_arr.filter(wine => wine.pk === parseInt(itemId))

    if(singleWine.length===0)
        return( <div>cannot find wine, not existed?</div>)

    return(
        <>
            {singleWine[0].title}
        </>
    )
}
export default SingleWine