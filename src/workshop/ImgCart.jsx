import { useState } from 'react';

export default function FeedbackForm() {
//   const [name, setName] = useState('');

  function handleClick() {

    
      const name =  prompt('What is your name?');
    alert(`Hello, ${name}!`);
  }
  const [number,setNumber] = useState(0);
function handleaaa1(){
    setNumber(number + 1)
  
}
  return (
    <>
    <button onClick={handleClick}>
      Greet
    </button>
    <h1>{number}</h1>
    <button onClick={handleaaa1}>aaa1</button>

    </>
    
  );
}
