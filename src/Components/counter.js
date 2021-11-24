import React from "react";

import { useCount } from "../context/count.js";

function Counter() {
    const { count, setCount } = useCount();
  return (
    <div>
      <span>
        <b>Counter: </b>
        {count}
      </span>
      <br />
      <button onClick={ () => setCount(count + 1)}>Aumentar</button>
    </div>
  );
}

export default Counter;
