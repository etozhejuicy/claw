// styles
import "./src/scss/app.scss";

// components
import "./components/colors";
import "./components/text";
import "./components/buttons";

document.querySelector("#app").innerHTML = `
<main class="content">
  <section>
    <div class="container">
      <div class="row g-5">
        <div id="colors" class="col-12"></div>
        <div id="text" class="col-12"></div>
        <div id="buttons" class="col-12"></div>
      </div>
    </div>
  </section>
</main>
`;
