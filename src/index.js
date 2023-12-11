import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Text from "./textTranslation";
import Boot from "./bootstrap";

// import "../node_modules/react-bootstrap/dist/react-bootstrap";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <Text/> */}
    {/* <Boot/> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
