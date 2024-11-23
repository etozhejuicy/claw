// components
import "../../components/buttons.js";

import "../../block/soon.js";

class Buttons {
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
            <div id="buttons" class="col-12"></div>
            <div id="soon" class="col-12"></div>
          </div>
        </div>
      </section>
    </main>
    `;
    }
}

new Buttons();