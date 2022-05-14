import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";

export const GeneralContext = createContext();

export const ContextProvider = ({ children }) => {
  const [filters, setFilters] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(null);
  const fetchApi = async () => {
    try {
      const res = await axios.get(
        "https://mocki.io/v1/51b3eb02-a8d9-439b-a5ad-4c1a370afe96"
      );

      setAllJobs(res?.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchApi();
    console.log(allJobs);
  }, []);

  const getFilteredJobs = () => {
    const filtered = allJobs.filter((job) => {
      let res = filters.every((filter) => job.languages.includes(filter));

      if (res) {
        return job;
      }
    });
    setFilteredJobs(filtered);
  };
  let initialRender = useRef(true);
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      getFilteredJobs();
    }
  }, [filters]);
  const data = {
    filters: filters,
    setFilters: setFilters,
    allJobs: allJobs,
    filteredJobs: filteredJobs
  };
  return (
    <GeneralContext.Provider value={data}>{children}</GeneralContext.Provider>
  );
};
