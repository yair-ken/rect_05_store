import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CardProduct from "../components/CardProduct"

function Products(){
    
const [category, setCategory]= useState(null)

const {catName} = useParams()

useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/category/${catName}`)
    .then(({data})=>setCategory(
        data.map(v=>
            <CardProduct key={v.id}
            image={v.image} price={v.price} title={v.title}/>)))
},[catName])

return(
    <div>
        {category?(<div><b>product list - {catName}</b>
        <br />{category}
        </div>): (<div> loading</div>)}

    </div>
    )
}

export default Products