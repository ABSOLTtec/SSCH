
// Updated JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get current page URL
    const currentLocation = window.location.pathname;
    
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Add active class to current page link
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // Handle index.html vs root path
        if (currentLocation.endsWith(linkPath) || 
           (currentLocation.endsWith('/') && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Mobile menu functionality
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});