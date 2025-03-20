document.addEventListener('DOMContentLoaded', function() {
    const reviewItems = document.querySelectorAll('.review-item');
    const reviewContents = document.querySelectorAll('.review-content');

    reviewItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items and contents
            reviewItems.forEach(i => i.classList.remove('active'));
            reviewContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked item and corresponding content
            const reviewId = item.getAttribute('data-review');
            item.classList.add('active');
            document.querySelector(`.review-content[data-review="${reviewId}"]`).classList.add('active');
        });
    });
});