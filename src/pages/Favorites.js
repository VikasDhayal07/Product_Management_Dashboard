import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div>
      <h1>Favorites</h1>
      <div>
        {favorites.length > 0 ? (
          favorites.map((product) => (
            <ProductCard key={product.id} product={product} isFavorite />
          ))
        ) : (
          <p>No favorite products yet!</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
