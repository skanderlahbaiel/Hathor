document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("a");

  for (const link of navLinks) {
    link.addEventListener("click", smoothScroll);
  }

  function smoothScroll(event) {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      const scrollOptions = {
        top: offsetTop,
        behavior: "smooth",
      };

      window.scrollTo(scrollOptions);
    }
  }
});
