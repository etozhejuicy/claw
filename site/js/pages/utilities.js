// components
import "../utilities/start.js";
import "../utilities/colors.js";
import "../utilities/text.js";

import "../block/soon.js";

class Utilities {
  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelector("#app").innerHTML = `
      <main class="content">
        <section>
          <div class="container">
            <div class="row g-5">
              <div id="start" class="col-12"></div>
              <div id="colors" class="col-12"></div>
              <div id="text" class="col-12"></div>
              <div id="soon" class="col-12"></div>
            </div>
          </div>
        </section>
      </main>
      `;
    });
  }
}

new Utilities();
