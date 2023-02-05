import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Book, Home } from "./routes";
import { Header } from "./components/Header/Header";

export function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="book/:id" element={<Book />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
