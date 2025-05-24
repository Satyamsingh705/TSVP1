// Add touch event listeners for mobile devices
function addTouchSupport() {
    const clickableElements = document.querySelectorAll('a, button, .clickable, [onclick]');
    
    clickableElements.forEach(element => {
        element.addEventListener('touchstart', function(e) {
            // Prevent double-firing with click events
            e.preventDefault();
            
            // Execute the original click handler or href navigation
            if (typeof element.onclick === 'function') {
                element.onclick();
            } else if (element.tagName.toLowerCase() === 'a' && element.getAttribute('href')) {
                window.location.href = element.getAttribute('href');
            }
        });
    });
}

// Initialize touch support when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    addTouchSupport();
    
    // Re-add touch support if content changes dynamically
    const observer = new MutationObserver(function() {
        addTouchSupport();
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    // ...existing code...
});