// Add to your JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Slideshow functionality
    let slideIndex = 0;
    const slides = document.querySelectorAll('.service-slide');
    const dots = document.querySelectorAll('.dot');
    let autoSlideInterval;

    function showSlide(index) {
        // Reset all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Handle wrap-around
        if (index >= slides.length) slideIndex = 0;
        if (index < 0) slideIndex = slides.length - 1;
        
        // Show new slide
        slides[slideIndex].classList.add('active');
        dots[slideIndex].classList.add('active');
    }

    function nextSlide() {
        slideIndex++;
        showSlide(slideIndex);
        resetAutoSlide();
    }

    function prevSlide() {
        slideIndex--;
        showSlide(slideIndex);
        resetAutoSlide();
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 8000);
    }

    // Event Listeners
    document.querySelector('.slide-next').addEventListener('click', nextSlide);
    document.querySelector('.slide-prev').addEventListener('click', prevSlide);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            slideIndex = index;
            showSlide(slideIndex);
            resetAutoSlide();
        });
    });

    // Auto-advance every 8 seconds
    autoSlideInterval = setInterval(nextSlide, 8000);

    // Pause on hover
    const slideshow = document.querySelector('.services-slideshow');
    slideshow.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    slideshow.addEventListener('mouseleave', resetAutoSlide);
});