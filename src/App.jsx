import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { db } from "./firebase.config";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostJob from "./components/PostJob";

function Home({ jobs, customSearch, fetchJobs, fetchJobsCustom }) {
  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom} />
      {customSearch && (
        <div className="flex justify-end px-4 sm:px-6 md:px-10 mb-4">
          <button
            onClick={fetchJobs}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md shadow-md transition"
          >
            Clear Filter
          </button>
        </div>
      )}

      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

function App() {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async () => {
    setCustomSearch(false);
    const tempJobs = [];
    const jobRef = query(collection(db, "jobs"));
    const q = query(jobRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);
    req.forEach((doc) => {
      tempJobs.push({
        ...doc.data(),
        id: doc.id,
        postedOn: doc.data().postedOn.toDate().toDateString(),
      });
    });
    setJobs(tempJobs);
  };

  const fetchJobsCustom = async (jobCriteria) => {
    setCustomSearch(true);
    const tempJobs = [];

    const filters = [];
    if (jobCriteria.type) filters.push(where("type", "==", jobCriteria.type));
    if (jobCriteria.title) filters.push(where("title", "==", jobCriteria.title));
    if (jobCriteria.experience) filters.push(where("experience", "==", jobCriteria.experience));
    if (jobCriteria.location) filters.push(where("location", "==", jobCriteria.location));

    filters.push(orderBy("postedOn", "desc")); // Add ordering

    const q = query(collection(db, "jobs"), ...filters);

    const req = await getDocs(q);
    req.forEach((doc) => {
      tempJobs.push({
        ...doc.data(),
        id: doc.id,
        postedOn: doc.data().postedOn.toDate().toDateString(),
      });
    });

    setJobs(tempJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              jobs={jobs}
              customSearch={customSearch}
              fetchJobs={fetchJobs}
              fetchJobsCustom={fetchJobsCustom}
            />
          }
        />
        <Route path="/post-job" element={<PostJob />} />
      </Routes>
    </Router>
  );
}

export default App;
