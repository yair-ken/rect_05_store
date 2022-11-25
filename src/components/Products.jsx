import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Products(){
    
const [category, setCategory]= useState(null)

const {catName} = useParams()


useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/category/${catName}`)
    .then(({data})=>setCategory(data.map(v=>
    <div key={v.id}> 
        <img src={v.image} alt={v.title}/>
        <br/>{v.rating.rate}
        <br/> <button>add to cart</button>
        <br/>{v.title}

    </div>)))
},[catName])
// תמונה- מחיר- כפתור להוסיף לעגלה: אולי בקומפננטה נפרדת- פרטים
// id- מפתח image-תמונה title-פרטים rating.rate- מחיר
return(
    <div>
        {category?(<div><b>product list - {catName}</b>
        <br />{category}
        </div>): (<div> loading</div>)}

    </div>
    )
}

export default Products