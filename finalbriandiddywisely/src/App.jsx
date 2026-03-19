import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import ProductCard from "./components/src/ProductCard";
import UserProfile from "./components/src/UserProfile";
import CommentList from "./components/src/CommentList";

function App() {
  const handleAddToCart = (item) => {
    console.log("Added to cart:", item);
  };

  const handleAddComment = (comment) => {
    console.log("New comment:", comment);
  };

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/profile">Profile</Link>
      </nav>

      
      <div className="container mx-auto p-4">
        <ProductCard 
          name="Sample Product" 
          price={67.99} 
          imageUrl="" 
          onAddToCart={handleAddToCart} 
        />
        <UserProfile 
          username="mangoman" 
          email="mango@example.com" 
          avatarUrl="" 
        />
        <CommentList 
          comments={["Great product!", "Love it."]} 
          onAddComment={handleAddComment} 
        />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
