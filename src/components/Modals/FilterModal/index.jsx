import React, { useState } from "react";
import { X } from "lucide-react";
import Backdrop from "../../UI/Backdrop";
import GradientText from "../../UI/GradientText";
import IconButton from "../../UI/IconButton";
import StatusFilter from "./StatusFilter";
import FilterActions from "./FilterActions";

const FilterModal = ({ onClose, filters, setFilters, darkMode }) => {
  const [tempFilters, setTempFilters] = useState({ ...filters });

  const handleApply = () => {
    setFilters(tempFilters);
    onClose();
  };

  const handleClear = () => {
    const clearedFilters = {
      search: "",
      status: "all",
    };
    setTempFilters(clearedFilters);
    setFilters(clearedFilters);
    onClose();
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Backdrop onClick={onClose}>
      <div
        className={`${
          darkMode
            ? "bg-gray-800/95 backdrop-blur-sm"
            : "bg-white/95 backdrop-blur-sm"
        } rounded-lg shadow-xl w-full max-w-sm transform transition-all duration-300 ease-in-out border ${
          darkMode ? "border-gray-700" : "border-gray-200"
        }`}
        onClick={handleModalClick}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold">
            <GradientText>Filter Jobs</GradientText>
          </h2>
          <IconButton
            icon={<X size={20} />}
            onClick={onClose}
            darkMode={darkMode}
            ariaLabel="Close filter modal"
          />
        </div>

        <div className="p-5">
          <StatusFilter
            tempFilters={tempFilters}
            setTempFilters={setTempFilters}
            darkMode={darkMode}
          />

          <FilterActions
            handleClear={handleClear}
            handleApply={handleApply}
            darkMode={darkMode}
          />
        </div>
      </div>
    </Backdrop>
  );
};

export default FilterModal;
