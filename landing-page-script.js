document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('#theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      body.setAttribute('data-theme', 'dark');
      themeToggle.checked = true;
    } else {
      body.setAttribute('data-theme', 'light');
      themeToggle.checked = false;
    }

    themeToggle.addEventListener('change', function() {
      body.classList.add('theme-transition');
      
      if (this.checked) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }

      setTimeout(() => {
        body.classList.remove('theme-transition');
      }, 500);
    });

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    mobileMenuBtn.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
  });