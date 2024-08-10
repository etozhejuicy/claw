// components
import "../components/buttons.js";
import "../components/badge.js";
import "../components/checkbox.js";

import "../block/soon.js";

document.querySelector("#app").innerHTML = `
<main class="content">
  <section>
    <div class="container">
      <div class="row g-5">
        <div id="buttons" class="col-12"></div>
        <div id="badge" class="col-12"></div>
        <div id="checkbox" class="col-12"></div>
        <div id="soon" class="col-12"></div>
      </div>
    </div>
  </section>
</main>
`;
