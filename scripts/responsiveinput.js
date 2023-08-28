const inputFields = document.querySelectorAll('input, textarea, select');
let isInputFocused = false;

// Add event listeners to focus and blur events of input fields
inputFields.forEach((inputField) => {
  inputField.addEventListener('focus', handleInputFocus);
  inputField.addEventListener('blur', handleInputBlur);
});

function handleInputFocus() {
  isInputFocused = true;
  adjustViewportHeight();
}

function handleInputBlur() {
  isInputFocused = false;
  adjustViewportHeight();
}

function adjustViewportHeight() {
  if (isInputFocused) {
    // Set the viewport height to the window.innerHeight to prevent resizing
    document.documentElement.style.height = `${window.innerHeight}px`;
  } else {
    // Reset the viewport height to 'auto' to allow normal resizing
    document.documentElement.style.height = 'auto';
  }
}

// Listen for window resize events and adjust viewport height accordingly
window.addEventListener('resize', adjustViewportHeight);
