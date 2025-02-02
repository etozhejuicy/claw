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
                            <div class="badge badge-danger badge-colored btn-shadow w-100 ln-lg">
                                Внимание! Доступна версия alpha 0.0.1. Возможны баги и иные неисправности.
                            </div>
                        </div>
                        <div class="col-12">
                            <p>
                                Вы можете добавить следующий <code class="text-warning">&ltlink&gt</code> на вашей странице в <code class="text-warning">&lthead&gt</code> перед своими стилями:
                            </p>
                        </div>
                        <div class="col-12">
                            <code class="code">
                                <div class="code-content">
                                    <div class="code-title">
                                        Пример использования
                                    </div>
                                    <pre class="hljs html code-body"><code>&ltlink rel="stylesheet" type="text/css" href="./styles/claw.min.css" /&gt</code></pre>
                                </div>
                            </code>
                        </div>
                        <div class="col-12">
                            <p>
                                Скачать файл можно по ссылке: 
                            </p>
                        </div>
                        <div class="col-auto">
                            <a href="./build/claw.min.css" class="btn btn-sm btn-success" target="_blank" download="">claw.min.css</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
});