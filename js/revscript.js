function showReview(reviewId) {
    // Hide all review details
    document.querySelectorAll('.review-content').forEach(el => {
        el.style.display = 'none';
    });

    // Remove active class from all items
    document.querySelectorAll('.review-item').forEach(el => {
        el.classList.remove('active');
    });

    // Show selected review
    document.getElementById(`review-${reviewId}`).style.display = 'block';
    document.querySelector(`[data-review="${reviewId}"]`).classList.add('active');

    // Show/hide back button on mobile
    if(window.innerWidth <= 768) {
        document.querySelector('.reviews-list').style.display = 'none';
        document.querySelector('.review-detail').style.display = 'block';
        document.querySelector('.back-button').style.display = 'block';
    }
}

function showList() {
    document.querySelector('.reviews-list').style.display = 'block';
    document.querySelector('.review-detail').style.display = 'none';
    document.querySelector('.back-button').style.display = 'none';
}

// Initialize first review
document.addEventListener('DOMContentLoaded', () => {
    showReview(1);
});