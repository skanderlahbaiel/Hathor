let prevScrollPos = window.scrollY;
let scrollingUp = false; // Flag to track scroll direction

window.addEventListener('scroll', function () {
    let currentScrollPos = window.scrollY;

    // Determine scroll direction
    if (currentScrollPos < prevScrollPos) {
        scrollingUp = true;
    } else {
        scrollingUp = false;
    }

    // Apply classes based on scroll direction
    if (scrollingUp) {
        const animateDownElement = document.querySelector('.descriptivetext.animate-down');
        if (animateDownElement) {
            animateDownElement.classList.remove('animate-down');
        }
        const animateUpElement = document.querySelector('.descriptivetext');
        if (animateUpElement) {
            animateUpElement.classList.add('animate-up');
        }
    } else {
        const animateUpElement = document.querySelector('.descriptivetext.animate-up');
        if (animateUpElement) {
            animateUpElement.classList.remove('animate-up');
        }
        const animateDownElement = document.querySelector('.descriptivetext');
        if (animateDownElement) {
            animateDownElement.classList.add('animate-down');
        }
    }

    prevScrollPos = currentScrollPos;
});
