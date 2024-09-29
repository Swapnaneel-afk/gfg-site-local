import React, { useState } from "react";
import { Menu } from "lucide-react";

const SimpleAnimatedMenu = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`transition-transform duration-300 ease-in-out ${
        isHovered ? "scale-110" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <Menu
        className={`text-white transition-colors duration-300 ${
          isHovered ? "text-green-300" : ""
        }`}
        size={24}
      />
    </div>
  );
};

export default SimpleAnimatedMenu;
