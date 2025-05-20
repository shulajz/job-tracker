import React from "react";
import { Briefcase, Plus } from "lucide-react";
import Button from "../UI/Button";
import { getEmptyStateBgColor, getEmptyStateIconColor } from "../utils/colors";

const EmptyState = ({ status, darkMode, onAddJob }) => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="text-center py-8 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex justify-center mb-2">
          <div
            className={`p-4 rounded-full bg-gradient-to-br ${getEmptyStateBgColor(
              status,
              darkMode
            )}`}
          >
            <Briefcase
              size={28}
              className={getEmptyStateIconColor(status, darkMode)}
            />
          </div>
        </div>
        <p>No jobs in this stage</p>
        {status === "Applied" && (
          <Button
            onClick={onAddJob}
            variant="secondary"
            size="sm"
            className="mt-3"
            icon={<Plus size={16} />}
            darkMode={darkMode}
          >
            Add a job
          </Button>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
