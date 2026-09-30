import { useState } from "react";

const MovingDot = () => {

  const [user, setUser] = useState({
    name: "Olinur",
    age: 22,
    city: "sylhet",
    adderss: {
      village: "patkow",
      union:"tatroe"
    }
  })
  return (
    <div className="">
      <h2>Name:{user.name}</h2>
      <h2>Age: {user.age}</h2>
      <p>City: {user.city}</p>
      <p>Address: village:{user.adderss.village}</p>
      <p>Address: village:{user.adderss.union}</p>


<input
value={user.name}
onChange={(e) =>
  setUser({
    ...user,
    name: e.target.value
  })
} />
<input
value={user.age}
onChange={(e) =>
  setUser({
    ...user,
  age: e.target.value
  })
} />
<input
value={user.name}
onChange={(e) =>
  setUser({
    ...user,
    city: e.target.value
  })
} />
<input
placeholder="village"
value={user.village}
onChange={(e) =>
  setUser({
    ...user,
    adderss:{
      ...user.adderss,
      village: e.target.value
    }
  })
} />
<input
placeholder="union"
value={user.village}
onChange={(e) =>
  setUser({
    ...user,
    adderss:{
      ...user.adderss,
      union: e.target.value
    }
  })
} />
    </div>
  );
};

export default MovingDot;