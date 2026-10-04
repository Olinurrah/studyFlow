
const FilterBar = ({inStockOnly, setInStockOnly}) => {

   
    return (
        <div className="border p-5">
            <div className="flex justify-between gap-3">
                <button className="btn border w-1/2 border-amber-50">All Catagory</button>
                {/* <button className="btn border w-1/2 border-amber-50" onClick={handleInStock} >In Stock Products</button> */}
                <div className="btn border w-1/2 border-amber-50">
                    <input className="w-5 h-5"
                          type="checkbox"
                          checked={inStockOnly} 
                
                          onChange={(e) => setInStockOnly(e.target.checked)}/>
                <label >In Stock Only</label>

                </div>
                
       
            </div>
            
        </div>
    );
};

export default FilterBar;