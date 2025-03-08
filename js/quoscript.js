document.getElementById('quoteForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const button = form.querySelector('.submit-button');
    const buttonText = button.querySelector('.button-text');
    const spinner = button.querySelector('.loading-spinner');

    // Show loading state
    buttonText.textContent = 'Submitting...';
    spinner.removeAttribute('hidden');
    button.disabled = true;

    // Client-side validation
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    try {
        const response = await fetch('https://formspree.io/f/mdkenydp', {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            window.location.href = 'thankyou.html';
        } else {
            window.location.href = 'error.html';
        }
    } catch (error) {
        window.location.href = 'error.html';
    } finally {
        // Reset button state
        buttonText.textContent = 'Submit Request';
        spinner.setAttribute('hidden', true);
        button.disabled = false;
    }
});