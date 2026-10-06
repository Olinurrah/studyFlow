import { useState } from "react";

const Country = ({country}) => {
    const [visited, setVisited] =useState(false)
    const handleVisited = ()=> {
        setVisited(!visited)
    }
    return (
        <div>
        
        <div className="card p-3 border">
            <img className="h-45" src={country.flags.flags.png} alt="" />
            <h1>{country.name.common}</h1>
            <h1>{country.name.official}</h1>
            <p>{country.languages.languages.ell}</p>
            <p>{country.region.region}</p>
            <p>Area: {country.area.area} {country.area.area < 30000 ? "small country" : "big country"}</p>
            <div >
                <button className="btn w-1/2 my-3 bg-blue-900" onClick={handleVisited}>{visited ? "Visited" : "Not visited"}</button>
      
                <button className="btn w-1/2 my-3 bg-blue-900">Details</button>
      

            </div>
              </div>
        </div>
    );
};

export default Country;