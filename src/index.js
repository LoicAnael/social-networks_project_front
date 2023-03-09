import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
