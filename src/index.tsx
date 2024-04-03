import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import App from "app/App";

render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,

  document.getElementById("root"),
);
