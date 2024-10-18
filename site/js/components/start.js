window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#start").innerHTML = `
    <div class="row g-5">
        <div class="col-12">
            <div class="card shadow-none">
                <div class="card-body">
                    <div class="row g-3">
                        <div class="col-12">
                            <h5 class="h5">
                                Установка
                            </h5>
                        </div>
                        <div class="col-12">
                            <p>
                                Для установки потребуется инициализировать команду NPM:
                            </p>
                        </div>
                        <div class="col-12">
                            <code class="code" data-clipboard-target="#npm-i" disabled>
                                <div class="code-content">
                                    <div class="code-body" id="npm-i">npm i claw-css</div>
                                </div>
                            </code>
                        </div>
                        <div class="col-12">
                            <p>
                                Далее необходимо подключить библиотеку, чтобы вы смогли работать с ней в проекте.
                            </p>
                        </div>
                        <div class="col-12">
                            <p>
                                Интегрируйте стили в post-css файл вашего проекта при помощи @import:
                            </p>
                        </div>
                        <div class="col-12">
                            <code class="code" data-clipboard-target="#npm-i" disabled>
                                <div class="code-content">
                                    <div class="code-body" id="npm-i">@import "claw-css.min";</div>
                                </div>
                            </code>
                        </div>
                        <div class="col-12">
                            <p>
                                Если вам не требуется установка из NPM и необходима быстрая интеграция с проектом, то просто вставьте этот код в <code>&lthead&gt&lt/head&gt</code>:
                            </p>
                        </div>
                        <div class="col-12">
                            <code class="code" data-clipboard-target="#npm-i" disabled>
                                <div class="code-content">
                                    <div class="code-body" id="npm-i">&ltlink rel="stylesheet" crossorigin href="https://unpkg.com/browse/claw-css@0.0.1/dist/bundle.min.css" /&gt</div>
                                </div>
                            </code>
                        </div>
                        <div class="col-12">
                            <div class="badge badge-warning badge-colored w-100 ln-lg">
                                Внимание! Установка библиотеки через NPM-команду в данный момент недоступна.
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="badge badge-blue badge-colored w-100 ln-lg">
                                NPM-команда установки библиотеки и импорт, что представлен выше может измениться со временем.
                            </div>
                        </div>
                        <div class="col-12 text-center">
                            <a href="./components" class="btn btn-primary w-100 w-xs-100 w-sm-100 w-md-auto">
                                Перейти в компоненты
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
});
