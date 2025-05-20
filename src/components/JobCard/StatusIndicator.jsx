import React from "react";
import { getCardAccentColor } from "../utils/colors";

const StatusIndicator = ({ status, date, darkMode }) => {
  const colors = getCardAccentColor(status, darkMode);

  return (
    <div className={`mt-2 text-xs ${colors.text} flex items-center`}>
      <div
        className={`w-2 h-2 rounded-full mr-1.5 ${colors.border.replace(
          "border",
          "bg"
        )}`}
      ></div>
      Applied: {new Date(date).toLocaleDateString()}
    </div>
  );
};

export default StatusIndicator;
