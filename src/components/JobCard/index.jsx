import React from "react";
import { Edit2, Trash2 } from "lucide-react";
import StatusIndicator from "./StatusIndicator";
import IconButton from "../UI/IconButton";
import { getCardAccentColor } from "../utils/colors";

const JobCard = ({ job, darkMode, onEdit, onDelete, handleDragStart }) => {
  const colors = getCardAccentColor(job.status, darkMode);

  return (
    <div
      className={`${
        darkMode
          ? "bg-gray-700/90 hover:bg-gray-600/90"
          : "bg-white hover:bg-gray-50"
      } rounded-lg p-3 cursor-grab transition-all duration-200 border-l-4 ${
        colors.border
      } shadow-sm hover:shadow-md transform hover:-translate-y-1 backdrop-blur-sm bg-gradient-to-br ${
        colors.bg
      }`}
      draggable
      onDragStart={(e) => handleDragStart(e, job.id)}
    >
      <div className="flex justify-between">
        <div>
          <h3 className="font-medium text-sm">{job.company}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {job.title}
          </p>
        </div>
        <div className="flex space-x-1">
          <IconButton
            icon={
              <Edit2
                size={16}
                className={darkMode ? "text-gray-300" : "text-gray-500"}
              />
            }
            onClick={onEdit}
            ariaLabel="Edit job"
            darkMode={darkMode}
          />
          <IconButton
            icon={
              <Trash2
                size={16}
                className={darkMode ? "text-gray-300" : "text-gray-500"}
              />
            }
            onClick={onDelete}
            ariaLabel="Delete job"
            darkMode={darkMode}
          />
        </div>
      </div>
      <StatusIndicator
        status={job.status}
        date={job.date}
        darkMode={darkMode}
      />
    </div>
  );
};

export default JobCard;
