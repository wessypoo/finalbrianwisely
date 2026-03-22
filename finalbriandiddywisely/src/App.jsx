import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import ProductCard from "./components/ProductCard";
import UserProfile from "./components/UserProfile";
import CommentList from "./components/CommentList";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <span className="nav-separator">|</span>
        <Link to="/about" className="nav-link">About</Link>
        <span className="nav-separator">|</span>
        <Link to="/profile" className="nav-link">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
