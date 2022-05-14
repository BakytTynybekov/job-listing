import { useContext } from "react";
import { GeneralContext } from "../../../context/GeneralContext";
import "./employee.scss";

function Employee({ data }) {
  const { setFilters, filters } = useContext(GeneralContext);

  const handleAddToFilter = (lang) => {
    if (!filters.includes(lang)) {
      setFilters([...filters, lang]);
    }
  };
  return (
    <div className="job">
      <div className="job-info">
        <div className="company-logo">
          <img
            src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
            alt=""
          />
        </div>
        <div className="company-info">
          <h2 className="company-name">
            {data.company} {data.new ? <span className="new">New</span> : ""}{" "}
            {data.featured ? <span className="featured">Featured</span> : ""}
          </h2>
          <p className="job-name"> {data.position}</p>
          <div className="job-about">
            <p>{data.postedAt}</p>
            <p>{data.contract}</p>
            <p>{data.location}</p>
          </div>
        </div>
      </div>
      <div className="job-languages">
        {data.languages.map((lang, index) => {
          return (
            <button onClick={() => handleAddToFilter(lang)} key={index}>
              {lang}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Employee;
