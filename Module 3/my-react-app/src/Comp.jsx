import { useState } from "react";

function Comp() {
  const [count, setCount] = useState(0);
useEffect(()=>{
    if(count%2===0){
        alert("Number is even");
    }
})


  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}

export default Comp;
