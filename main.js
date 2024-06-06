// components
import "./src/js/site/components/start";
import "./src/js/site/components/colors";
import "./src/js/site/components/text";
import "./src/js/site/components/buttons";

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
