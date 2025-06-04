document.addEventListener('DOMContentLoaded', function() {
    // Target all "apply now" buttons by common classes, text content, or IDs
    const applyNowButtons = Array.from(document.querySelectorAll('a, button')).filter(el => {
        const text = el.textContent.toLowerCase().trim();
        return text === 'apply now' || 
               text === 'apply' || 
               el.classList.contains('apply-now-btn') || 
               el.id.includes('apply');
    });
    
    // Add click event listeners to all matching buttons
    applyNowButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = '/admission-inquiry.html';
        });
        
        // If it's an anchor tag, also update the href
        if (button.tagName === 'A') {
            button.href = '/admission-inquiry.html';
        }
    });
    
    console.log('Apply Now redirection initialized for ' + applyNowButtons.length + ' elements');
});
