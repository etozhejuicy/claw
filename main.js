// components
import "./src/js/site/components/start.js";
import "./src/js/site/components/colors.js";
import "./src/js/site/components/text.js";
import "./src/js/site/components/buttons.js";

document.querySelector("#app").innerHTML = `
<main class="content">
  <section>
    <div class="container">
      <div class="row g-5">
        <div id="start" class="col-12"></div>
        <div id="colors" class="col-12"></div>
        <div id="text" class="col-12"></div>
        <div id="buttons" class="col-12"></div>
      </div>
    </div>
  </section>
</main>
`;
