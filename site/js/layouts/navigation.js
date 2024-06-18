window.addEventListener("load", (e) => {
  let pageURL = window.location.pathname,
    lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1),
    links = document.querySelectorAll("[url]");

  for (const link of links) {
    console.log(pageURL)
    if (link.getAttribute("url", lastURLSegment) == pageURL) {
      link.classList.add("active");
    }
  }
});
