window.onerror = function (message, url, lineNumber, colNumber, error) {
  // Handle the error
  console.error("Error:", message, url, lineNumber, colNumber, error);
  // Redirect to the custom error page
  window.location.href = "/error.html";
};
