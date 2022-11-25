import axios from "axios"
import { useEffect, useState } from "react"


function CategoryList (){

const [categoryList,setCategoryList]= useState([])


useEffect(()=>{
    axios.get('http://fakestoreapi.com/products/categories')
    .then(({data})=>setCategoryList(
        data.map(cat=><div id={cat} key={cat} onClick={()=>console.log(cat)}>{cat}</div>)))
},[])

    return(
        <div>
            <br />
            {categoryList}
        </div>
    )
}

export default CategoryList