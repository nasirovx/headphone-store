import React, { useCallback, useState } from "react";
import ListItem from ".Components/ListItem/ListItem";

const CountCallback = () =>{
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count]);

  const increment1 = useCallback(() => {
    if(count > 0){
      setCount(count - 1)}
  }, [count]);

  return(
    <div>
      Count: {count}
      <button onClick={increment}>Increment</button>
      <button onClick={increment1}>minus</button>
    </div>
  )
}
export default CountCallback