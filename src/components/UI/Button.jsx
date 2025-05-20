import React from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  icon = null,
  darkMode,
  ...props
}) => {
  const baseClasses =
    "flex items-center rounded-full font-medium transition-all duration-200";

  const sizeClasses = {
    sm: "py-1 px-3 text-xs",
    md: "py-2 px-4 text-sm",
    lg: "py-3 px-6 text-base",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg transform hover:scale-105",
    secondary: darkMode
      ? "bg-gray-700 hover:bg-gray-600 text-white"
      : "bg-gray-200 hover:bg-gray-300 text-gray-800",
    outline: darkMode
      ? "border border-gray-600 hover:bg-gray-700 text-gray-300"
      : "border border-gray-300 hover:bg-gray-100 text-gray-700",
  };

  let variantClass =
    typeof variantClasses[variant] === "function"
      ? variantClasses[variant](darkMode)
      : variantClasses[variant];

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClass} ${className}`}
      {...props}
    >
      {icon && <span className="mr-1.5">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
