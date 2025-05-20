export const loadInitialData = () => {
  try {
    const savedJobs = localStorage.getItem("jobTrackerJobs");

    if (savedJobs) {
      return JSON.parse(savedJobs);
    }
  } catch (error) {
    console.error("Error loading from localStorage:", error);
  }

  // Fallback demo data if nothing in localStorage
  const demoJobs = [
    {
      id: 1,
      company: "TechCorp",
      title: "Frontend Developer",
      status: "Applied",
      date: "2025-05-10",
    },
    {
      id: 2,
      company: "DevStartup",
      title: "Full Stack Engineer",
      status: "Interviewing",
      date: "2025-05-05",
    },
    {
      id: 3,
      company: "BigTech Inc",
      title: "Senior React Developer",
      status: "Offer",
      date: "2025-04-28",
    },
    {
      id: 4,
      company: "CodeWizards",
      title: "React Native Developer",
      status: "Applied",
      date: "2025-05-15",
    },
    {
      id: 5,
      company: "TechGiant",
      title: "Frontend Engineer",
      status: "Rejected",
      date: "2025-05-01",
    },
    {
      id: 6,
      company: "StartupXYZ",
      title: "UI Developer",
      status: "Rejected",
      date: "2025-04-22",
    },
    {
      id: 7,
      company: "WebCorp",
      title: "JavaScript Developer",
      status: "Applied",
      date: "2025-05-17",
    },
    {
      id: 8,
      company: "AppMakers",
      title: "Frontend Architect",
      status: "Applied",
      date: "2025-05-18",
    },
    {
      id: 9,
      company: "SoftSolutions",
      title: "React Developer",
      status: "Applied",
      date: "2025-05-19",
    },
    {
      id: 10,
      company: "DevTeam",
      title: "Senior Frontend Developer",
      status: "Interviewing",
      date: "2025-05-02",
    },
    {
      id: 11,
      company: "CodeCrafters",
      title: "UI Engineer",
      status: "Interviewing",
      date: "2025-05-03",
    },
    {
      id: 12,
      company: "WebWizards",
      title: "Frontend Lead",
      status: "Rejected",
      date: "2025-04-20",
    },
  ];

  try {
    localStorage.setItem("jobTrackerJobs", JSON.stringify(demoJobs));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }

  return demoJobs;
};

export const loadDarkModePreference = () => {
  try {
    const savedDarkMode = localStorage.getItem("jobTrackerDarkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  } catch (error) {
    console.error("Error loading dark mode preference:", error);
    return false;
  }
};

export const loadFilterSettings = () => {
  try {
    const savedFilters = localStorage.getItem("jobTrackerFilters");
    return savedFilters
      ? JSON.parse(savedFilters)
      : { search: "", status: "all" };
  } catch (error) {
    console.error("Error loading filter settings:", error);
    return { search: "", status: "all" };
  }
};

export const saveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error);
  }
};
