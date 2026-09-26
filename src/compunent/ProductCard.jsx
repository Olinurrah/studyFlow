
const ProductCard = ({product , onAddToCart}) => {
    console.log(product)
    const {name,
            price,
            inStock,
            image} = product;

         
    return (
        <div>
            
            <div className=" p-5  border-2 border-orange-400 rounded-2xl">
                <img className=" m-auto w-50 h-50 rounded-full bg-gray-100" src={image} alt="img" />
                <div className="flex flex-col text-center gap-2 p-3 ">
                    <h2 className="text-3xl font-bold text-orange-500">{name}</h2>
                    <h2 className="text-3xl text-pink-600">${price}</h2>
                    <span className="text-2xl text-green-600 font-bold bg-green-50 p- rounded-2xl">{inStock  ? "In Stock" : "Out of Stock"}</span>
                    {
                        inStock ? (<button className="btn bg-green-600 text-2xl border-0 p-5  text-white  mt-3 hover:bg-orange-400" onClick={() => onAddToCart(product)}>Add to card</button>)
                        :(
                            <button className="btn bg-orange-400 text-2xl border-0 p-5  text-white  mt-3" disabled>Unavailable</button>

                        )

                    }
                
                </div>
                
            </div>
           
        </div>
    );
};

export default ProductCard;