import React, { useState } from 'react';
import { motion } from 'framer-motion';

function SearchBar({ fetchJobsCustom }) {
  const [jobCriteria, setJobCriteria] = useState({
    title: "",
    location: "",
    experience: "",
    type: ""
  });

  const handleChange = (e) => {
    setJobCriteria((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const search = async () => {
    await fetchJobsCustom(jobCriteria);
    setJobCriteria({
      title: "",
      location: "",
      experience: "",
      type: ""
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className='flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-4 my-10 px-4 sm:px-8 md:px-10 lg:px-20'
    >
      <select
        onChange={handleChange}
        name='title'
        value={jobCriteria.title}
        defaultValue=""
        className='w-full md:w-60 py-3 pl-4 bg-white/80 backdrop-blur-md text-gray-800 font-medium rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 transition'
      >
        <option value="" disabled>Job Role</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="Developer Advocate">Developer Advocate</option>
        <option value="iOS Developer">iOS Developer</option>
      </select>

      <select
        onChange={handleChange}
        name='type'
        value={jobCriteria.type}
        defaultValue=""
        className='w-full md:w-60 py-3 pl-4 bg-white/80 backdrop-blur-md text-gray-800 font-medium rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 transition'
      >
        <option value="" disabled>Job Type</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
      </select>

      <select
        onChange={handleChange}
        name='location'
        value={jobCriteria.location}
        defaultValue=""
        className='w-full md:w-60 py-3 pl-4 bg-white/80 backdrop-blur-md text-gray-800 font-medium rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 transition'
      >
        <option value="" disabled>Location</option>
        <option value="Remote">Remote</option>
        <option value="In-Office">In-Office</option>
        <option value="Hybrid">Hybrid</option>
      </select>

      <select
        onChange={handleChange}
        name='experience'
        value={jobCriteria.experience}
        defaultValue=""
        className='w-full md:w-60 py-3 pl-4 bg-white/80 backdrop-blur-md text-gray-800 font-medium rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 transition'
      >
        <option value="" disabled>Experience</option>
        <option value="Fresher">Fresher</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Mid Level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>

      <button
        onClick={search}
        className='w-full md:w-60 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold py-3 rounded-xl shadow-md hover:scale-105 transition-transform duration-200'
      >
        🔍 Search
      </button>
    </motion.div>
  );
}

export default SearchBar;
