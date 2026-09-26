import { FaShoppingCart } from "react-icons/fa";


const Navbar = ({cartCount}) => {
    // console.log(cartCount)
    return (
        
            <div className="flex justify-between bg-orange-500 w-full">
                <h1 className="p-10 text-5xl font-extrabold">MiniShop</h1>

                <div className="flex m-5 p-6 text-3xl  gap-3 bg-orange-950/20 rounded-full border ">
                    <FaShoppingCart />
                    <h2 className=" font-bold">Shop Card: {cartCount}</h2>
                </div>
            </div>
            
        
    );
};

export default Navbar;