// components
import "../components/start.js";

import "../block/soon.js";

class Installation {
  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      this.init();
    });
  }

  init() {
    document.querySelector("#app").innerHTML = `
    <main class="content">
      <section>
        <div class="container">
          <div class="row g-5">
            <div id="start" class="col-12"></div>
            <div id="soon" class="col-12"></div>
          </div>
        </div>
      </section>
    </main>
  `;
  }
}

new Installation();
