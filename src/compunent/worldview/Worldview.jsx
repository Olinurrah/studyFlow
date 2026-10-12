
import { Suspense, useState } from "react";
import Countrise from "./Countrise";
import CountryDetails from "./CountryDetails";

const Worldview = () => {

  
     const countrisePromise = fetch("https://openapi.programming-hero.com/api/all")
        .then(res => res.json());
        
    return (
        <div>
            <h1 className="text-center text-3xl">Country views</h1>
            <CountryDetails></CountryDetails>

        <Suspense fallback="loading...">
            <Countrise countrisePromise={countrisePromise}></Countrise>
        </Suspense>

        </div>
    );
};

export default Worldview;