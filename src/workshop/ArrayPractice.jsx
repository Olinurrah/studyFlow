import { useState } from "react";

const ArrayPractice = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState(null)
  const [course, setCourse] = useState("")
   return (
    <div>
      <div className="bg-base-100 p-5 m-5">
        <h2>Name: {name}</h2>
        <h2>Email: {email}</h2>
        <h2>Student Age: {age}</h2>
        <h2>Course: {course}</h2>
      </div>
      {/* input area */}
      <div className="flex flex-col gap-3 p-5 border">

        <input type="text" 
        value={name}
        placeholder="Your name"
        onChange={(e) =>{
          setName(e.target.value)
        }}/>
        <input type="email" 
        value={email}
        placeholder="Your email"
        onChange={(e) =>{
          setEmail(e.target.value)
        }}/>
        <input type="number" 
        value={age}
        placeholder="Your current age"
        onChange={(e) =>{
          setAge(e.target.value)
        }}/>
        
        <select value=" course" onChange={(e) => {
          setCourse(e.target.value)
        }}>
          <option value="Web dev">choose course</option>
          <option value="Web dev">Web dev</option>
          <option value="Softwear dev">Softwear dev</option>
          <option value="Machine dev">System dev</option>
        </select>
      
      </div>
    </div>
  );
};

export default ArrayPractice;


// import { useRef } from "react";

// function ArrayPractice() {
//   const inputRef = useRef(null);

//   function focusInput() {
//     inputRef.current.focus();
//   }

//   return (
//     <>
//       <input ref={inputRef} />

//       <button onClick={focusInput}>
//         Focus Input
//       </button>
//     </>
//   );
// }
// export default ArrayPractice

// import { useRef } from "react";

// const ArrayPractice = () => {
//   const inputRef = useRef();


//   const handleSubmit = () => {
//     alert("Value:"+inputRef.current.value)
//   }
//   return (
//     <div>
//       <input 
//       ref={inputRef}
//       type="text"
//       placeholder="your name"
      
//       />
//       <button onClick={handleSubmit}>Get Value</button>
//     </div>
//   );
// };

// export default ArrayPractice;

// import { useState } from "react";

// const ArrayPractice = () => {
//   const [name, setName] = useState('');
//   return (
//     <div>
//       <div>
//         <h2>Name:{name}</h2>
//       </div>
//       <label>
//         <input type="text"
//         value={name}
//         placeholder="Your Name" 
//         onChange={(e) => {
//           setName(e.target.value)
//         }}/>
//       </label>
      
//     </div>
//   );
// };

// export default ArrayPractice;