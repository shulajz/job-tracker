import React from "react";

const Backdrop = ({ children, onClick }) => {
  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-md transition-all duration-200"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Backdrop;
