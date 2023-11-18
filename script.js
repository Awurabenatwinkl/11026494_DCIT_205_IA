document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('toggle-theme');
  const lightMode = document.getElementById('light-mode');
  const darkMode = document.getElementById('dark-mode');

  // Check the user's preference from previous visits
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Set initial theme based on user preference
  document.body.classList.toggle('dark-theme', prefersDarkMode);
  themeToggle.checked = prefersDarkMode;

  themeToggle.addEventListener('change', function () {
    // Toggle the dark theme class on the body
    document.body.classList.toggle('dark-theme', themeToggle.checked);

    // Update the UI based on the theme
    if (themeToggle.checked) {
      lightMode.classList.remove('active');
      darkMode.classList.add('active');
    } else {
      lightMode.classList.add('active');
      darkMode.classList.remove('active');
    }
  });
});
