
const SearchBar = ({searchText,onSearchChange}) => {
    return (
        <div >
            <search className="w-full p-4">
                <input className="m- border-4 border-base-500 rounded-2xl p-5 w-full
                 bg-white text-orange-400 text-2xl" type="text" placeholder="Search products..."
                 value={searchText}
                 onChange={(e) => 
                    onSearchChange(e.target.value)
                 }/>
            </search>
        </div>
    );
};

export default SearchBar;