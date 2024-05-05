import Filters from "./components/Filters/Filters";
import JobCard from "./components/jobCard/JobCard";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Filters />
        <JobCard />
      </div>
    </>
  );
}

export default App;
