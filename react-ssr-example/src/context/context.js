import { createContext, useState, useCallback } from "react";

const TestContext = createContext();

const Provider = ({ children }) => {
  let [count, setCount] = useState(0);

  // global state obj
  let state = {
    count,
    setCount,
  };

  // used well for fetch request functions(axios)/ OR FUNCTIIN THAT get called multiple times because on rerender new functions are created.

  return <TestContext.Provider value={state}>{children}</TestContext.Provider>;
};

export { Provider };
export default TestContext;
