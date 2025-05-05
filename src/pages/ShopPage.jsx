import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import ProductSort from "../components/ProductSort";
import "./ShopPage.css";

const ShopPage = ({ products, loading, error }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [sortOption, setSortOption] = useState("recommended");
  const [showFilters, setShowFilters] = useState(true);
  const [showSort, setShowSort] = useState(false);
  

  useEffect(() => {
    if (products) {
      let result = [...products];

      Object.entries(filters).forEach(([category, values]) => {
        if (values.length > 0) {
          result = result.filter((product) => {
            return values.some(
              (value) =>
                product.category.toLowerCase().includes(value.toLowerCase()) ||
                product.title.toLowerCase().includes(value.toLowerCase())
            );
          });
        }
      });

      switch (sortOption) {
        case "newest":
          result.sort((a, b) => b.id - a.id);
          break;
        case "popular":
          result.sort((a, b) => b.rating.rate - a.rating.rate);
          break;
        case "price-high-low":
          result.sort((a, b) => b.price - a.price);
          break;
        case "price-low-high":
          result.sort((a, b) => a.price - b.price);
          break;
        default:
          break;
      }

      setFilteredProducts(result);
    }
  }, [products, filters, sortOption]);

  const handleFilterChange = (category, value, checked) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };

      if (!newFilters[category]) {
        newFilters[category] = [];
      }

      if (checked) {
        newFilters[category] = [...newFilters[category], value];
      } else {
        newFilters[category] = newFilters[category].filter((v) => v !== value);
      }

      return newFilters;
    });
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    setShowSort(false);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
    if (showSort) setShowSort(false);
  };

  const toggleSort = () => {
    setShowSort(!showSort);
    if (showFilters) setShowFilters(false);
  };

  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="shop-page">
      <div className="container">
        <div className="shop-header">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>

        <div className="shop-content">
          <div className="mobile-filter-toggle">
            <button onClick={toggleFilters}>FILTER</button>
            <button onClick={toggleSort}>
              {sortOption === "recommended"
                ? "RECOMMENDED"
                : sortOption.toUpperCase()}{" "}
              ▼
            </button>
          </div>

          <div className="shop-layout">
            <aside
              className={`shop-sidebar ${showFilters ? "mobile-visible " : "" }  `}
            >
              <div className="filter-header-alignment">
              <div className="filter-count">
                {filteredProducts.length} ITEMS
              </div>
              <button
                className="hide-filter"
                onClick={() => setShowFilters(!showFilters)}
              >
                {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
              </button>
              </div>
              <ProductFilter onFilterChange={handleFilterChange} filter={showFilters}/>
            </aside>

            <div className="shop-main">
              <div
                className={`shop-sort-container ${
                  showSort ? "mobile-visible" : ""
                }`}
              >
                <ProductSort onSortChange={handleSortChange} />
              </div>

              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
