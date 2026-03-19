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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <div className="container mx-auto p-4 text-center">
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

    
    </BrowserRouter>
  );
}

export default App;
