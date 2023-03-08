import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";
import SignIn from "./pages/sign-in";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
