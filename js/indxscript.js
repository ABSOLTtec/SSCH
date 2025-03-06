document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");
    let prevButton = document.querySelector(".prev");
    let nextButton = document.querySelector(".next");

    function showSlides(n) {
        slides.forEach((slide, i) => {
            slide.style.display = i === n ? "block" : "none";
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === n);
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlides(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlides(slideIndex);
    }

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            slideIndex = i;
            showSlides(slideIndex);
        });
    });

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    showSlides(slideIndex);
    setInterval(nextSlide, 8000); // Auto-change every 8 seconds
});
