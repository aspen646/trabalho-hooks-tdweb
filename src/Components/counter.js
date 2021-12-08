import React from "react";

import { useCount } from "../context/count.js";
import Button from '@mui/material/Button';

function Counter() {
    const { count, setCount } = useCount();
  return (
    <div>
      <span>
        <b>Counter: </b>
        {count}
      </span>
      <br />
      <Button onClick={ () => setCount(count + 1)} variant="contained" color="success">Aumentar</Button>
    </div>
  );
}

export default Counter;
