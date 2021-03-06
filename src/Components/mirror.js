import React from "react";

import { useCount } from "../context/count.js";

function Mirror() {
  const { count } = useCount();
  return (
    <span>
      <b>Mirror: </b>
      {count}
    </span>
  );
}

export default Mirror;
