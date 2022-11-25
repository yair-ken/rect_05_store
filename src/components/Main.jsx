import { Route, Routes } from "react-router-dom"
import CategoryList from "./CategoryList"
import Product from "./Product"
import Products from "./Products"



function Main(){
    return(
<main>
    
    <Routes>
        <Route path="/category" element={<CategoryList/>}/>
        <Route path="/category/:catName" element={<Products/>}/>
        <Route path="/Product/:ProductId" element={<Product/>}/>
    </Routes>
</main>
    )
}

export default Main