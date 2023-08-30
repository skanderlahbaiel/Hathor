console.log("working");
const languageSelectFR = document.getElementById("language-select-fr");
console.log(languageSelectFR);
const languageSelectEN = document.getElementById("language-select-en");
console.log(languageSelectEN);
const translatableElements = document.querySelectorAll("[data-translate]");

languageSelectFR.addEventListener("change", () => {
  updateTranslations("fr");
});

languageSelectEN.addEventListener("change", () => {
  updateTranslations("en");
});

function updateTranslations(selectedLanguage) {
  const resourcePath = `${selectedLanguage}.json`;

  // Load the translation data from the local resource
  fetch(resourcePath)
    .then((response) => response.json())
    .then((translation) => {
      console.log(translation)
      translatableElements.forEach((element) => {
        const translationKey = element.getAttribute("data-translate");
        const translationValue = translation[translationKey];

        // Handle placeholders in the translation
        const placeholders = translationValue.match(/%[sd]/g);
        let translatedText = translationValue;

        if (placeholders) {
          placeholders.forEach((placeholder) => {
            const placeholderValue = getPlaceholderValue(
              translationKey,
              placeholder
            );
            translatedText = translatedText.replace(
              placeholder,
              placeholderValue
            );
          });
        }

        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          element.placeholder = translatedText;
        } else {
          element.textContent = translatedText;
        }
      });
    })
    .catch((error) => {
      console.error("Error loading translation:", error);
    });
}
function getPlaceholderValue(translationKey, placeholder) {
  // Check if the translation key exists in the placeholderValues
  if (placeholderValues.hasOwnProperty(translationKey)) {
    return placeholderValues[translationKey];
  }
  // Return the translated date format
  if (translationKey === "date-placeholder") {
    return "jj/mm/aa"; // Translated date format
  }

  // Return a generic placeholder value if no match is found
  return "Placeholder";
}
