let originalViewportHeight = window.innerHeight;

// Listen for input focus and blur events
const inputFields = document.querySelectorAll('input, textarea');
inputFields.forEach(input => {
  input.addEventListener('focus', handleInputFocus);
  input.addEventListener('blur', handleInputBlur);
});

function handleInputFocus() {
  // Save the original viewport height
  originalViewportHeight = window.innerHeight;

  // Set the viewport height to the original height to prevent resizing
  document.documentElement.style.height = originalViewportHeight + 'px';
}

function handleInputBlur() {
  // Reset the viewport height to 'auto' to allow normal resizing
  document.documentElement.style.height = 'auto';
}
