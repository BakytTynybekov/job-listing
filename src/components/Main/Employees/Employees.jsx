import { useContext } from "react";
import { GeneralContext } from "../../../context/GeneralContext";
import Employee from "../Employee/Employee";
import "./employees.scss";

export default function Employees() {
  const { allJobs, filteredJobs } = useContext(GeneralContext);

  const jobsToRenter = filteredJobs !== null ? filteredJobs : allJobs;
  console.log(jobsToRenter);

  return (
    <div className="employees">
      {jobsToRenter?.length > 0 ? (
        jobsToRenter?.map((job) => {
          return <Employee key={job.id} data={job} />;
        })
      ) : (
        <p className="no-job">Currently we do not have such kind of job</p>
      )}
    </div>
  );
}
