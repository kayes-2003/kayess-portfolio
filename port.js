// Portfolio interactivity and form handling

document.addEventListener('DOMContentLoaded', function() {
  
  // Newsletter form submission
  const submitBtn = document.querySelector('.submit-btn');
  const emailInput = document.querySelector('.email-input');
  
  if (submitBtn) {
    submitBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const email = emailInput.value.trim();
      
      if (validateEmail(email)) {
        console.log('Newsletter signup:', email);
        alert('Thank you for subscribing!');
        emailInput.value = '';
      } else {
        alert('Please enter a valid email address');
      }
    });
  }
  
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Social icons click handlers
  document.querySelectorAll('.social-icons i').forEach(icon => {
    icon.addEventListener('click', function() {
      console.log('Clicked:', this.className);
    });
  });
});

// Email validation function
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}