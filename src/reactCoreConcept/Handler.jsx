import { Suspense } from "react";
import Users from "./Users";
import Posts from "./Posts";



//  const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());

// const fetchUsers = async() => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     return res.json();

// }

const fetchUsers = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
}
const fetchposts = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
}

const Handler = () => {

    // const loadData = async() => {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const data = res.json();
    //     return data
    // }
    // console.log(loadData)

    // const promisePosts = fetchPosts()
   
    return (
        <div>
            <Suspense fallback="loadng....">
                <Users fetchUsers={fetchUsers()}></Users>
            </Suspense>
            <Suspense fallback="loadng...">
                <Posts fetchposts={fetchposts()}></Posts>
            </Suspense>
          
        </div>
    );
};

export default Handler;