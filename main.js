// components
import "./src/js/site/components/colors.js";
import "./src/js/site/components/text.js";
import "./src/js/site/components/buttons.js";

document.querySelector("#app").innerHTML = `
<main class="content">
  <section>
    <div class="container">
      <div class="row g-5">
        <div class="col-12">
          <div class="card shadow-none">
            <div class="card-content">
              <div class="card-title text-center">
                <h3 class="h-3 fw-700">
                  Клешня (The Claw)
                </h3>
              </div>
              <div class="card-body">
                <p class="fs-5 fw-600 text-center">
                🦀 Легкий, гибкий, простой.
                </p>
                <ol class="list list-nobullet w-fit mx-auto">
                  <li>😏 Поддерживаются иконки</li>
                  <li>🎏 Поддержка flexbox-column</li>
                  <li>🧱 Поддержка grid-css</li>
                  <li>✨ Поддерживаются пост-процессоры SCSS</li>
                  <li>🎯 Отдельный .config для настройки темы</li>
                </ol>
              </div>
              <div class="card-footer d-flex justify-content-center">
                <a href="/installation.html" class="btn btn-primary w-100 w-xs-100 w-sm-100 w-md-auto">
                  Приступить!
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
