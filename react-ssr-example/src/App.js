import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Articles } from "./pages/Article";
import { Counter } from "./Counter";

const DivHead = styled.div`
  color: green;
  font-size: 96px;
`;

export const App = () => {
  return (
    <React.Fragment>
      <DivHead className="App">Server React</DivHead>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Article">Articles</Link>
        </li>
        <li>
          <Link to="/Counter">Counter</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/About" element={<About />} />

        <Route path="/Article" element={<Articles />} />
        <Route path="/Counter" element={<Counter />} />
      </Routes>
    </React.Fragment>
  );
};
