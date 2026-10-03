import { useState } from "react";
import FilterBar from "./compunent/FilterBar";
import ProductList from "./compunent/ProductList";
import SearchBar from "./compunent/SearchBar";
import products from "../e-commers/compunent/products"
const EcommersPL = () => {
    const [search, setSearch] = useState("")
    const [inStockOnly, setInStockOnly] = useState(false);


    const handleSearch = (e) =>{
        setSearch(e.target.value)
    }

   
    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase())


)
const handleInStock = () =>{
    setInStockOnly(products.filter((product) => product.inStock))
}
 
    return (
        <div>
            <nav className="p-5 text-center text-3xl">E-commers ProductsList</nav>

            <SearchBar search={search} handleSearch={handleSearch} />

            
            <FilterBar  inStockOnly={inStockOnly} 
            setInStockOnly={setInStockOnly}
            handleInStock={handleInStock} />
            <ProductList filteredProducts={filteredProducts}/>
            
        </div>
    );
};

export default EcommersPL;