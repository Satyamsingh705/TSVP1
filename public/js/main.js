// ...existing code...

// Add this function to load the admission form in a popup
function showAdmissionPopup() {
  // Create popup container
  const popupContainer = document.createElement('div');
  popupContainer.className = 'popup-container';
  
  // Fetch the admission inquiry form content
  fetch('/admission-inquiry.html')
    .then(response => response.text())
    .then(html => {
      // Extract the form portion from the HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const formContainer = doc.querySelector('.form-container');
      
      // Insert into popup
      popupContainer.innerHTML = `
        <div class="popup-content">
          <span class="close-popup">&times;</span>
          ${formContainer.outerHTML}
        </div>
      `;
      
      // Add to body
      document.body.appendChild(popupContainer);
      
      // Add close functionality
      document.querySelector('.close-popup').addEventListener('click', () => {
        popupContainer.remove();
      });
      
      // Enable the form submission in the popup
      const form = popupContainer.querySelector('#inquiryForm');
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your inquiry! We will contact you shortly.');
        popupContainer.remove();
      });
    });
}

// Attach this to your "admission now" button/link
document.addEventListener('DOMContentLoaded', () => {
  const admissionButtons = document.querySelectorAll('.admission-now-btn');
  admissionButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showAdmissionPopup();
    });
  });
});

// ...existing code...