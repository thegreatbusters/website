window.addEventListener("load", function () {
  // Hide loading screen after 5 seconds
  setTimeout(() => {
      const loadingScreen = document.getElementById("loading");
      loadingScreen.style.opacity = "0"; // Start fade-out effect

      setTimeout(() => {
          loadingScreen.style.display = "none"; // Hide loading screen after fading out
      }, 1000);
  }, 5000); // Keep loading for 5 seconds
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById("dark-light-toggle");
themeToggle.addEventListener("change", function () {
  document.body.classList.toggle("dark-mode");
});

// Responsive Navigation Toggle
const navToggle = document.querySelector(".nav-toggle");
navToggle.addEventListener("click", function () {
  const navMenu = document.querySelector("nav ul");
  navMenu.classList.toggle("active");
});
