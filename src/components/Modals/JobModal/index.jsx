import React, { useState } from "react";
import { X } from "lucide-react";
import Backdrop from "../../UI/Backdrop";
import GradientText from "../../UI/GradientText";
import FormField from "./FormField";
import FormActions from "./FormActions";
import IconButton from "../../UI/IconButton";

const JobModal = ({ onClose, onSubmit, job, darkMode }) => {
  const initialState = job
    ? { ...job }
    : {
        company: "",
        title: "",
        status: "Applied",
        date: new Date().toISOString().split("T")[0],
      };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const calendarIcon = (
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
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      ></path>
    </svg>
  );

  return (
    <Backdrop onClick={onClose}>
      <div
        className={`${
          darkMode
            ? "bg-gray-800/95 backdrop-blur-sm"
            : "bg-white/95 backdrop-blur-sm"
        } rounded-lg shadow-xl w-full max-w-md transform transition-all duration-300 ease-in-out border ${
          darkMode ? "border-gray-700" : "border-gray-200"
        }`}
        onClick={handleModalClick}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold">
            <GradientText>{job ? "Edit Job" : "Add New Job"}</GradientText>
          </h2>
          <IconButton
            icon={<X size={20} />}
            onClick={onClose}
            darkMode={darkMode}
            ariaLabel="Close modal"
          />
        </div>

        <form onSubmit={handleSubmit} className="p-5">
          <div className="space-y-4">
            <FormField
              label="Company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Google"
              required
              darkMode={darkMode}
            />

            <FormField
              label="Job Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Frontend Developer"
              required
              darkMode={darkMode}
            />

            <FormField
              label="Status"
              type="select"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
              darkMode={darkMode}
              options={[
                { value: "Applied", label: "Applied" },
                { value: "Interviewing", label: "Interviewing" },
                { value: "Offer", label: "Offer" },
                { value: "Rejected", label: "Rejected" },
              ]}
            />

            <FormField
              label="Date Applied"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              darkMode={darkMode}
              icon={calendarIcon}
            />

            <FormActions
              onClose={onClose}
              isEditing={!!job}
              darkMode={darkMode}
            />
          </div>
        </form>
      </div>
    </Backdrop>
  );
};

export default JobModal;
