import hljs from "highlight.js";
import "highlight.js/styles/github.css";

$(document).ready(function () {
  $(".hljs").each(function (i, e) {
    hljs.highlightBlock(e);
  });
});
