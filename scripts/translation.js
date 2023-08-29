console.log('working')
const languageSelectFR = document.getElementById("language-select-fr");
console.log(languageSelectFR)
const languageSelectEN = document.getElementById("language-select-en");
console.log(languageSelectEN)
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
      translatableElements.forEach((element) => {
        const translationKey = element.getAttribute("data-translate");
        element.textContent = translation[translationKey];
      });
    })
    .catch((error) => {
      console.error("Error loading translation:", error);
    });
}
