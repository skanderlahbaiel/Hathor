const inputFields = document.querySelectorAll('select');
let previousViewportHeight = window.innerHeight;

// Function to handle viewport height adjustments
function handleViewportHeight() {
  document.documentElement.style.height = `${previousViewportHeight}px`;
}

// Add event listeners to focus and blur events of input fields
inputFields.forEach((inputField) => {
  inputField.addEventListener('focus', handleViewportHeight);
  inputField.addEventListener('blur', handleInputBlur);
});

function handleInputBlur() {
  // Set the viewport height back to auto when an input field loses focus
  document.documentElement.style.height = 'auto';
}
