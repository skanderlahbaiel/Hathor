const selectElement = document.querySelector('select');

selectElement.addEventListener('focus', () => {
  const currentViewportHeight = window.innerHeight;
  document.documentElement.style.height = `${currentViewportHeight}px`;
});

selectElement.addEventListener('blur', () => {
  document.documentElement.style.height = 'auto';
});
