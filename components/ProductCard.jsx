import React, { useState } from 'react';

const ProductCard = ({ name, price, imageUrl, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart({ name, price, quantity });
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 m-4 max-w-sm text-center shadow-md">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded mb-4" />
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-700 mb-4">${price}</p>
      <div className="flex items-center justify-center mb-4">
        <button 
          onClick={() => setQuantity(Math.max(1, quantity - 1))} 
          className="bg-gray-200 px-2 py-1 rounded-l"
        >
          -
        </button>
        <span className="px-4 py-1 border-t border-b">{quantity}</span>
        <button 
          onClick={() => setQuantity(quantity + 1)} 
          className="bg-gray-200 px-2 py-1 rounded-r"
        >
          +
        </button>
      </div>
      <button 
        onClick={handleAddToCart} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;