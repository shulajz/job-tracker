import React from "react";

// Get color for status
export const getStatusColor = (status, isDark) => {
  if (status === "Applied") {
    return isDark ? "from-blue-600 to-cyan-500" : "from-blue-500 to-cyan-400";
  } else if (status === "Interviewing") {
    return isDark
      ? "from-purple-600 to-pink-500"
      : "from-purple-500 to-pink-400";
  } else if (status === "Offer") {
    return isDark
      ? "from-emerald-600 to-teal-500"
      : "from-emerald-500 to-teal-400";
  } else if (status === "Rejected") {
    return isDark ? "from-red-600 to-orange-500" : "from-red-500 to-orange-400";
  }
};

// Get border glow for columns
export const getStatusGlow = (status, isDark) => {
  if (status === "Applied") {
    return isDark
      ? "shadow-[0_0_15px_rgba(59,130,246,0.5)]"
      : "shadow-[0_0_15px_rgba(96,165,250,0.5)]";
  } else if (status === "Interviewing") {
    return isDark
      ? "shadow-[0_0_15px_rgba(147,51,234,0.5)]"
      : "shadow-[0_0_15px_rgba(168,85,247,0.5)]";
  } else if (status === "Offer") {
    return isDark
      ? "shadow-[0_0_15px_rgba(5,150,105,0.5)]"
      : "shadow-[0_0_15px_rgba(16,185,129,0.5)]";
  } else if (status === "Rejected") {
    return isDark
      ? "shadow-[0_0_15px_rgba(220,38,38,0.5)]"
      : "shadow-[0_0_15px_rgba(239,68,68,0.5)]";
  }
};

// Get card accent colors
export const getCardAccentColor = (status, isDark) => {
  if (status === "Applied") {
    return {
      border: isDark ? "border-blue-600" : "border-blue-500",
      bg: isDark
        ? "from-blue-600/10 to-cyan-500/10"
        : "from-blue-500/10 to-cyan-400/10",
      text: isDark ? "text-blue-400" : "text-blue-600",
    };
  } else if (status === "Interviewing") {
    return {
      border: isDark ? "border-purple-600" : "border-purple-500",
      bg: isDark
        ? "from-purple-600/10 to-pink-500/10"
        : "from-purple-500/10 to-pink-400/10",
      text: isDark ? "text-purple-400" : "text-purple-600",
    };
  } else if (status === "Offer") {
    return {
      border: isDark ? "border-emerald-600" : "border-emerald-500",
      bg: isDark
        ? "from-emerald-600/10 to-teal-500/10"
        : "from-emerald-500/10 to-teal-400/10",
      text: isDark ? "text-emerald-400" : "text-emerald-600",
    };
  } else if (status === "Rejected") {
    return {
      border: isDark ? "border-red-600" : "border-red-500",
      bg: isDark
        ? "from-red-600/10 to-orange-500/10"
        : "from-red-500/10 to-orange-400/10",
      text: isDark ? "text-red-400" : "text-red-600",
    };
  }
};

// Get status icons
export const getStatusIcon = (status) => {
  if (status === "Applied") {
    return (
      <svg
        className="w-5 h-5 mr-2"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  } else if (status === "Interviewing") {
    return (
      <svg
        className="w-5 h-5 mr-2"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
      </svg>
    );
  } else if (status === "Offer") {
    return (
      <svg
        className="w-5 h-5 mr-2"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  } else if (status === "Rejected") {
    return (
      <svg
        className="w-5 h-5 mr-2"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  }
};

// Get empty state background color
export const getEmptyStateBgColor = (status, darkMode) => {
  if (status === "Applied") {
    return darkMode
      ? "from-blue-700/30 to-cyan-600/30"
      : "from-blue-500/20 to-cyan-400/20";
  } else if (status === "Interviewing") {
    return darkMode
      ? "from-purple-700/30 to-pink-600/30"
      : "from-purple-500/20 to-pink-400/20";
  } else if (status === "Offer") {
    return darkMode
      ? "from-emerald-700/30 to-teal-600/30"
      : "from-emerald-500/20 to-teal-400/20";
  } else if (status === "Rejected") {
    return darkMode
      ? "from-red-700/30 to-orange-600/30"
      : "from-red-500/20 to-orange-400/20";
  }
};

// Get empty state icon color
export const getEmptyStateIconColor = (status, darkMode) => {
  if (status === "Applied") {
    return darkMode ? "text-blue-400" : "text-blue-500";
  } else if (status === "Interviewing") {
    return darkMode ? "text-purple-400" : "text-purple-500";
  } else if (status === "Offer") {
    return darkMode ? "text-emerald-400" : "text-emerald-500";
  } else if (status === "Rejected") {
    return darkMode ? "text-red-400" : "text-red-500";
  }
};
