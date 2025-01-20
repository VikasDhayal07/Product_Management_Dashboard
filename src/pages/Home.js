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

  return (
    <div>
      <h1>Product Dashboard</h1>
      <FilterDropdown
        categories={[...new Set(items.map((product) => product.category))]}
        onChange={setFilter}
      />
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort by Price</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <div>
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
