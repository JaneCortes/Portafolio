const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const links = document.querySelectorAll('nav ul li a');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// cerrar menú al seleccionar cualquier enlace
links.forEach(link => {
  link.addEventListener('click', () => {
    // cambiar activo
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // cerrar el menú si está abierto (solo en móvil)
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    }
  });
});
