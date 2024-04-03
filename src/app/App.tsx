import React from "react";
import "./styles/index.scss";
import { AppRoute } from "./providers/router";
import { Header } from "wigets/Header";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <AppRoute />
      </div>
    </div>
  );
};

export default App; 