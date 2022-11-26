import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Product(){

  const [product, setProduct]= useState(null)
  const {productId} = useParams()

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then(({data})=>console.log(data))
},[])

useEffect(()=>{
  axios.get(`https://fakestoreapi.com/products/${productId}`)
  .then(({data})=>setProduct(()=>
    <div key={data.id}> 
      <img src={data.image} alt={data.title} className="imagProdact"/>
      <br/>{data.title}
      <br/> <button>add to cart</button>
      <br/>{data.price}
      <br/>{data.description}
    </div>))
},[product])

    return(
<div>
  product
  {productId}
  {product}  
</div>
    )
}

export default Product