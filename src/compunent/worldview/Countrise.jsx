import { use, useState } from "react";
import Country from "./Country";
import CountryDetails from "./CountryDetails";

const Countrise = ({countrisePromise}) => {
    // show details about country
    const [showDetailsCountry, setShowDetailsCountry] = useState([])
    const handleDetailsCountry = (country) =>{
        setShowDetailsCountry(country);
        console.log("clclc",country)

    }
// state lift up , objects manipulation and object list out
      const [visitedCountries, setVisitedCountries] =useState([])

    const handlevisitedCountries = (country) => {
        // setVisitedCountries(visitedCountries + 1)
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)
        console.log("clicked",country)
        
    }
    const countriseData = use(countrisePromise);
     const countries = countriseData.countries;
    // console.log(countries)
    return (
        <>

          <h1>Country: {countries.length}</h1>
            <h2>total visited country: {visitedCountries.length}</h2>
            {
                visitedCountries.map((visitedCountry) => <h3>{visitedCountry.name.common}</h3>)
            }
         <div className="grid grid-cols-3 gap-2">
            {
                countries.map((country) =>
                     <Country key={country.ccn3.ccn3}
                 country={country}
                 handlevisitedCountries={handlevisitedCountries}

                //  show details country
                showDetailsCountry={showDetailsCountry}
                handleDetailsCountry={handleDetailsCountry}

                 ></Country>)
            }
         {/* <CountryDetails handlevisitedCountries={handlevisitedCountries}></CountryDetails> */}
        </div>
        </>
       
    );
};

export default Countrise;