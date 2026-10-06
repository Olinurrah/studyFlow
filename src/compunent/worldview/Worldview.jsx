
import { Suspense } from "react";
import Countrise from "./Countrise";

const Worldview = () => {

     const countrisePromise = fetch("https://openapi.programming-hero.com/api/all")
        .then(res => res.json());
        
    return (
        <div>
            <h1 className="text-center text-3xl">Country views</h1>


        <Suspense fallback="loading...">
            <Countrise countrisePromise={countrisePromise}></Countrise>
        </Suspense>
        </div>
    );
};

export default Worldview;