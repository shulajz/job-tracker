import React from "react";
import { Briefcase, Search, Filter, Plus, Sun, Moon } from "lucide-react";
import Button from "../UI/Button";
import IconButton from "../UI/IconButton";
import GradientText from "../UI/GradientText";

const Header = ({
  darkMode,
  filters,
  setFilters,
  toggleDarkMode,
  openFilterModal,
  openAddModal,
}) => {
  return (
    <header
      className={`relative z-10 py-4 px-6 ${
        darkMode
          ? "bg-gray-800/70 backdrop-blur-sm"
          : "bg-white/70 backdrop-blur-sm"
      } shadow-lg transition-colors duration-200`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg shadow-lg">
            <Briefcase className="text-white" />
          </div>
          <span className="text-xl font-bold">
            <GradientText>DevJobTracker</GradientText>
            <span className="ml-1 text-xs py-0.5 px-1.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md font-normal align-top">
              PRO
            </span>
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search
                size={16}
                className={`text-gray-400 group-hover:${
                  darkMode ? "text-blue-400" : "text-blue-500"
                } transition-colors duration-200`}
              />
            </div>
            <input
              type="text"
              placeholder="Search jobs..."
              value={filters.search}
              onChange={(e) =>
                setFilters({ ...filters, search: e.target.value })
              }
              className={`py-2 pl-10 pr-4 rounded-full ${
                darkMode
                  ? "bg-gray-700 text-white placeholder:text-gray-400 focus:bg-gray-600 group-hover:bg-gray-600"
                  : "bg-gray-100 focus:bg-white group-hover:bg-gray-50"
              } text-sm w-48 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
            />
          </div>
          <IconButton
            icon={
              <Filter
                size={18}
                className={`${filters.status !== "all" ? "text-blue-500" : ""}`}
              />
            }
            onClick={openFilterModal}
            className={`p-2 rounded-full ${
              darkMode
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-100 hover:bg-gray-200"
            } hover:scale-105 duration-200 transform relative`}
            darkMode={darkMode}
            ariaLabel="Filter jobs"
          >
            {filters.status !== "all" && (
              <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full"></span>
            )}
          </IconButton>
          <Button
            onClick={openAddModal}
            variant="primary"
            className="py-2 px-4 transform hover:scale-105"
            icon={<Plus size={18} />}
          >
            Add Job
          </Button>
          <IconButton
            icon={darkMode ? <Sun size={18} /> : <Moon size={18} />}
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${
              darkMode
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-100 hover:bg-gray-200"
            } hover:scale-105 duration-200 transform relative overflow-hidden`}
            darkMode={darkMode}
            ariaLabel={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
