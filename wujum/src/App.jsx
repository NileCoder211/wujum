import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
  
      <div>
      <h1>This is my count: {count}</h1>
      
        <button onClick={() => setCount((count) => count + 1)}>Increment  </button>
        <button onClick={() => setCount((count) => count - 1)}>Decrement  </button>
        <button onClick={() => setCount((count) => (0))}>Reset </button>
</div>
  
  );
}

export default Counter;
