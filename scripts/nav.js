// Select the header element
const header = document.querySelector('.nav');

// Listen for the scroll event
window.addEventListener('scroll', () => {
    // Check if the screen width is below a certain threshold (e.g., 768px)
    if (window.innerWidth <= 768) {
        header.classList.add('scrolled');
    } else {
        // Check the scroll position
        if (window.scrollY > 7) { // Adjust the value as needed
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});
