import { useContext } from "react";
import { GeneralContext } from "../../context/GeneralContext";
import "./filter.scss";

function FilterField() {
  const { filters, setFilters } = useContext(GeneralContext);

  const handleDelete = (filter) => {
    const newFilters = filters.filter((item) => item !== filter);
    setFilters(newFilters);
  };

  const handleFullDelete = () => {
    setFilters([]);
  };
  return (
    <div className="filter-field">
      <div>
        {filters.map((filter, index) => {
          return (
            <button key={index} className="filter-btn">
              {filter} <span onClick={() => handleDelete(filter)}>X</span>
            </button>
          );
        })}
      </div>
      <div>
        <button className="clear-btn" onClick={() => handleFullDelete()}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default FilterField;
