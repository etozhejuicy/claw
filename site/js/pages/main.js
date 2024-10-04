import logo from "../../../public/logo.svg";

class Main {
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
              <div class="card">
                <div class="card-content">
                  <div class="card-body">
                    <div class="row g-3">
                      <div class="col-12">
                        <div class="row g-3 flex-row align-items-center justify-content-center">
                          <div class="col-auto">
                              <img data-src="${logo}" class="lazyload ratio ratio-1x1" style="width:5rem;" />
                          </div>
                          <div class="col-auto">
                            <div class="row g-1 flex-column">
                              <div class="col-auto">
                                <h3 class="h2 fw-600 ln-1">
                                  Клешня
                                </h3>
                              </div>
                              <div class="col-auto">
                                <h3 class="h5 fw-600 text-grey-600">
                                  (The Claw)
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <p class="fs-5 fw-600 text-center">
                          🦀 Легкий, гибкий, простой.
                        </p>
                      </div>
                      <div class="col-12">
                        <p class="text-md-center fs-4">
                          <strong>Claw</strong> - это CSS-фреймворк, который поможет вам быстро создать базовую структуру веб-сайта с необходимыми компонентами на вашем сервере.
                        </p>
                      </div>
                      <div class="col-12">
                        <ol class="list list-nobullet">
                          <li class="fs-4">😏 Поддерживаются box-иконки <i class="cl-icon-unlocked text-success"></i></li>
                          <li class="fs-4">🎏 Поддержка flexbox <i class="cl-icon-unlocked text-success"></i></li>
                          <li class="fs-4 opacity-25">🧱 Поддержка grid <i class="cl-icon-lock text-warning"></i></li>
                          <li class="fs-4">✨ Поддержка SCSS <i class="cl-icon-unlocked text-success"></i></li>
                          <li class="fs-4 opacity-25">🎯 Отдельный .config для настройки темы <i class="cl-icon-lock text-warning"></i></li>
                        </ol>
                      </div>
                      <div class="col-12">
                        <div class="badge badge-secondary badge-colored text-left w-100">
                          <div class="row g-3">
                            <div class="col-12">
                              <p class="fs-4 fw-600">
                                <i class="cl-icon-clock"></i> &nbsp;Статус разработки фреймворка можно узнать по ссылке Github
                              </p>
                            </div>
                            <div class="col-12">
                              <div class="row g-2">
                                <div class="col-12 col-sm-6 col-md-6">
                                  <a class="btn btn-grey-700 btn-icon" href="https://github.com/etozhejuicy/claw?tab=readme-ov-file" target="_blank" title="Статус разработки утилит">
                                    <i class="cl-icon-github"></i>
                                    <span class="btn-icon-text">Github</span>
                                  </a>
                                </div>
                                <div class="col-12 col-sm-6 col-md-6">
                                  <a href="./installation" class="btn btn-icon btn-primary w-100 w-xs-100 w-sm-100 w-md-auto">
                                    <i class="cl-icon-star-empty"></i>
                                    <span class="btn-icon-text">Начать работу</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    `;
  }
}

new Main();
