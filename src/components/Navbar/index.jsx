import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full fixed top-0 z-50 backdrop-blur-md bg-transparent border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Brand Name */}
          <div className="flex items-center gap-3">
            <FaBriefcase className="text-white text-3xl" />
            <span className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
              JobBoard
            </span>
          </div>

          {/* Post Job Button - Now visible on all screens */}
          <Link
            to="/post-job"
            className="text-sm sm:text-base bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-5 py-2 rounded-md font-medium transition"
          >
            Post a Job
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
