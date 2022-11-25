import { Route, Routes } from "react-router-dom"
import CategoryList from "../pages/CategoryList"
import Product from "../pages/Product"
import Products from "../pages/Products"



function Main(){
    return(
<main>
    
    <Routes>
        <Route path="/category" element={<CategoryList/>}/>
        <Route path="/category/:catName" element={<Products/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
    </Routes>
</main>
    )
}

export default Main