
const SearchBar = ({search, handleSearch}) => {
    return (
        <div className="w-full  h-20 border">
            <div className='flex p-5 text-center'>
                <h1 className="text-2xl">Search:</h1>
                <input 
                className='px-10'
                type="text" placeholder='Search products...'
                 value={search}
                 onChange={handleSearch} />
            </div>
        </div>
    );
};

export default SearchBar;