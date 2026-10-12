// import MinishopMain from "./miniShop/MinishopMain";
// import CoreConcepts from "./reactCoreConcept/CoreConcepts";

import { Suspense } from "react";
import Quote from "./fetchIn4Way/fetch/Quote";

// import Worldview from "./compunent/worldview/Worldview";

const App = () => {
  return (
    <div>
      {/* <Worldview></Worldview> */}
      {/* <CoreConcepts /> */}
      
    {/* <MinishopMain></MinishopMain> */}
    {/* <EcommersPL /> */}
    <Suspense fallback={<h1>loading-----</h1>}>
        <Quote />
    </Suspense>
    
    </div>
  );
};

export default App;