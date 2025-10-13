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

// Employment form (client-side only; shows a success message)
function handleApplicationSubmit(e){
  e.preventDefault();
  const form = e.target;
  const out = document.getElementById('apply-success');
  out.textContent = "Thanks! Your application has been recorded on this page. We'll contact you soon.";
  out.className = 'card';
  form.reset();

  // If you later wire to a backend, capture values like:
  // const data = Object.fromEntries(new FormData(form).entries());
  // console.log('Form data:', data);
}
