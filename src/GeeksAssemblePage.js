import React from "react";
import { motion } from "framer-motion";

const GeeksAssemblePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-green-800 text-white min-h-screen flex flex-col items-center justify-start p-4"
    >
      <h1 className="text-4xl font-bold mb-4">Geeks Assemble!</h1>
      <div className="bg-green-700 p-4 w-full max-w-2xl mb-4">
        <p className="italic text-sm">
          Quote or problem of the day goes here...
        </p>
      </div>
      <div className="bg-green-100 text-green-800 p-4 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-2">About:</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
          risus eget urna mollis ornare vel eu leo.
        </p>
      </div>
    </motion.div>
  );
};

export default GeeksAssemblePage;
