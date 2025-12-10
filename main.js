// JS for navigation toggle and contact form mailto fallback
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('main-nav'); // target nav by ID

  // Mobile navigation toggle
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', String(!isExpanded));
      navMenu.classList.toggle('show', !isExpanded); // toggle CSS class
    });
  }

  // Contact form mailto fallback
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = encodeURIComponent(contactForm.name.value || '');
      const email = encodeURIComponent(contactForm.email.value || '');
      const message = encodeURIComponent(contactForm.message.value || '');

      const subject = encodeURIComponent(
        'Portfolio contact from ' + (contactForm.name.value || 'Website')
      );
      const body =
        'Name: ' + name +
        '%0D%0AEmail: ' + email +
        '%0D%0A%0D%0A' + message;

      // Mailto fallback — opens user's email client with prefilled subject & body
      window.location.href =
        'mailto:timileyinalaafin1@gmail.com?subject=' + subject + '&body=' + body;
    });
  }
});
