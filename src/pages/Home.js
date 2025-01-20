import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productsSlice";
import ProductCard from "../components/ProductCard";
import FilterDropdown from "../components/FilterDropdown";

const Home = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);
  const favorites = useSelector((state) => state.favorites);

  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = items
    .filter((product) => (filter ? product.category === filter : true))
    .sort((a, b) =>
      sort === "asc"
        ? a.price - b.price
        : sort === "desc"
        ? b.price - a.price
        : 0
    );

  const homeContainerStyle = {
    padding: "30px",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    marginBottom: "30px",
  };

  const titleStyle = {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  };

  const filterStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "20px",
  };

  const selectStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const productContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    justifyContent: "center",
  };

  return (
    <div style={homeContainerStyle}>
      <h1 style={titleStyle}>Product Dashboard</h1>
      <div style={filterStyle}>
        <FilterDropdown
          categories={[...new Set(items.map((product) => product.category))]}
          onChange={setFilter}
        />
        <select style={selectStyle} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort by Price</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div style={productContainerStyle}>
        {status === "loading" ? (
          <p>Loading...</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={favorites.some((fav) => fav.id === product.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
