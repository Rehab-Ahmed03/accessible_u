
function showNewsletterErrors(event) {
  event.preventDefault();

  const errorContainer = document.getElementById('newsletter-errors');
  if (errorContainer) {
    errorContainer.style.display = 'block';
    // Note: No aria-live region, no focus shift — screen readers won't notice
  }
}
