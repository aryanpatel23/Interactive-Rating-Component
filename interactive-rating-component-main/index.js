function handleRating(value) {
    const buttons = document.querySelectorAll('.review-buttons button');
    buttons.forEach(button => {
        button.classList.remove('selected');
        button.style.backgroundColor = ''; // Reset background color

        if (button.value === value) {
            button.classList.add('selected');
        }
    });

    // Set hover style color
    const selectedButton = document.querySelector('.review-buttons button.selected');
    selectedButton.style.backgroundColor = 'orange';
}

function submitRating() {
    const ratingState = document.querySelector('.container');
    const thankYouState = document.getElementById('thank-you');
    const selectedRating = document.querySelector('.review-buttons button.selected').value;

    document.getElementById('selected-rating').innerText = selectedRating;
    ratingState.style.display = 'none';
    thankYouState.style.display = 'block';
}
