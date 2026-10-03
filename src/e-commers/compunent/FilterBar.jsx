
const FilterBar = ({ handleInStock}) => {

   
    return (
        <div className="border p-5">
            <div className="flex justify-between gap-3">
                <button className="btn border w-1/2 border-amber-50">All Catagory</button>
                <button className="btn border w-1/2 border-amber-50" onClick={handleInStock} >In Stock Products</button>
                {/* <input className="btn border w-1/2 border-amber-50"
                 type="checkbox"
                checked={inStockOnly} 
                
                onChange={(e) => setInStockOnly(e.target.checked)}/>
                <label >In Stock Only</label>
        */}
            </div>
            
        </div>
    );
};

export default FilterBar;