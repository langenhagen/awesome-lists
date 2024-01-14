/**
 * Code to switch color themes.
 *
 * author: andreasl
 */
function setTheme(theme) {
  document.body.className = theme;
  sessionStorage.setItem("theme", theme);

  const themeIcon = document.getElementById("theme-switcher");
  const currentTheme = document.body.className;
  themeIcon.innerHTML = currentTheme === "dark" ? "🌙" : "☀️";
}

function toggleTheme() {
  setTheme(document.body.className === "dark" ? "light" : "dark");
}

function loadTheme() {
  const storedTheme = sessionStorage.getItem("theme") || "dark";
  setTheme(storedTheme);
}

// Reload the theme when loading the page or when the page was retrieved from back/forward cache.
window.addEventListener("pageshow", function (event) {
  loadTheme();
});
