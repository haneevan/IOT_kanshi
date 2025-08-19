// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the HTML elements
    const openingPage = document.getElementById('opening-page');
    const dashboardPage = document.getElementById('dashboard-page');
    const cards = document.querySelectorAll('.card');

    // Check the global variable set by Flask to see if we should skip the intro
    if (start_dashboard) {
        // If we should start on the dashboard, hide the opening page and show the dashboard
        openingPage.style.display = 'none';
        dashboardPage.style.display = 'block';

        // Apply the fade-in animation to each card with a staggered delay
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animation = 'fadeIn 1s forwards';
            }, 500 + (index * 200));
        });

    } else {
        // Normal behavior: show the opening page with a fade-in animation
        setTimeout(() => {
            const openingContent = document.querySelector('.opening-page-content');
            openingContent.style.animation = 'fadeIn 2s ease-in-out forwards';
        }, 500);

        // After a delay, transition to the dashboard page
        setTimeout(() => {
            // Start the fade-out animation for the opening page
            openingPage.style.animation = 'fade-out 1s ease-in-out forwards';

            // Use a setTimeout to hide the element and show the dashboard after the fade-out animation is complete
            setTimeout(() => {
                openingPage.style.display = 'none';
                dashboardPage.style.display = 'block';

                // Apply the fade-in animation to each card with a staggered delay
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.animation = 'fadeIn 1s forwards';
                    }, 500 + (index * 200));
                });
            }, 1000); // Wait for the fade-out to finish
        }, 4000); // Total delay for opening screen is 4 seconds
    }

    // This is a placeholder for future functionality.
    // The links will now be handled by JavaScript instead of a page refresh.
    cards.forEach(card => {
        card.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior
            const page = event.currentTarget.getAttribute('data-page');
            console.log(`Navigating to ${page} (not implemented yet)`);
        });
    });
});
