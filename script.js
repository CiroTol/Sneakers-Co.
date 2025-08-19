function copyright() {
  alert(
    "Desarrollado por: Ciro Toledo --- Mail: cirotoledo2009@hotmail.com --- Todos los derechos reservados. © Este trabajo ha sido elaborado con fines exclusivamente académicos y para cumplir con los requisitos de la asignatura correspondiente. La información contenida en este documento ha sido obtenida de fuentes consideradas confiables, sin intención de infringir derechos de autor ni de distribuir material protegido. Cualquier uso que se haga de este trabajo fuera del ámbito escolar será responsabilidad exclusiva del usuario.");
}
  

let claro = true;

function oscuro() {
  document.documentElement.classList.toggle("dark", claro);
  claro = !claro;
}


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");
  counters.forEach((counter) => {
    const target = parseInt(counter.textContent.replace(/[^0-9]/g, ""));
    const increment = target / 50;
    let current = 0;

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        if (counter.textContent.includes("+")) {
          counter.textContent = Math.floor(current).toLocaleString() + "+";
        } else {
          counter.textContent = Math.floor(current).toLocaleString();
        }
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent =
          target.toLocaleString() +
          (counter.textContent.includes("+") ? "+" : "");
      }
    };
    updateCounter();
  });
}

const observerOptions = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounters();
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const statsSection = document.querySelector(".stats-section");
if (statsSection) {
  observer.observe(statsSection);
}

