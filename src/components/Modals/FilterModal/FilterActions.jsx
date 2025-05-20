import React from "react";
import Button from "../../UI/Button";

const FilterActions = ({ handleClear, handleApply, darkMode }) => {
  const clearIcon = (
    <svg
      className="w-4 h-4 mr-1"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  const applyIcon = (
    <svg
      className="w-4 h-4 mr-1"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  return (
    <div className="flex justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
      <Button
        onClick={handleClear}
        variant="secondary"
        darkMode={darkMode}
        icon={clearIcon}
      >
        Clear All
      </Button>
      <Button onClick={handleApply} variant="primary" icon={applyIcon}>
        Apply Filters
      </Button>
    </div>
  );
};

export default FilterActions;
