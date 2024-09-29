import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import geeksforgeeksLogo from "./gfg.png";

const MenuModal = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.3 }}
        className="fixed inset-y-0 left-0 w-1/5 bg-green-800 bg-opacity-95 flex items-center justify-center z-50 shadow-lg"
      >
        <div className="relative w-full h-full p-4 text-white">
          <button onClick={onClose} className="absolute top-4 right-4">
            <X className="w-6 h-6" />
          </button>
          <div className="flex flex-col items-center h-full justify-center">
            <img
              src={geeksforgeeksLogo}
              alt="GFG Logo"
              className="w-16 h-16 mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Student Chapter</h2>
            <h3 className="text-lg mb-4">KIIT</h3>
            <nav className="flex flex-col items-center space-y-2 mb-4">
              <a href="#" className="text-base hover:underline">
                Home
              </a>
              <a href="#" className="text-base hover:underline">
                Core Lead
              </a>
              <a href="#" className="text-base hover:underline">
                Domain Leads
              </a>
              <a href="#" className="text-base hover:underline">
                Alumni Testimonials
              </a>
            </nav>
            <div className="text-xs">Contact us/ Instagram / LinkedIn</div>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default MenuModal;
