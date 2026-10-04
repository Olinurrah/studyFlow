
const Navbar = ({handleMen}) => {
    return (
        <div>
            <div className="border flex justify-between p-5">
                <h1 className="text-2xl font-extrabold">Al-rozi</h1>
                <ul className="flex gap-5">
                    <button onClick={handleMen}>Men</button>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Shoes</li>
                    <li>Perfume</li>
                </ul>
                <h1>Cart: 0</h1>
            </div>
            
        </div>
    );
};

export default Navbar;