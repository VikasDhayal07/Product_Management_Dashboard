import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);

  const favoritesContainerStyle = {
    padding: "30px",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#fff6f6", // A light red background to differentiate
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    marginBottom: "30px",
  };

  const titleStyle = {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  };

  const productContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    justifyContent: "center",
  };

  const noFavoritesStyle = {
    textAlign: "center",
    color: "#888",
    fontSize: "18px",
  };

  return (
    <div style={favoritesContainerStyle}>
      <h1 style={titleStyle}>Favorites</h1>
      <div style={productContainerStyle}>
        {favorites.length > 0 ? (
          favorites.map((product) => (
            <ProductCard key={product.id} product={product} isFavorite />
          ))
        ) : (
          <p style={noFavoritesStyle}>No favorite products yet!</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
