import React from "react";
import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../features/favoritesSlice";

const ProductCard = ({ product, isFavorite }) => {
  const dispatch = useDispatch();

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(product));
    } else {
      dispatch(addFavorite(product));
    }
  };

  return (
    <div>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <p>{product.category}</p>
      <button onClick={toggleFavorite}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default ProductCard;
