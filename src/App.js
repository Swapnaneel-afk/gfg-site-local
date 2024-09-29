import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./LandingPage";
import GeeksAssemblePage from "./GeeksAssemblePage";
import "./index.css"; // or './App.css' depending on your file name

function App() {
  const [currentPage, setCurrentPage] = useState("landing");

  return (
    <div className="App overflow-hidden">
      <AnimatePresence mode="wait">
        {currentPage === "landing" ? (
          <LandingPage key="landing" setCurrentPage={setCurrentPage} />
        ) : (
          <GeeksAssemblePage key="geeks-assemble" />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
