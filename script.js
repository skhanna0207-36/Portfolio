// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {

    // Smooth scrolling for navigation links (if staying on same page)
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Get the target URL
            const targetUrl = this.getAttribute('href');

            // For internal links (to other pages), no special handling needed
            // This script mainly adds smooth scrolling if we were using anchor links
        });
    });
});