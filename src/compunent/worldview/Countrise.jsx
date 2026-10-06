import { use } from "react";
import Country from "./Country";

const Countrise = ({countrisePromise}) => {
    const countriseData = use(countrisePromise);
     const countries = countriseData.countries;
    console.log(countries)
    return (
        <div className="grid grid-cols-3 gap-2">
            <h1>Country: {countries.length}</h1>
            {
                countries.map((country) => <Country key={country.id} country={country}></Country>)
            }
         
        </div>
    );
};

export default Countrise;