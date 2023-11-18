function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-theme");

  // Save theme preference to localStorage
  const isDarkMode = body.classList.contains("dark-theme");
  localStorage.setItem("darkMode", isDarkMode);
}

// Check theme preference from localStorage
const savedDarkMode = localStorage.getItem("darkMode");

if (savedDarkMode === "true") {
  document.body.classList.add("dark-theme");
}