const bookingForm = document.querySelector("#booking-form");
const inputFields = bookingForm.querySelectorAll(
  "select, input, textarea"
);
console.log(inputFields)

const windowForm = document.querySelectorAll(".window-form")


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
  ".ghost-round"
];
focusClass = "focused";

function focusOnForm() {
  toBeModified.forEach((selector) => {
    const elements = Array.from(document.querySelectorAll(selector)); // Convert NodeList to array
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
}

inputFields.forEach((inputField) => {
  windowForm[0].addEventListener("mouseup", focusOnForm)
  inputField.addEventListener("focus", focusOnForm);
  
  inputField.addEventListener("blur", unfocusForm);
});

