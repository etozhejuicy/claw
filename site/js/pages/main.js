document.querySelector("#app").innerHTML = `
<main class="content">
  <section>
    <div class="container">
      <div class="row g-5">
        <div class="col-12">
          <div class="card shadow-none">
            <div class="card-content">
              <div class="card-title text-center">
                <h3 class="h3 fw-700">
                  Клешня (The Claw)
                </h3>
              </div>
              <div class="card-body">
                <p class="fs-5 fw-600 text-center">
                🦀 Легкий, гибкий, простой.
                </p>
                <p class="text-md-center">
                  <strong>Claw</strong> - это CSS-фреймворк, который поможет вам быстро создать базовую структуру веб-сайта с необходимыми компонентами на вашем сервере.
                </p>
                <ol class="list list-nobullet w-fit mx-auto">
                  <li>😏 Поддерживаются box-иконки <i class="cl-icon-unlocked text-success"></i></li>
                  <li>🎏 Поддержка flexbox <i class="cl-icon-unlocked text-success"></i></li>
                  <li class="opacity-25">🧱 Поддержка grid <i class="cl-icon-lock text-warning"></i></li>
                  <li>✨ Поддержка SCSS <i class="cl-icon-unlocked text-success"></i></li>
                  <li class="opacity-25">🎯 Отдельный .config для настройки темы <i class="cl-icon-lock text-warning"></i></li>
                </ol>
                <p class="text-center ln-2 mb-3">
                  <i class="cl-icon-clock"></i> Статус разработки утилит фреймворка: <a href="https://github.com/etozhejuicy/claw?tab=readme-ov-file#the-status-of-utility-readiness" target="_blank" class="bg-grey-100 py-1 px-2 rounded-pill" title="Статус разработки утилит">README.md</a>
                </p>
              </div>
              <div class="card-footer d-flex justify-content-center">
                <a href="./installation" class="btn btn-icon btn-primary w-100 w-xs-100 w-sm-100 w-md-auto">
                <i class="cl-icon-rocket"></i>
                <span class="btn-icon-text">Приступить!</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
`;
