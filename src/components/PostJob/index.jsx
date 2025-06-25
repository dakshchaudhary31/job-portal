import React, { useState } from "react";
import { db } from "../../firebase.config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    type: "",
    experience: "",
    skills: "",
    job_link: "",
    description: "",
  });

  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const jobRef = collection(db, "jobs");
      await addDoc(jobRef, {
        ...formData,
        skills: formData.skills.split(",").map((s) => s.trim()),
        postedOn: Timestamp.now(),
      });

      setSuccessMsg("✅ Job posted successfully!");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto mt-24 p-8 bg-white rounded-xl shadow-lg"
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Post a Job
      </h2>

      {successMsg && (
        <p className="text-green-600 font-semibold mb-4 text-center">
          {successMsg}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Job Title"
          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-500"
          required
        />

        {/* Company */}
        <input
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company Name"
          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-500"
          required
        />

        {/* Type */}
        <input
          name="type"
          value={formData.type}
          onChange={handleChange}
          placeholder="Job Type (Full-time / Part-time)"
          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-500"
        />

        {/* Experience */}
        <input
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          placeholder="Experience (e.g. Fresher, Senior )"
          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-500"
        />

        {/* Location */}
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location (e.g. Delhi, Remote)"
          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-500"
        />

        {/* Skills */}
        <input
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="Skills (comma separated e.g. React, Firebase, CSS)"
          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-500"
        />

        {/* Job Link */}
        <input
          name="job_link"
          value={formData.job_link}
          onChange={handleChange}
          placeholder="Job/Company Website Link"
          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-500"
        />

        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
        >
          Post Job
        </motion.button>
      </form>
    </motion.div>
  );
};

export default PostJob;
