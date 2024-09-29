import React from "react";
import { motion } from "framer-motion";

const LandingPage = ({ setCurrentPage }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-green-800 text-white min-h-screen flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl font-bold mb-4">Hello from Geeks For Geeks</h1>
      <p className="text-xl mb-4">Student Chapter KIIT</p>
      <button
        onClick={() => setCurrentPage("geeks-assemble")}
        className="bg-white text-green-800 px-4 py-2 rounded"
      >
        Enter
      </button>
    </motion.div>
  );
};

export default LandingPage;
