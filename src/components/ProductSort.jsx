import { useState } from "react";
import "./ProductSort.css";

const ProductSort = ({ onSortChange }) => {
  const [activeSort, setActiveSort] = useState("recommended");

  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    setActiveSort(selectedSort);
    onSortChange(selectedSort);
  };
  return (
    <div className="product-sort">
        <select
          id="sort-dropdown"
          value={activeSort}
          onChange={handleSortChange}
          className="sort-dropdown"
        >
          <option value="recommended">Recommended</option>
          <option value="newest">Newest First</option>
          <option value="popular">Popular</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="price-low-high">Price: Low to High</option>
        </select>
    </div>
  );
};

export default ProductSort;
