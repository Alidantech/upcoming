 /*
*Adds a class of header scrolled when a user starts scrolling
*/ 
  document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 0) {
      document.querySelector('header').classList.add('scrolled');
    } else {
      document.querySelector('header').classList.remove('scrolled');
    }
  });
});

// Check user's theme on page load
(function() {
  const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  const root = document.documentElement;
  const initialTheme = savedTheme || (prefersDarkTheme ? 'dark' : 'light');
  root.setAttribute('data-theme', initialTheme);
  const rootCSSFile = initialTheme === 'dark' ? 'root-dark.css' : 'root-light.css';
  loadCSS(rootCSSFile);
})();

// Changes the theme of the page when a user clicks the theme toggle button
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  const root = document.documentElement;
  const currentTheme = root.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  root.setAttribute('data-theme', newTheme);

  // Save the theme preference in localStorage
  localStorage.setItem('theme', newTheme);

  // Load the corresponding root CSS file based on the selected theme
  const rootCSSFile = newTheme === 'dark' ? 'root-dark.css' : 'root-light.css';
  loadCSS(rootCSSFile);
});

// Function to dynamically load a CSS file
function loadCSS(filename) {
  const link = document.createElement('link');
  link.href = `/static/css/${filename}`;  // Modify the path to the CSS file
  link.rel = 'stylesheet';
  link.type = 'text/css';
  document.head.appendChild(link);
}
