function addActivatedSuffixToId(elementId) {
  console.log(`adding -activated to ${elementId}`);
  return elementId + "-activated";
}

function addActivatedClassToElementById(elementId, timeout) {
  const modifiedId = addActivatedSuffixToId(elementId);
  const element = document.getElementById(elementId);
  console.log(`checking if we got an element with id: ${elementId}`);
  if (element) {
    
    element.id = modifiedId;
    console.log(element.id);

    setTimeout(() => {
      element.id = elementId;
      console.log(element.id);}, timeout)
  }

}

document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the submit button
  const submitButton = document.querySelector(".button-container button");

  // Define a function to handle the form submission
  const handleSubmit = () => {
    // Get values from the input fields
    const fullname = document.querySelector(
      'input[placeholder="Full name"]'
    ).value;
    const email = document.querySelector('input[placeholder="E-mail"]').value;
    const time = document.querySelector("#time").value;
    const comments = document.querySelector(
      'input[placeholder="Comments"]'
    ).value;
    const subject = document.querySelector("#options").value;
    const date = document.querySelector(
      'input[placeholder="yyyy-mm-dd"]'
    ).value;
    const phone = document.querySelector(
      'input[placeholder="Phone number"]'
    ).value;

    // Get the current date and time
    const creationDate = new Date().toISOString();

    // Create the JSON object
    const jsonData = {
      fullname,
      email,
      time,
      comments,
      subject,
      date,
      phone,
      creationDate,
    };

    // Send the POST request
    fetch("http://127.0.0.1:3000/booking/send-booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 400) {
            console.log(
              "A booking has already been done with this email at that time"
            );
            console.log(response.status);
            addActivatedClassToElementById("sent-error-400", 3000);
            addActivatedClassToElementById("booking-form-input", 3000)
            return response.json();
          } else if (response.status === 500) {
            console.log(response.status);
            addActivatedClassToElementById("sent-error-500", 3000);
            addActivatedClassToElementById("booking-form-input", 3000)
            return response.json();
          }
        } else if (response.status === 200) {
          addActivatedClassToElementById("sent-successfuly", 3000);
          addActivatedClassToElementById("booking-form-input", 3000)
          console.log(response.status);
          return response.json();
        }
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error:", error);
      });
  };

  // Add a click event listener to the submit button
  submitButton.addEventListener("click", handleSubmit);
});
