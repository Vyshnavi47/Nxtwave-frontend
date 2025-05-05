import { useState } from "react";
import "./ProductFilter.css";

const ProductFilter = ({ onFilterChange ,filter}) => {
  const [filtersOpen, setFiltersOpen] = useState({
    customizable: false,
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilter = (filter) => {
    setFiltersOpen({
      ...filtersOpen,
      [filter]: !filtersOpen[filter],
    });
  };

  const handleFilterChange = (category, value, checked) => {
    onFilterChange(category, value, checked);
  };

  return (
    <div className={`${filter}? "product-filter" :"product-filter-hide" `}>  

      {filter && (
        <div className="filter-section">
          <div className="filter-group">
            <div
              className="filter-title"
              onClick={() => toggleFilter("customizable")}
            >
              <span>CUSTOMIZABLE</span>
              <span
                className={`arrow ${filtersOpen.customizable ? "open" : ""}`}
              >
                ▼
              </span>
            </div>
            {filtersOpen.customizable && (
              <div className="filter-options">
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleFilterChange(
                        "customizable",
                        "yes",
                        e.target.checked
                      )
                    }
                  />
                  <span>Yes</span>
                </label>
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleFilterChange("customizable", "no", e.target.checked)
                    }
                  />
                  <span>No</span>
                </label>
              </div>
            )}
          </div>

          <div className="filter-group">
            <div
              className="filter-title"
              onClick={() => toggleFilter("idealFor")}
            >
              <span>IDEAL FOR</span>
              <span className={`arrow ${filtersOpen.idealFor ? "open" : ""}`}>
                ▼
              </span>
            </div>
            {filtersOpen.idealFor && (
              <div className="filter-options">
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleFilterChange("idealFor", "men", e.target.checked)
                    }
                  />
                  <span>Men</span>
                </label>
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleFilterChange("idealFor", "women", e.target.checked)
                    }
                  />
                  <span>Women</span>
                </label>
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleFilterChange(
                        "idealFor",
                        "children",
                        e.target.checked
                      )
                    }
                  />
                  <span>Children</span>
                </label>
                <div className="filter-all">
                  <a href="#">All</a>
                </div>
              </div>
            )}
          </div>

          <div className="filter-group">
            <div
              className="filter-title"
              onClick={() => toggleFilter("occasion")}
            >
              <span>OCCASION</span>
              <span className={`arrow ${filtersOpen.occasion ? "open" : ""}`}>
                ▼
              </span>
            </div>
            {filtersOpen.occasion && (
              <div className="filter-options">
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleFilterChange("occasion", "casual", e.target.checked)
                    }
                  />
                  <span>Casual</span>
                </label>
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleFilterChange("occasion", "formal", e.target.checked)
                    }
                  />
                  <span>Formal</span>
                </label>
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleFilterChange("occasion", "party", e.target.checked)
                    }
                  />
                  <span>Party</span>
                </label>
                <div className="filter-all">
                  <a href="#">All</a>
                </div>
              </div>
            )}
          </div>

          <div className="filter-group">
            <div className="filter-title" onClick={() => toggleFilter("work")}>
              <span>WORK</span>
              <span className={`arrow ${filtersOpen.work ? "open" : ""}`}>
                ▼
              </span>
            </div>
            {filtersOpen.work && (
              <div className="filter-options">
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleFilterChange("work", "handmade", e.target.checked)
                    }
                  />
                  <span>Handmade</span>
                </label>
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleFilterChange(
                        "work",
                        "machine-made",
                        e.target.checked
                      )
                    }
                  />
                  <span>Machine-made</span>
                </label>
                <div className="filter-all">
                  <a href="#">All</a>
                </div>
              </div>
            )}
          </div>

          <div className="filter-group">
            <div
              className="filter-title"
              onClick={() => toggleFilter("fabric")}
            >
              <span>FABRIC</span>
              <span className={`arrow ${filtersOpen.fabric ? "open" : ""}`}>
                ▼
              </span>
            </div>
            {filtersOpen.fabric && (
              <div className="filter-options">
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleFilterChange("fabric", "cotton", e.target.checked)
                    }
                  />
                  <span>Cotton</span>
                </label>
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleFilterChange("fabric", "silk", e.target.checked)
                    }
                  />
                  <span>Silk</span>
                </label>
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleFilterChange("fabric", "wool", e.target.checked)
                    }
                  />
                  <span>Wool</span>
                </label>
                <div className="filter-all">
                  <a href="#">All</a>
                </div>
              </div>
            )}
          </div>

          <div className="filter-group">
            <div
              className="filter-title"
              onClick={() => toggleFilter("segment")}
            >
              <span>SEGMENT</span>
              <span className={`arrow ${filtersOpen.segment ? "open" : ""}`}>
                ▼
              </span>
            </div>
            {filtersOpen.segment && (
              <div className="filter-options">
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleFilterChange("segment", "luxury", e.target.checked)
                    }
                  />
                  <span>Luxury</span>
                </label>
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleFilterChange("segment", "premium", e.target.checked)
                    }
                  />
                  <span>Premium</span>
                </label>
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleFilterChange(
                        "segment",
                        "affordable",
                        e.target.checked
                      )
                    }
                  />
                  <span>Affordable</span>
                </label>
                <div className="filter-all">
                  <a href="#">All</a>
                </div>
              </div>
            )}
          </div>

          <div className="filter-group">
            <div
              className="filter-title"
              onClick={() => toggleFilter("suitableFor")}
            >
              <span>SUITABLE FOR</span>
              <span
                className={`arrow ${filtersOpen.suitableFor ? "open" : ""}`}
              >
                ▼
              </span>
            </div>
            {filtersOpen.suitableFor && (
              <div className="filter-options">
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleFilterChange(
                        "suitableFor",
                        "all-seasons",
                        e.target.checked
                      )
                    }
                  />
                  <span>All Seasons</span>
                </label>
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleFilterChange(
                        "suitableFor",
                        "summer",
                        e.target.checked
                      )
                    }
                  />
                  <span>Summer</span>
                </label>
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleFilterChange(
                        "suitableFor",
                        "winter",
                        e.target.checked
                      )
                    }
                  />
                  <span>Winter</span>
                </label>
                <div className="filter-all">
                  <a href="#">All</a>
                </div>
              </div>
            )}
          </div>

          <div className="filter-group">
            <div
              className="filter-title"
              onClick={() => toggleFilter("rawMaterials")}
            >
              <span>RAW MATERIALS</span>
              <span
                className={`arrow ${filtersOpen.rawMaterials ? "open" : ""}`}
              >
                ▼
              </span>
            </div>
            {filtersOpen.rawMaterials && (
              <div className="filter-options">
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleFilterChange(
                        "rawMaterials",
                        "organic",
                        e.target.checked
                      )
                    }
                  />
                  <span>Organic</span>
                </label>
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleFilterChange(
                        "rawMaterials",
                        "synthetic",
                        e.target.checked
                      )
                    }
                  />
                  <span>Synthetic</span>
                </label>
                <div className="filter-all">
                  <a href="#">All</a>
                </div>
              </div>
            )}
          </div>

          <div className="filter-group">
            <div
              className="filter-title"
              onClick={() => toggleFilter("pattern")}
            >
              <span>PATTERN</span>
              <span className={`arrow ${filtersOpen.pattern ? "open" : ""}`}>
                ▼
              </span>
            </div>
            {filtersOpen.pattern && (
              <div className="filter-options">
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleFilterChange("pattern", "solid", e.target.checked)
                    }
                  />
                  <span>Solid</span>
                </label>
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleFilterChange("pattern", "printed", e.target.checked)
                    }
                  />
                  <span>Printed</span>
                </label>
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleFilterChange(
                        "pattern",
                        "checkered",
                        e.target.checked
                      )
                    }
                  />
                  <span>Checkered</span>
                </label>
                <div className="filter-all">
                  <a href="#">All</a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFilter;
