document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("a");

  for (const link of navLinks) {
    link.addEventListener("click", smoothScroll);
  }

  function smoothScroll(event) {
    const href = event.currentTarget.getAttribute("href");

    // Check if the href attribute starts with "http" or is an external link
    if (href && (href.startsWith("http") || href.startsWith("//"))) {
      return; // Skip smooth scrolling for external links
    }

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
