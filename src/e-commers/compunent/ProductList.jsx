// import products from "../data/products";
import Card from "./Card";



const ProductList = ({filteredProducts}) => {
    return (
        <div className="grid grid-cols-3 gap-5 m-5">
            {
                filteredProducts.map((product) => <Card product={product} />)
            }
        </div>
    );
};

export default ProductList;