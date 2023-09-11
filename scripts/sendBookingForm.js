// Function to remove the "-activated" suffix from an element's ID after a specified timeout
function removeActivatedFromId(elementId, timeoutMs) {
  setTimeout(() => {
    console.log('Executing: removeActivatedFromIdWithTimeout'); // Check if the function is called
    
    // Check if the elementId has the "activated" suffix
    if (elementId.endsWith("-activated")) {
      console.log('Entering if condition'); // Check if it enters the if condition
      const originalId = elementId.slice(0, -10); // Remove the "-activated" suffix
      const element = document.getElementById(elementId);

      // Check if the element exists
      if (element) {
        console.log('Element found, changing ID'); // Check if it finds the element
        element.id = originalId;
      }
    }
  }, timeoutMs);
}

// Function to add the "-activated" suffix to an element's ID
function addActivatedSuffixToId(elementId) {
  console.log(`adding -activated to ${elementId}`);
  return elementId + "-activated";
}

// Function to add the "-red-activated" suffix to an element's ID
function addRedActivatedSuffixToId(elementId) {
  console.log(`adding -activated to ${elementId}`);
  return elementId + "-red-activated";
}

// Function to add the "-green-activated" suffix to an element's ID
function addGreenActivatedSuffixToId(elementId) {
  console.log(`adding -activated to ${elementId}`);
  return elementId + "-green-activated";
}

// Function to add a red color class to an element for a specified duration
function addRedColorToElementById(elementClassName, timeout) {
  const modifiedId = addRedActivatedSuffixToId(elementClassName);
  const elements = document.getElementsByClassName(elementClassName);
  console.log(`checking if we got an element with class: ${elementClassName}`);

  if (elements.length > 0) {
    const element = elements[0]; // Access the first element in the collection
    element.className = modifiedId;
    console.log(element.className);

    setTimeout(() => {
      element.className = elementClassName;
      console.log(element.className);
    }, timeout);
  }
}

// Function to add a green color class to an element for a specified duration
function addGreenActivatedClassToElementById(elementClassName, timeout) {
  const modifiedId = addGreenActivatedSuffixToId(elementClassName);
  const elements = document.getElementsByClassName(elementClassName);
  console.log(`checking if we got an element with class: ${elementClassName}`);

  if (elements.length > 0) {
    const element = elements[0]; // Access the first element in the collection
    element.className = modifiedId;
    console.log(element.className);

    setTimeout(() => {
      element.className = elementClassName;
      console.log(element.className);
    }, timeout);
  }
}

// Function to add the "-activated" suffix to an element's ID with a specified timeout
function addActivatedToElementId(elementId, timeout) {
  const modifiedId = addActivatedSuffixToId(elementId);
  const element = document.getElementById(elementId);
  console.log(`checking if we got an element with id: ${elementId}`);
  if (element) {
    element.id = modifiedId;
    console.log(element.id);

    setTimeout(() => {
      element.id = elementId;
      console.log(element.id);
    }, timeout);
  }
}

// Function to add the "-activated" suffix to an element's ID without a timeout
function addActivatedToElementIdNoTimeOut(elementId) {
  const modifiedId = addActivatedSuffixToId(elementId);
  const element = document.getElementById(elementId);
  console.log(`checking if we got an element with id: ${elementId}`);
  if (element) {
    element.id = modifiedId;
    console.log(element.id);
  }
}

// Function to handle a 400 error response
function handle_400_Error() {
  addActivatedToElementId("sent-error-400", 3000);
  removeActivatedFromId('booking-form-input-activated', 3000)
  addRedColorToElementById("window-form", 2000);
}

// Function to handle a 500 error response
function handle_500_error() {
  addActivatedToElementId("sent-error-500", 3000);
  removeActivatedFromId('booking-form-input-activated', 3000)
  addRedColorToElementById("window-form", 2000);
}

// Function to handle a successful response
function handle_successful() {
  addActivatedToElementId("sent-successfuly", 3000);
  removeActivatedFromId('booking-form-input-activated', 3000)
  addGreenActivatedClassToElementById("window-form", 2000);
}

// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the submit button
  const submitButton = document.querySelector(".button-container button");
  
  // Define a function to handle the form submission
  const handleSubmit = () => {
    addActivatedToElementId("loader", "10000");
    addActivatedToElementIdNoTimeOut('booking-form-input')
    
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

    // Create an AbortController
    let controller = new AbortController();

    //Create a requestTimeout to cancel the request if it takes too long
    const requestTimeout = setTimeout(() => {
      controller.abort(); // Abort the request if it takes too long
      console.log("Request timed out");
      // You can throw an error or handle it as needed
      const timeoutError = new Error("Request timed out");
      throw timeoutError;
    }, 10000); // Set the timeout to 10 seconds (adjust as needed)

    // Send the POST request
    fetch("http://hathor.tn/api/booking/send-booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
      signal: controller.signal, // Pass the signal to the fetch request
    })
      .then((response) => {
        removeActivatedFromId("loader-activated");
        
        clearTimeout(requestTimeout); // Clear the requestTimeout if the request succeeds
        if (!response.ok) {
          if (response.status === 400) {
            console.log(
              "A booking has already been done with this email at that time"
            );
            console.log(response.status);
            handle_400_Error();
            return response.json();
          } else if (response.status === 500) {
            console.log(response.status);
            handle_500_error();
            return response.json();
          }
        } else if (response.status === 200) {
          handle_successful();
          console.log(response.status);
          return response.json();
        }
      })
      .catch((error) => {
        removeActivatedFromId("loader-activated");
        
        if (error.name === "AbortError") {
          console.log("The request took too long..");
          handle_500_error();
        } else {
          console.error("Error:", error.name);
          handle_500_error();
        }
      });
  };

  // Add a click event listener to the submit button
  submitButton.addEventListener("click", handleSubmit);
});
