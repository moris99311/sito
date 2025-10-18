document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!menuToggle || !navLinks) return;

  // Imposta attributi di accessibilitàaa
  navLinks.id = navLinks.id || 'main-menu';
  menuToggle.setAttribute('aria-controls', navLinks.id);
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('type', 'button');

  // Funzioni apertura/chiusura menu
  function openMenu() {
    navLinks.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    navLinks.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  function toggleMenu() {
    if (navLinks.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Usa solo l'evento click per toggle
  menuToggle.addEventListener('click', function(e) {
    toggleMenu();
  });

  // Chiudi menu se clicchi su un link interno solo in mobile
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 767) {
        closeMenu();
      }
    });
  });

  // Chiudi menu con ESC per accessibilità
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      closeMenu();
      menuToggle.focus();
    }
  });
});

