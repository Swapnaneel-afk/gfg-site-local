import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import MenuModal from "./MenuModel";
import geeksforgeeksLogo from "./gfg.png";

const GeeksAssemblePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const Path = (props) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="currentColor"
      strokeLinecap="round"
      {...props}
    />
  );

  const MenuIcon = () => (
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
        animate={isMenuOpen ? "open" : "closed"}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
        animate={isMenuOpen ? "open" : "closed"}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
        animate={isMenuOpen ? "open" : "closed"}
      />
    </svg>
  );

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="bg-green-800 text-white min-h-screen flex flex-col absolute inset-0"
    >
      <header className="bg-green-900 p-4 flex justify-between items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <MenuIcon />
        </button>
        <img src={geeksforgeeksLogo} alt="GFG Logo" className="w-8 h-8" />
      </header>

      <main className="flex-grow flex flex-col p-4 bg-green-800">
        <h1 className="text-4xl font-bold mb-6 text-center">Geeks Assemble!</h1>

        <div className="bg-green-700 p-4 mb-6 rounded-md">
          <p className="italic text-sm">
            Quote or problem of the day some quote or problem of the day some
            quote or problem of the day some quote or problem of the day some
            quote or problem of the day some
          </p>
        </div>

        <div className="bg-green-100 text-green-800 p-4 rounded-md">
          <h2 className="text-2xl font-bold mb-2">About:</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
            risus eget urna mollis ornare vel eu leo. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Nullam id dolor id nibh ultricies vehicula ut id elit.
          </p>
        </div>
      </main>

      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </motion.div>
  );
};

export default GeeksAssemblePage;
