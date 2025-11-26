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

// Secret Admin Button - Press Ctrl+Shift+A to reveal
(function(){
  let adminButtonAdded = false;
  
  document.addEventListener('keydown', function(e) {
    // Check for Ctrl+Shift+A (or Cmd+Shift+A on Mac)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'A') {
      e.preventDefault();
      
      if (adminButtonAdded) return; // Already added
      
      // Find the navigation element
      const nav = document.querySelector('.navbar nav');
      if (!nav) return;
      
      // Create admin link
      const adminLink = document.createElement('a');
      adminLink.href = 'admin.html';
      adminLink.textContent = '🔒 Admin';
      adminLink.style.backgroundColor = '#dc3545';
      adminLink.style.color = 'white';
      adminLink.title = 'Admin Dashboard';
      
      // Add to navigation
      nav.appendChild(adminLink);
      adminButtonAdded = true;
      
      // Optional: Show a subtle notification
      const notification = document.createElement('div');
      notification.textContent = 'Admin mode activated';
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #dc3545;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 9999;
        font-weight: bold;
      `;
      document.body.appendChild(notification);
      
      // Remove notification after 2 seconds
      setTimeout(() => {
        notification.style.transition = 'opacity 0.3s';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
      }, 2000);
    }
  });
})();