import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/contact'


function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav>
        <Link to="/">Home</Link>
        &nbsp; | &nbsp;

        <Link to="/about">About</Link>
        &nbsp; | &nbsp;

        <Link to="/contact">Contact</Link>
      </nav>

      <hr />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;