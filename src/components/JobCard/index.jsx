import React from 'react';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';

function JobCard(props) {
  const dateNow = dayjs(Date.now());
  const postedDate = dayjs(props.postedOn);
  const diffInDays = dateNow.diff(postedDate, 'day');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-4 sm:mx-10 md:mx-20 lg:mx-40 mb-6"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-6 py-5 bg-white border border-gray-300 rounded-2xl shadow-md hover:shadow-xl hover:border-blue-500 transition-all duration-300 hover:scale-[1.01]">
        
        {/* Left Section */}
        <div className="flex flex-col gap-3">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
            {props.title} <span className="text-gray-500">— {props.company}</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            {props.type}
            {props.experience && ` • ${props.experience}`}
            {props.location && ` • ${props.location}`}
          </p>

          {/* Skills Section (optional) */}
          <div className="flex flex-wrap gap-2 mt-1">
            {(props.skills || []).map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start md:items-end gap-2 text-sm">
          <p className="text-gray-400">
            Posted {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`} ago
          </p>
          {props.job_link && (
            <a href={props.job_link} target="_blank" rel="noreferrer">
              <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold px-6 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition">
                Apply Now
              </button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default JobCard;
