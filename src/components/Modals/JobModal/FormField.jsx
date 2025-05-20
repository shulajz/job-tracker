import React from "react";
import GradientText from "../../UI/GradientText";

const FormField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  darkMode,
  icon = null,
  options = [], // For select fields
}) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        <GradientText>{label}</GradientText>
      </label>
      <div className="relative">
        {type === "select" ? (
          <>
            <select
              name={name}
              value={value}
              onChange={onChange}
              className={`w-full rounded-lg border appearance-none ${
                darkMode
                  ? "bg-gray-700 border-gray-600 focus:bg-gray-600"
                  : "bg-white border-gray-300"
              } p-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
              required={required}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </>
        ) : (
          <>
            <input
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              required={required}
              className={`w-full rounded-lg border ${
                darkMode
                  ? "bg-gray-700 border-gray-600 focus:bg-gray-600"
                  : "bg-white border-gray-300"
              } p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
            />
            {icon && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                {icon}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FormField;
