// Simple JS for active nav highlight and demo form handling

// Highlight current page in the top nav
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach(a=>{
    const target = a.getAttribute('href');
    if ((path === '' && target.endsWith('index.html')) || target.endsWith(path)) {
      a.classList.add('active');
      a.setAttribute('aria-current','page');
    }
  });
})();


