window.addEventListener('load', function() {
  var loadingOverlay = document.getElementById('loading-overlay');

  // Function to hide the loading overlay with animation
  function hideLoadingOverlay() {
    loadingOverlay.style.animation = 'zoom-out 0.5s forwards';
    setTimeout(function() {
      loadingOverlay.style.display = 'none';
    }, 500); // Delay hiding the overlay to match animation duration
  }

  // Example usage: Hide the overlay when the page has finished loading
  hideLoadingOverlay();
});
