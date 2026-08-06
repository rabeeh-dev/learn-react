import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Detailed from "./pages/UserDetailed";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav>
        <Link to="/">Home</Link>&nbsp;&nbsp;
      <Link to="/users">Users</Link>
      </nav>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<Detailed />} />
      </Routes>
      {/* Routes */}
    </>
  );
}

export default App;
