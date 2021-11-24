import React, { createContext, useContext, useState } from "react";

export const CountContext = createContext();

export default function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

export function useCount() {
  const context = useContext(CountContext);
  if (!context)
    throw new Error("'useCount' deve ser usado dentro de um 'CountProvider'");
  const { count, setCount } = context;
  return { count, setCount };
}
