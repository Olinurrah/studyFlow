// const product = {
//   id: 1,
//   name: "Premium T-Shirt",
//   category: "Men",
//   price: 850,
//   image: "/src/data/productImg/shirt.jpg",
//   inStock: true
// }
const Card = ({product}) => {
    return (
        <div className="border  rounded-xl text-center ">
            
            <img className="border bg-amber-100 w-45 h-50 m-7"  alt="" />
           <div className="p-5">
             <h2 className="text-2xl">{product.name}</h2>
            <div className="flex justify-between px-4">
                
                <h2 className="text-2xl">{product.category}</h2>
                <h3 className="text-2xl">${product.price}</h3>
            </div>
            
            <p className="btn text-center" style={{color: product.inStock ? "green" : "red"}}>{product.inStock ? "Available"  : "Out of Stock"}</p>
            <button className="btn w-full bg-blue-300">Add to cart</button>
           </div>
        </div>
    );
};

export default Card;