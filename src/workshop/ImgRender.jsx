import { useState } from "react";
import ImgCart from "./ImgCart";
import MovingDot from "./MovingDot";

//  let firstName = '';
//   let lastName = '';





const ImgRender = () => {

    const [firstName, setFirstNsme] = useState('');
    const [lastName, setLastName] = useState('');
    
      function handleFirstNameChange(e) {
    setFirstNsme(e.target.value)
  }

    function handleLastNameChange(e) {
    setLastName(e.target.value)
  }

    function handleReset() {
       setFirstNsme(' ');
       setLastName(' ');
  }
    return (
        <div>
            <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  <ImgCart />
  <MovingDot />
        </div>
    );
};

export default ImgRender;