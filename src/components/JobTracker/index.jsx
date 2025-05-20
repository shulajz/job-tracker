import React, { useState, useEffect } from "react";
import Header from "./Header";
import JobColumn from "./JobColumn";
import JobModal from "../Modals/JobModal";
import FilterModal from "../Modals/FilterModal";
import {
  loadInitialData,
  loadDarkModePreference,
  loadFilterSettings,
  saveToLocalStorage,
} from "../utils/localStorage";

const JobTracker = () => {
  const [jobs, setJobs] = useState(loadInitialData());
  const [darkMode, setDarkMode] = useState(loadDarkModePreference());
  const [filters, setFilters] = useState(loadFilterSettings());
  const [showAddModal, setShowAddModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  useEffect(() => {
    saveToLocalStorage("jobTrackerJobs", jobs);
  }, [jobs]);

  useEffect(() => {
    saveToLocalStorage("jobTrackerDarkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    saveToLocalStorage("jobTrackerFilters", filters);
  }, [filters]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addJob = (job) => {
    const newJob = {
      ...job,
      id: jobs.length > 0 ? Math.max(...jobs.map((j) => j.id)) + 1 : 1,
    };
    setJobs([...jobs, newJob]);
    setShowAddModal(false);
  };

  const updateJob = (updatedJob) => {
    setJobs(jobs.map((job) => (job.id === updatedJob.id ? updatedJob : job)));
    setEditingJob(null);
    setShowAddModal(false);
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const handleEditJob = (job) => {
    setEditingJob(job);
    setShowAddModal(true);
  };

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("jobId", id);
  };

  const handleDrop = (e, status) => {
    e.preventDefault();
    const jobId = parseInt(e.dataTransfer.getData("jobId"));
    const updatedJobs = jobs.map((job) => {
      if (job.id === jobId) {
        return { ...job, status };
      }
      return job;
    });
    setJobs(updatedJobs);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Filter jobs
  const filteredJobs = jobs.filter((job) => {
    // Search filter
    const matchesSearch =
      filters.search === "" ||
      job.company.toLowerCase().includes(filters.search.toLowerCase()) ||
      job.title.toLowerCase().includes(filters.search.toLowerCase());

    // Status filter
    const matchesStatus =
      filters.status === "all" || job.status === filters.status;

    return matchesSearch && matchesStatus;
  });

  // Group jobs by status
  const applied = filteredJobs.filter((job) => job.status === "Applied");
  const interviewing = filteredJobs.filter(
    (job) => job.status === "Interviewing"
  );
  const offers = filteredJobs.filter((job) => job.status === "Offer");
  const rejected = filteredJobs.filter((job) => job.status === "Rejected");

  // Modal open/close handlers
  const openAddModal = () => setShowAddModal(true);
  const closeAddModal = () => {
    setShowAddModal(false);
    setEditingJob(null);
  };
  const openFilterModal = () => setShowFilterModal(true);
  const closeFilterModal = () => setShowFilterModal(false);

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800"
      }`}
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 ${
            darkMode ? "bg-blue-500" : "bg-blue-300"
          }`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10 ${
            darkMode ? "bg-purple-500" : "bg-purple-300"
          }`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-10 ${
            darkMode ? "bg-indigo-500" : "bg-indigo-300"
          }`}
        ></div>
      </div>

      <Header
        darkMode={darkMode}
        filters={filters}
        setFilters={setFilters}
        toggleDarkMode={toggleDarkMode}
        openFilterModal={openFilterModal}
        openAddModal={openAddModal}
      />

      <main className="relative z-10 py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          <JobColumn
            status="Applied"
            jobs={applied}
            darkMode={darkMode}
            onDrop={(e) => handleDrop(e, "Applied")}
            onDragOver={handleDragOver}
            onEditJob={handleEditJob}
            onDeleteJob={deleteJob}
            handleDragStart={handleDragStart}
            onAddJob={openAddModal}
          />

          <JobColumn
            status="Interviewing"
            jobs={interviewing}
            darkMode={darkMode}
            onDrop={(e) => handleDrop(e, "Interviewing")}
            onDragOver={handleDragOver}
            onEditJob={handleEditJob}
            onDeleteJob={deleteJob}
            handleDragStart={handleDragStart}
            onAddJob={openAddModal}
          />

          <JobColumn
            status="Offer"
            jobs={offers}
            darkMode={darkMode}
            onDrop={(e) => handleDrop(e, "Offer")}
            onDragOver={handleDragOver}
            onEditJob={handleEditJob}
            onDeleteJob={deleteJob}
            handleDragStart={handleDragStart}
            onAddJob={openAddModal}
          />

          <JobColumn
            status="Rejected"
            jobs={rejected}
            darkMode={darkMode}
            onDrop={(e) => handleDrop(e, "Rejected")}
            onDragOver={handleDragOver}
            onEditJob={handleEditJob}
            onDeleteJob={deleteJob}
            handleDragStart={handleDragStart}
            onAddJob={openAddModal}
          />
        </div>
      </main>

      {showAddModal && (
        <JobModal
          onClose={closeAddModal}
          onSubmit={editingJob ? updateJob : addJob}
          job={editingJob}
          darkMode={darkMode}
        />
      )}

      {showFilterModal && (
        <FilterModal
          onClose={closeFilterModal}
          filters={filters}
          setFilters={setFilters}
          darkMode={darkMode}
        />
      )}
    </div>
  );
};

export default JobTracker;
