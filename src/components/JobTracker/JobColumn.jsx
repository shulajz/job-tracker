import React from "react";
import JobCard from "../JobCard";
import EmptyState from "./EmptyState";
import { getStatusColor, getStatusGlow, getStatusIcon } from "../utils/colors";

const JobColumn = ({
  status,
  jobs,
  darkMode,
  onDrop,
  onDragOver,
  onEditJob,
  onDeleteJob,
  handleDragStart,
  onAddJob,
}) => {
  // Calculate the exact height needed for 4 cards
  // Each card is 100px high, with 12px spacing (space-y-3) between them,
  // and 12px padding (p-3) on top and bottom
  // Total: (4 × 100px) + (3 × 12px) + (2 × 12px) = 400 + 36 + 24 = 460px
  const columnHeight = "460px";

  return (
    <div className="flex flex-col h-full transform transition-all duration-300 hover:scale-[1.02]">
      <div
        className={`rounded-t-lg bg-gradient-to-r ${getStatusColor(
          status,
          darkMode
        )} py-3 px-4 text-white flex justify-between items-center shadow-lg ${getStatusGlow(
          status,
          darkMode
        )}`}
      >
        <h2 className="font-medium flex items-center text-lg">
          {getStatusIcon(status)}
          {status}
        </h2>
        <span className="px-2 py-1 rounded-full text-xs bg-white/30 backdrop-blur-md text-white font-medium border border-white/20">
          {jobs.length}
        </span>
      </div>
      <div
        className={`rounded-b-lg ${
          darkMode
            ? "bg-gray-500/90 backdrop-blur-sm"
            : "bg-white/90 backdrop-blur-sm"
        } p-3 shadow-md overflow-y-auto border border-t-0 ${
          darkMode ? "border-gray-500" : "border-gray-100"
        }`}
        style={{
          height: columnHeight,
          scrollbarWidth: "thin",
          scrollbarColor: darkMode ? "#9CA3AF #6B7280" : "#D1D5DB #F3F4F6",
        }}
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        {jobs.length === 0 ? (
          <EmptyState status={status} darkMode={darkMode} onAddJob={onAddJob} />
        ) : (
          <div className="space-y-3 pr-1">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                darkMode={darkMode}
                onEdit={() => onEditJob(job)}
                onDelete={() => onDeleteJob(job.id)}
                handleDragStart={handleDragStart}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobColumn;
