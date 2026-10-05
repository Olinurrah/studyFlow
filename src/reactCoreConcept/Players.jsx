import { useState } from "react";

const Players = () => {

const [visibility, setVisibility] = useState(false)

const handlVisibility = () => {
    setVisibility(!visibility)
}
    return (
        <div>
            <h1>{visibility && "hello, how are you?"}</h1>
            <button onClick={handlVisibility}>{visibility ? "show" : "hite"}</button>




        </div>
    );
};

export default Players;










// import { useEffect, useState } from "react";


// const Players = () => {

//     const [players, setPlayers] =useState([]);

//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/users")
        
//         .then(res => res.json())
//         .then(data => setPlayers(data))
//     },[])
//     return (
//         <div>
//             <h3>players:{players.length}</h3>
//         </div>
//     );
// };

// export default Players;