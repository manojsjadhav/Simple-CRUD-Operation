import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Page from "./Component/Page";

const App = () => {
  return (
    <BrowserRouter>
      <Page />
    </BrowserRouter>
  );
};

export default App;
