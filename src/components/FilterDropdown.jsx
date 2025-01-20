import React from "react";

const FilterDropdown = ({ categories, onChange }) => {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;
