// Select the header element
const header = document.querySelector('.nav');

// Listen for the scroll event
window.addEventListener('scroll', () => {
    // Check the scroll position
    if (window.scrollY > 7) { // Adjust the value as needed
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
