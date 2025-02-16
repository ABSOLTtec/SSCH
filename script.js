const testimonialContainer = document.querySelector('.testimonial-container');
const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

// Calculate the width of the testimonial container based on the number of testimonials
testimonialContainer.style.width = `${testimonials.length * 100}%`;

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    console.log('currentIndex:', currentIndex);
    updateTestimonialPosition();
}

function updateTestimonialPosition() {
    testimonialContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextTestimonial, 6000); // Change testimonial every 6 seconds (6000ms), wait for 3 seconds before transition
