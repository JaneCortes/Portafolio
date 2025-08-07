document.addEventListener('DOMContentLoaded', () => {
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
});



