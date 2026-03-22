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
      <nav className="navbar" style={{ background: '#b0b0b0', padding: '12px 0', color: 'black' }}>
        <Link to="/" className="nav-link" style={{ color: 'black', textDecoration: 'none', margin: '0 8px' }}>Home</Link>
        <span className="nav-separator" style={{ color: 'black' }}>|</span>
        <Link to="/about" className="nav-link" style={{ color: 'black', textDecoration: 'none', margin: '0 8px' }}>About</Link>
        <span className="nav-separator" style={{ color: 'black' }}>|</span>
        <Link to="/profile" className="nav-link" style={{ color: 'black', textDecoration: 'none', margin: '0 8px' }}>Profile</Link>
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
