// Tap handling for all clickable elements
document.addEventListener('DOMContentLoaded', function() {
  // Add touch event handlers to all interactive elements
  const clickableElements = document.querySelectorAll('a, button, input[type="button"], input[type="submit"], .clickable, [onclick]');
  
  clickableElements.forEach(element => {
    // Add a class for styling
    element.classList.add('touch-enabled');
    
    // Add touch handlers
    element.addEventListener('touchstart', function() {
      this.setAttribute('data-touched', 'true');
    }, { passive: true });
    
    element.addEventListener('touchend', function(e) {
      // Only handle if touched (prevents ghost clicks)
      if (this.getAttribute('data-touched') === 'true') {
        this.removeAttribute('data-touched');
        
        // Execute standard click handler or href navigation
        if (typeof this.onclick === 'function') {
          e.preventDefault();
          this.onclick();
        } else if (this.tagName.toLowerCase() === 'a' && this.getAttribute('href')) {
          // Let the browser handle the navigation naturally
        }
      }
    }, { passive: false });
  });
  
  // Fix modal handling - ensure any modal close button properly removes modal-open class
  const modalCloseButtons = document.querySelectorAll('.close-popup, [data-dismiss="modal"]');
  modalCloseButtons.forEach(button => {
    button.addEventListener('click', function() {
      document.body.classList.remove('modal-open');
    });
  });
  
  // Handle ESC key to close modals
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.body.classList.contains('modal-open')) {
      document.body.classList.remove('modal-open');
      // Try to find and click the first close button if present
      const closeButton = document.querySelector('.close-popup');
      if (closeButton) closeButton.click();
    }
  });
});