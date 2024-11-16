import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import AddContact from "./AddContact";
import SearchContact from "./SearchContact";
import View from "./View";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/newcontact" element={<AddContact />} />
        <Route path="/search" element={<SearchContact />} />
        <Route path="/view" element={<View />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

export const url = "http://localhost:5000";