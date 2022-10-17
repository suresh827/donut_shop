import React from "react";
import "./App.css";
import DMenu from "./components/DMenu";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Details from "./components/Details";
import Cart from "./components/Cart";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DMenu />} />
          <Route path="/donut/cart" element={<Cart />} />
          <Route path="/donut/:id" element={<Details />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
