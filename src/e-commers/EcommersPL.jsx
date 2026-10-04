import { useState } from "react";
import FilterBar from "./compunent/FilterBar";
import ProductList from "./compunent/ProductList";
import SearchBar from "./compunent/SearchBar";
import products from "../e-commers/compunent/products"
import Navbar from "./compunent/Navbar";
const EcommersPL = () => {
    const [search, setSearch] = useState("")
    const [inStockOnly, setInStockOnly] = useState(false);
    const [category, setCategory] = useState("")


    const handleSearch = (e) =>{
        setSearch(e.target.value)
    }
    const handleMen = (e) => {
        setCategory(e.target.value)
    }
    const filteredProducts = products.filter((product) => 
        
        product.name.toLowerCase().includes(search.toLowerCase())
        &&
        (! inStockOnly  || product.inStock )
        &&
        (!category || product.category === "MEN")
    
)
// const  matchCategory =()=>{
//     products.filter((product) => {
//         const 
//     })
// }
    return (
        <div>
            <Navbar noClick={handleMen}  />
            {/* <nav className="p-5 text-center text-3xl">E-commers ProductsList</nav> */}

            <SearchBar search={search}
             handleSearch={handleSearch} />
      
            <FilterBar  inStockOnly={inStockOnly} 
            setInStockOnly={setInStockOnly}/>
            <ProductList filteredProducts={filteredProducts}/>
            
        </div>
    );
};

export default EcommersPL;