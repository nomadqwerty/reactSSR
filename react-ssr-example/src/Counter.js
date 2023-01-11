import React, { useState, useContext } from "react";
import TestContext from "./context/context";
export const Counter = () => {
  const [clicks, setClicks] = useState(0);
  const test = useContext(TestContext);
  console.log(test);
  const [incrmntBy, setIncrmntBy] = useState(1);
  return (
    <React.Fragment>
      <p> clicked {test.count} times</p>
      <label>
        increment by
        <input
          value={incrmntBy}
          onChange={(e) => {
            setIncrmntBy(Number(e.target.value));
          }}
          type="number"
        />
      </label>
      <button
        onClick={() => {
          test.setCount(test.count + incrmntBy);
          setClicks(test.count);
        }}
      >
        Click
      </button>
    </React.Fragment>
  );
};
