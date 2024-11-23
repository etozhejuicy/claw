// components
// import "../components/buttons.js";
// import "../components/badge.js";
// import "../components/checkbox.js";
// import "../components/radio.js";
// import "../components/switch.js";
// import "../components/forms.js";
// import "../components/select.js";

import "../block/soon.js";

class Components {
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
            <div class="col-12">
              <a href="./buttons">Кнопки</a>
            </div>
            <div id="soon" class="col-12"></div>
          </div>
        </div>
      </section>
    </main>
    `;
  }
}

new Components();
