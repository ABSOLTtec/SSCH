 // FAQ Toggle Functionality
 document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        const answer = parent.querySelector('.faq-answer');
        const icon = parent.querySelector('.toggle-icon');
        
        parent.classList.toggle('active');
        answer.style.display = parent.classList.contains('active') ? 'block' : 'none';
        icon.textContent = parent.classList.contains('active') ? '−' : '+';
    });
});

// Form Submission Handling
document.getElementById('questionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your question! We will respond within 24 hours.');
    this.reset();
});