import products from "../data/products";
import ProductCard from "./ProductCard";

const pro = "hello"

const ProductsList = () => {
    return (
        <div>
            <div className="m-5 grid grid-cols-3 gap-3">
                {
                    products.map((product) => (
                        <ProductCard
                        key={product.id}
                        product={product}
                        />
                                             
                    ))
                }
                 
                {/* <ProductCard  pro={pro}/>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard /> */}
            </div>
            
        </div>
    );
};

export default ProductsList;