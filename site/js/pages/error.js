import image from "../../../public/crab.svg";

class Error {
  constructor() {
    this.init();
  }

  init() {
    document.querySelector("#app").innerHTML = `
      <main class="content">
        <section class="vh-100">
          <div class="container">
            <div class="card">
              <div class="card-content">
                <div class="card-body">
                  <div class="row g-3">
                    <div class="col-12">
                      <h3 class="text-center fw-bold">Упс!</h3>
                    </div>
                    <div class="col-12">
                      <div class="d-flex align-items-center justify-content-center">
                        <div class="ratio ratio-1x1 lazyload" data-expand="-10" style="width: 16rem;">
                          <object data="${image}" type="image/svg+xml" id="crab-svg" class="lazyload"></object>
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                        <p class="text-center fs-5">
                            Такой страницы не существует
                        </p>
                    </div>
                    <div class="col-12">
                        <p class="text-center">
                            <a href="./" class="link">На главную</a>
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    `;

    window.addEventListener("DOMContentLoaded", () => {
      this.animation();
    });
  }

  animation() {
    const crabSvg = document.getElementById("crab-svg");
    const svgDoc = crabSvg.contentDocument;

    const leftClaw = svgDoc.querySelector("g[id='left-claw']");

    console.log(leftClaw);
  }
}

new Error();
