document.addEventListener('DOMContentLoaded', function() {
    const revealButton = document.getElementById('revealButton');
    const giftCardContainer = document.getElementById('giftCardContainer');

    revealButton.addEventListener('click', function() {
        // 1. Show the gift card container by removing the 'hidden' class
        giftCardContainer.classList.remove('hidden');

        // 2. Optional: Hide the button after the surprise is revealed
        revealButton.style.display = 'none';

        // 3. Optional: Add a little alert/message for extra fun
        alert("SURPRISE! Hope you love it! 😊");

        // Optional: Scroll down to the surprise for users on smaller screens
        giftCardContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
