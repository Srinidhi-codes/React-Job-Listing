import { useSelector } from "react-redux";
import Filters from "./components/Filters/Filters";
import JobCard from "./components/jobCard/JobCard";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <JobCard />
      </div>
    </>
  );
}

export default App;
