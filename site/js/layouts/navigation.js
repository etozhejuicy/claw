window.addEventListener("load", (e) => {
  let urlPath = window.location.pathname,
    urlPathLast = urlPath.substr(urlPath.lastIndexOf('/') + 1),
    links = document.querySelectorAll("[url]");

  for (const link of links) {
    if (link.getAttribute("url", urlPath) == urlPath) {
      link.classList.add("active");
    }
  }
});
