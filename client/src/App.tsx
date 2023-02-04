import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Book, Home } from "./routes";

export function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="book/:id" element={<Book />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
