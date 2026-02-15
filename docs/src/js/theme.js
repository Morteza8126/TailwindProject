// icons
const moonIcon = document.querySelector(".moon");
const sunIcon = document.querySelector(".sun");
const themeToggleBtn = document.getElementById("darkToggle");
const html = document.documentElement;
// theme vars :

const userThme = localStorage.getItem("theme");
const systemThme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// ✅ Load preference on page load
if (userThme === "dark" || (!userThme && systemThme)) {
  html.classList.add("dark");
  sunIcon.classList.add("hidden");
} else {
  html.classList.remove("dark");
  moonIcon.classList.add("hidden");
}

// ✅ helper to update icons
function updateIcons() {
  if (html.classList.contains("dark")) {
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  } else {
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  }
}

// ✅ Toggle on button click
themeToggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
  updateIcons();
});