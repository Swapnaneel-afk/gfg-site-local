import React from "react";
import { motion } from "framer-motion";
import geeksforgeeksLogo from "./gfg.png";

const LandingPage = ({ setCurrentPage }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="bg-green-800 text-white min-h-screen flex flex-col items-center justify-center p-4 absolute inset-0"
    >
      <GeeksForGeeksIcon />
      <h1 className="text-4xl font-bold mb-4 text-center">
        Hello from Geeks For Geeks
      </h1>
      <p className="text-xl mb-4 text-center">Student Chapter KIIT</p>
      <button
        onClick={() => setCurrentPage("geeks-assemble")}
        className="bg-white text-green-500 px-4 py-2 rounded hover:bg-green-100"
      >
        Enter
      </button>
    </motion.div>
  );
};
const GeeksForGeeksIcon = () => (
  <img
    src={geeksforgeeksLogo}
    alt="GeeksForGeeks Logo"
    className="w-24 h-24 mb-4"
  />
);

export default LandingPage;
