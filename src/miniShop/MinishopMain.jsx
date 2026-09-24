import Button from "../compunent/Button";
import Footer from "../compunent/Footer";
import Navbar from "../compunent/Navbar";
import ProductsList from "../compunent/ProductsList";
import SearchBar from "../compunent/SearchBar";

const MinishopMain = () => {
    return (
        <div>
            <div className="bg-white">
                <Navbar />
                <SearchBar />
                <Button />
                <ProductsList />
                <Footer />
            </div>
            
        </div>
    );
};

export default MinishopMain;