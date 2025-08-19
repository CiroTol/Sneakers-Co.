let isDarkMode = false;
const themeIcon = document.getElementById("theme-icon");
const themeText = document.getElementById("theme-text");

function initTheme() {
  const savedTheme = localStorage.getItem("darkMode");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (savedTheme !== null) {
    isDarkMode = savedTheme === "true";
  } else {
    isDarkMode = systemPrefersDark;
  }

  applyTheme();
}

function copyright() {
    alert(
      "Desarrollado por: Ciro Toledo --- Mail: cirotoledo2009@hotmail.com --- Todos los derechos reservados. © Este trabajo ha sido elaborado con fines exclusivamente académicos y para cumplir con los requisitos de la asignatura correspondiente. La información contenida en este documento ha sido obtenida de fuentes consideradas confiables, sin intención de infringir derechos de autor ni de distribuir material protegido. Cualquier uso que se haga de este trabajo fuera del ámbito escolar será responsabilidad exclusiva del usuario.");
  }
    

function applyTheme() {
  const html = document.documentElement;

  if (isDarkMode) {
    html.classList.add("dark");
    themeIcon.className = "fas fa-sun";
    themeText.textContent = "Claro";
  } else {
    html.classList.remove("dark");
    themeIcon.className = "fas fa-moon";
    themeText.textContent = "Oscuro";
  }

  localStorage.setItem("darkMode", isDarkMode);
}

function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  applyTheme();

  const button = document.querySelector(".dark-mode-toggle");
  button.style.transform = "scale(0.95)";
  setTimeout(() => {
    button.style.transform = "scale(1)";
  }, 150);
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (localStorage.getItem("darkMode") === null) {
      isDarkMode = e.matches;
      applyTheme();
    }
  });

document.addEventListener("DOMContentLoaded", initTheme);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
