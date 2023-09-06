let storedScrollY;
function restoreScrollPosition() {
  window.scrollTo(0, storedScrollY);
  console.log(`The y value stored is ${storedScrollY}`);
  console.log(`Restoring scroll position to ${storedScrollY}`);
}

const inputFields = document.querySelectorAll(
  "form select,form input, form textarea"
);

const unfocusInputFields = document.querySelectorAll(
  "select, input, textarea, .button-container button"
);

const outsideForm = document.querySelector("#quit-form-img");

console.log(`outside of from value: ${outsideForm}`);
const submitButton = document.querySelector(".button-container button");

const toBeModified = [
  ".container",
  ".nav",
  ".description",
  ".services",
  ".our-packages",
  ".booking",
  "#booking-title",
  ".booking-bottom-left-grid",
  ".footer",
  ".booking .section-title",
  ".booking-top-grid",
  ".subtitle",
  ".button-container",
  ".spacing",
  ".content-form",
  ".ghost-round",
  "#quit-form-img"
];

const focusClass = "focused";

function focusOnForm() {
  storedScrollY = window.scrollY;
  toBeModified.forEach((selector) => {
    const elements = Array.from(document.querySelectorAll(selector));
    elements.forEach((element) => {
      element.classList.add(focusClass);
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
  restoreScrollPosition();
}
// Prevent form blur when clicking the submit button
submitButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the form from submitting
  // Your code to send the request here
});

inputFields.forEach((inputField) => {
  inputField.addEventListener("mouseup", focusOnForm);
  inputField.addEventListener("focus", focusOnForm);
});

outsideForm.addEventListener("click", unfocusForm);
