import { useState } from "react";
import Button from "../compunent/Button";
import Footer from "../compunent/Footer";
import Imageveiw from "../compunent/Imageveiw";
import Navbar from "../compunent/Navbar";
import ProductsList from "../compunent/ProductsList";
import SearchBar from "../compunent/SearchBar";
import products from "../data/products";

const MinishopMain = () => {


    const [searchText, setSearchText] = useState("");
     const [filter, setFilter] = useState("all");
    const [cart, setCart] = useState([]);
    function handleAddToCart(product){
        setCart([...cart, product])
    }

     // Filter products
  const filteredProducts = products.filter((product) => {

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchText.toLowerCase()
    );

    const matchesFilter =
      filter === "all" ||
      (filter === "stoc" && product.inStock);

    return matchesSearch && matchesFilter;
  });

    return (
        <div>
            <div className="bg-white">
                <Navbar cartCount = {cart.length} />
                <SearchBar 
                searchText={searchText}
                onSearchChange={setSearchText}/>
                <Button 
                filter={filter}
                onFilterChange={setFilter}/>
                <ProductsList
                products={filteredProducts}
                onAddToCart={handleAddToCart} />
                <Footer />
                <Imageveiw />
            </div>
            
        </div>
    );
};

export default MinishopMain;