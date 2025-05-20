import React from "react";

const IconButton = ({ icon, onClick, className = "", ariaLabel, darkMode }) => {
  return (
    <button
      onClick={onClick}
      className={`p-1.5 rounded-full ${
        darkMode ? "hover:bg-gray-600" : "hover:bg-gray-100"
      } transition-colors duration-150 ${className}`}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
};

export default IconButton;
