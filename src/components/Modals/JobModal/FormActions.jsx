import React from "react";
import Button from "../../UI/Button";

const FormActions = ({ onClose, isEditing, darkMode }) => {
  const cancelIcon = (
    <svg
      className="w-4 h-4 mr-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );

  const submitIcon = (
    <svg
      className="w-4 h-4 mr-1 group-hover:rotate-[360deg] transition-transform duration-700"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isEditing ? (
        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
      ) : (
        <path
          fillRule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clipRule="evenodd"
        ></path>
      )}
    </svg>
  );

  return (
    <div className="flex justify-end space-x-3 mt-6">
      <Button
        type="button"
        onClick={onClose}
        variant="secondary"
        darkMode={darkMode}
        icon={cancelIcon}
      >
        Cancel
      </Button>
      <Button
        type="submit"
        variant="primary"
        className="group"
        icon={submitIcon}
      >
        {isEditing ? "Update" : "Add"} Job
      </Button>
    </div>
  );
};

export default FormActions;
