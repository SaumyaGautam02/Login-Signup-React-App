// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;


