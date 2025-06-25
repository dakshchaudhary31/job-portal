import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center text-white mt-10"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-orange-400">
            Your Dream Job
          </span>{' '}
          Awaits You
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 text-lg sm:text-xl text-gray-200 max-w-xl mx-auto"
        >
          Explore fresh job openings curated just for your talent and passion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [10, -10, 10] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="mt-10"
        >
          <div className="w-6 h-6 border-b-2 border-r-2 border-white rotate-45 mx-auto"></div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Header;
