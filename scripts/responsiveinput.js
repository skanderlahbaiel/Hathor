const inputFields = document.querySelectorAll('select, input, textarea, .container-form > *');
const toBeModified = ['.container', '.nav', '.description', '.services', '.our-packages', '.booking', '#booking-title', '.booking-bottom-left-grid', '.footer', '.booking .section-title', '.booking-top-grid', '.subtitle', '.button-container', '.spacing'];
focusClass='focused'




function focusOnForm() {
  toBeModified.forEach((selector) => {
    const elements = Array.from(document.querySelectorAll(selector)); // Convert NodeList to array
    console.log(`Elements selected to be modified for ${selector}:`, elements);
    elements.forEach((element) => {
      element.classList.add(focusClass);
      console.log(`modified elements ${selector}:`, elements);
    });
  });
}

function unfocusForm() {
  toBeModified.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      element.classList.remove(focusClass);
    });
  });
}

inputFields.forEach((inputField) => {
  inputField.addEventListener('focus', focusOnForm);
  inputField.addEventListener('blur', unfocusForm);
});
