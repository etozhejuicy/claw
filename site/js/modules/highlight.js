import hljs from "highlight.js";
import "highlight.js/styles/github.css";

window.addEventListener("load", () => {
  let codes = document.querySelectorAll(".hljs");

  codes.forEach((e) => {
    hljs.highlightElement(e);
  });
});
