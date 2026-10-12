// import { useEffect, useState } from "react";
 import User from "../User";
// import axios from "axios";
import useSWR  from "swr";

// const fetcher = (...args) => {
//     const res = fetch(...args);
//     const data = res.json;
//     return data
// }
const fetcher =  async (...args) => {
    const res = await fetch(...args);
    const data = await res.json();
    return data
}
const Quote = () => {

const {data, error} = useSWR("https://jsonplaceholder.typicode.com/users", fetcher, {
    suspense: true
});

if(error){
    return <h1>there are an error</h1>
};
console.log(data)
// const [quote, setQuote] =useState();


    // useEffect(() => {
    //     const fetchQuote = async() => {
    //         const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        
    //     //   const data = await res.json();
    //     setQuote(res.data)
    //     }
      
    //      fetchQuote()


    // },[])
    return (
        <div>
        <h1>fetch data way 1</h1>
        <div>hello{data?.[0].name}</div>
       {/* <h1>{quote?.[1].name}</h1> */}
       {/* <User quote={quote}></User> */}
       {
        data?.map(user => <User user={user} key={user.id}></User>)
       }
        </div>
    );
};

export default Quote;