import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import ProductCard from "./components/ProductCard";
import UserProfile from "./components/UserProfile";
import CommentList from "./components/CommentList";

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

      {/* Display components on the website */}
      <div className="container mx-auto p-4">
        <ProductCard 
          name="Sample Product" 
          price={29.99} 
          imageUrl="https://via.placeholder.com/300" 
          onAddToCart={handleAddToCart} 
        />
        <UserProfile 
          username="John Doe" 
          email="john@example.com" 
          avatarUrl="https://via.placeholder.com/100" 
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
