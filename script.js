document.addEventListener('DOMContentLoaded', () => {
  // ----- MENÚ HAMBURGUESA -----
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const links = document.querySelectorAll('nav ul li a');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    });
  });

  // ----- CERTIFICACIONES -----
  const certGrid = document.querySelector(".cert-grid"); // ahora por clase
  const certCards = certGrid.querySelectorAll(".cert-card");
  const showMoreBtn = document.getElementById("showMoreBtn");

  const maxVisible = 4; 
  let expanded = false;

  // Ocultar los que exceden el límite
  certCards.forEach((card, index) => {
    if (index >= maxVisible) {
      card.style.display = "none";
    }
  });

  // Evento de mostrar más/menos con animación
  showMoreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    expanded = !expanded;

    certCards.forEach((card, index) => {
      if (index >= maxVisible) {
        if (expanded) {
          card.style.display = "flex";
          card.style.opacity = 0;
          setTimeout(() => card.style.opacity = 1, 50);
        } else {
          card.style.opacity = 0;
          setTimeout(() => card.style.display = "none", 300);
        }
      }
    });

    showMoreBtn.textContent = expanded ? "Show less" : "Show more";
  });
});
