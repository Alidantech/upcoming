const buttons = document.querySelectorAll('button[title]');

buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.removeAttribute('title');
  });

  button.addEventListener('mouseleave', () => {
    const tooltip = button.getAttribute('data-tooltip');
    button.setAttribute('title', tooltip);
  });
});


// // Check user's theme on page load
// (function() {
//   const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
//   const savedTheme = localStorage.getItem('theme');
//   const root = document.documentElement;
//   const initialTheme = savedTheme || (prefersDarkTheme ? 'dark' : 'light');
//   root.setAttribute('data-theme', initialTheme);
//   const rootCSSFile = initialTheme === 'dark' ? 'root-dark.css' : 'root-light.css';
//   loadCSS(rootCSSFile);
// });

// // Changes the theme of the page when a user clicks the theme toggle button
// const themeToggle = document.getElementById('theme-toggle');
// themeToggle.addEventListener('click', () => {
//   const root = document.documentElement;
//   const currentTheme = root.getAttribute('data-theme');
//   const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

//   root.setAttribute('data-theme', newTheme);

//   // Save the theme preference in localStorage
//   localStorage.setItem('theme', newTheme);

//   // Load the corresponding root CSS file based on the selected theme
//   const rootCSSFile = newTheme === 'dark' ? 'root-dark.css' : 'root-light.css';
//   loadCSS(rootCSSFile);
// });

// // Function to dynamically load a CSS file
// function loadCSS(filename) {
//   const link = document.createElement('link');
//   link.href = `/static/css/${filename}`;  // Modify the path to the CSS file
//   link.rel = 'stylesheet';
//   link.type = 'text/css';
//   document.head.appendChild(link);
// }

// nav bar toggle button
// Get references to the navbar and button elements
const navbar = document.querySelector(".side-content");
const toggleBtn = document.getElementById("toggle-navbar-btn");
let navbarVisible = false;

const outsideClickListener = event => {
    if (navbarVisible && !navbar.contains(event.target) && !toggleBtn.contains(event.target)) {
        navbar.style.visibility = "hidden"; // Hide the navbar
        navbar.classList.remove("slide-left");
        navbar.classList.toggle('slide-right');
        navbarVisible = false;
        removeClickListener();
    }
};

const removeClickListener = () => {
    document.removeEventListener('click', outsideClickListener);
};

// Add a click event listener to the button
toggleBtn.addEventListener("click", function () {
  // Toggle the visibility of the navbar
  if (navbar.style.visibility === "hidden" || navbar.style.visibility === "") {
    navbar.style.visibility = "visible"; // Show the navbar
    navbar.classList.remove("slide-right");
    navbar.classList.toggle('slide-left');
    navbarVisible = true;
    document.addEventListener('click', outsideClickListener);
  } else {
    navbar.style.visibility = "hidden"; // Hide the navbar
    navbar.classList.remove("slide-left");
    navbar.classList.toggle('slide-right');
    navbarVisible = false;
    removeClickListener();
  }
});

var header = document.getElementById('heading');

document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});

// Get references to the two div elements
const topDiv = document.querySelector('.heading');
const bottomDiv = document.querySelector('.song-player');

// Add a scroll event listener to the window
window.addEventListener('scroll', function () {
    // Calculate the scroll position
    const scrollPosition = window.scrollY;
    
    // Determine the scroll threshold for adding/removing classes
    const scrollThreshold = 110; // Adjust this value as needed
    
    // Add 'scrolled' class when the user scrolls down
    if (scrollPosition > scrollThreshold) {
        topDiv.classList.add('scrolled');
    } else {
        topDiv.classList.remove('scrolled');
    }

    // Check if the user has reached the bottom of the page
    if (scrollPosition + window.innerHeight >= document.body.clientHeight) {
        bottomDiv.classList.add('reached-bottom');
    } else {
        bottomDiv.classList.remove('reached-bottom');
    }
});