const inputFields = document.querySelectorAll('input, textarea, select');

// Add event listeners to focus and blur events of input fields
inputFields.forEach((inputField) => {
  inputField.addEventListener('focus', handleInputFocus);
  inputField.addEventListener('blur', handleInputBlur);
});

function handleInputFocus() {
    // Store the window height in a variable to prevent resizing inconsistencies
    const windowHeight = window.innerHeight;
    document.documentElement.style.height = `${windowHeight}px`;
  }

function handleInputBlur() {
    // Check if the `document.documentElement` exists before trying to set its style to prevent potential errors
    if (document.documentElement) {
      document.documentElement.style.height = 'auto';
    }
  }
