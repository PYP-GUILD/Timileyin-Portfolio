// Small JS for nav toggle and contact mailto fallback
document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');

  // Mobile nav toggle
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('show', !expanded); // use CSS class instead of inline style
    });
  }

  // Contact form mailto fallback
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = encodeURIComponent(form.name.value || '');
      var email = encodeURIComponent(form.email.value || '');
      var message = encodeURIComponent(form.message.value || '');
      var subject = encodeURIComponent('Portfolio contact from ' + (form.name.value || 'Website'));
      var body = 'Name: ' + name + '%0D%0AEmail: ' + email + '%0D%0A%0D%0A' + message;
      // mailto fallback — opens user's email client with prefilled body
      window.location.href = 'mailto:timileyinalaafin1@gmail.com?subject=' + subject + '&body=' + body;
    });
  }
});
