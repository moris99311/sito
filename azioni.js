// Hamburger menu mobile – versione robusta per iOS/Safari
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!menuToggle || !navLinks) return;

  // Migliora accessibilità
  menuToggle.setAttribute('type', 'button');
  menuToggle.setAttribute('aria-expanded', 'false');
  // Se vuoi, collega esplicitamente il controllo alla lista (assegna un id alla UL)
  // navLinks.id = navLinks.id || 'main-menu';
  // menuToggle.setAttribute('aria-controls', navLinks.id);

  const openMenu = () => {
    navLinks.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    navLinks.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  };

  const toggleMenu = () => {
    if (navLinks.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  // Click standard
  menuToggle.addEventListener('click', toggleMenu, { passive: true });

  // Fallback iOS: alcune versioni di Safari gestiscono male il click
  // Usiamo touchend con preventDefault per evitare doppio evento o mancata attivazione
  menuToggle.addEventListener('touchend', function (e) {
    e.preventDefault();        // consente il toggle senza ritardi
    toggleMenu();
  }, { passive: false });

  // Chiudi menu quando clicchi una voce (solo in mobile)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 767) closeMenu();
    }, { passive: true });
  });

  // Optional: chiudi con ESC (accessibilità)
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      closeMenu();
      menuToggle.focus();
    }
  }, { passive: true });

  // Animazione fade-in per gli elementi quando entrano nel viewport
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('fade-in');
    });
  }, observerOptions);

  document.querySelectorAll('.menu-item').forEach(item => observer.observe(item));
});
