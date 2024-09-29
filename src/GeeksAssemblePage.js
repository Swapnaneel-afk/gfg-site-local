import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const MenuModal = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-green-800 bg-opacity-95 flex items-center justify-center z-50"
      >
        <div className="relative w-full max-w-md p-8 text-white">
          <button onClick={onClose} className="absolute top-4 left-4">
            <X className="w-6 h-6" />
          </button>
          <div className="flex flex-col items-center">
            <img src="/gfg.png" alt="GFG Logo" className="w-24 h-24 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Student Chapter</h2>
            <h3 className="text-xl mb-6">KIIT</h3>
            <nav className="flex flex-col items-center space-y-2 mb-6">
              <a href="#" className="text-lg hover:underline">
                Home
              </a>
              <a href="#" className="text-lg hover:underline">
                Core Lead
              </a>
              <a href="#" className="text-lg hover:underline">
                Domain Leads
              </a>
              <a href="#" className="text-lg hover:underline">
                Alumni Testimonials
              </a>
            </nav>
            <div className="text-sm">Contact us/ Instagram / LinkedIn</div>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const GeeksAssemblePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="bg-green-800 text-white min-h-screen flex flex-col absolute inset-0"
    >
      <header className="bg-green-900 p-4 flex justify-between items-center">
        <button onClick={() => setIsMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
        <img src="/gfg.png" alt="GFG Logo" className="w-8 h-8" />
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
