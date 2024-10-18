window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#badge").innerHTML = `
    <div class="row g-5">
        <div class="col-12">
            <div class="card shadow-none">
                <div class="card-body">
                    <div class="row g-3">
                        <div class="col-12">
                            <h5 class="h5">
                                Бейджи (обычные)
                            </h5>
                        </div>
                        <div class="col-12">
                            <div class="row g-3">
                                <div class="col-12">
                                    <div class="badge w-100">
                                        Простой бейдж
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="code">
                                        <div class="code-content">
                                            <div class="code-title">
                                                Пример использования
                                            </div>
<pre class="hljs html code-body"><code>&lt;div class="badge"&gt;Простой бейдж&lt;/div&gt;</code></pre>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <p>
                                        Бейджи имеют стандартный фон и цвет текста, который вы можете регулировать селекторами прямо в HTML. Но, если вы не хотите настраивать каждый параметр в HTML, можете воспользоваться набором тем, который предустановлен в фреймворк:
                                    </p>
                                </div>
                                <div class="col-12">
                                    <div class="badge badge-primary w-100">
                                        Простой бейдж
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="badge badge-secondary w-100">
                                        Простой бейдж
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="badge badge-success w-100">
                                        Простой бейдж
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="badge badge-danger w-100">
                                        Простой бейдж
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="badge badge-warning w-100">
                                        Простой бейдж
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="badge badge-black w-100">
                                        Простой бейдж
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="badge badge-white w-100">
                                        Простой бейдж
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="code">
                                        <div class="code-content">
                                            <div class="code-title">
                                                Пример использования
                                            </div>
<pre class="hljs html code-body"><code>&lt;div class="badge badge-primary"&gt;Простой бейдж&lt;/div&gt;</code></pre>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <p>
                                        Задать цветовую схему для бейджев можно, опираясь на таблицу цветов, добавив в конце после дефиса цвет:
                                    </p>
                                    <blockquote class="blockquote">
                                        <div class="blockquote-content">
                                            <div class="blockquote-body text-warning">.badge-{color}</div>
                                        </div>
                                    </blockquote>
                                    <p>
                                        Список наименования основной палитры цветов:
                                    </p>
                                    <blockquote class="blockquote">
                                        <div class="blockquote-content">
                                            <div class="blockquote-body">
                                                <ul class="list list-nobullet m-0">
                                                    <li class="list-item text-primary">primary</li>
                                                    <li class="list-item text-secondary">secondary</li>
                                                    <li class="list-item text-success">success</li>
                                                    <li class="list-item text-danger">danger</li>
                                                    <li class="list-item text-warning">warning</li>
                                                    <li class="list-item text-black">black</li>
                                                    <li class="list-item text-orange">orange</li>
                                                    <li class="list-item text-purple">purple</li>
                                                    <li class="list-item text-blue">blue</li>
                                                    <li class="list-item text-white">white</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <h5 class="h5">
                                Бейджи (с закрашенным текстом и тонами)
                            </h5>
                        </div>
                        <div class="col-12">
                            <div class="row g-3">
                                <div class="col-12">
                                    <div class="badge badge-primary badge-colored w-100">
                                        Простой бейдж
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="badge badge-secondary badge-colored w-100">
                                        Простой бейдж
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="badge badge-success badge-colored w-100">
                                        Простой бейдж
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="badge badge-danger badge-colored w-100">
                                        Простой бейдж
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="badge badge-warning badge-colored w-100">
                                        Простой бейдж
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="badge badge-orange badge-colored w-100">
                                        Простой бейдж
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="badge badge-blue badge-colored w-100">
                                        Простой бейдж
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="badge badge-purple badge-colored w-100">
                                        Простой бейдж
                                    </div>
                                </div>
                                <div class="col-12">
                                    <code class="code">
                                        <div class="code-content">
                                            <div class="code-title">
                                                Пример использования
                                            </div>
<pre class="hljs html code-body"><code>&lt;div class="badge badge-primary badge-colored"&gt;Простой бейдж&lt;/div&gt;</code></pre>
                                        </div>
                                    </code>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <h5 class="h5">
                                Бейджи (с большими отступами)
                            </h5>
                        </div>
                        <div class="col-12">
                            <div class="row g-3">
                                <div class="col-12">
                                    <!-- badge-card: Бейдж с большими внутренними отступами, badge-rings: добавляет кольца в центр бейджа, badge-colored: в зависимости от цвета бейджа задает цвет текста и возвращает исходное значения для фона бейджа -->
                                    <div class="badge badge-card badge-colored badge-primary w-100">
                                        <div class="badge-content">
                                            <div class="badge-title">
                                                Социализация, <br>
                                                коммуникации
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="badge badge-card badge-colored badge-orange w-100">
                                        <div class="badge-content">
                                            <div class="badge-title">
                                                Личностное <br>
                                                развитие
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="badge badge-card badge-colored badge-warning w-100">
                                        <div class="badge-content">
                                            <div class="badge-title">
                                                Физическое <br>
                                                состояние
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="badge badge-card badge-colored badge-danger w-100">
                                        <div class="badge-content">
                                            <div class="badge-title">
                                                Деятельность, <br>
                                                финансы
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="badge badge-card badge-colored badge-success w-100">
                                        <div class="badge-content">
                                            <div class="badge-title">
                                                Свободное <br>
                                                время
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="badge badge-card badge-colored badge-blue w-100">
                                        <div class="badge-content">
                                            <div class="badge-title">
                                                Отдых
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <!-- Если нужен градиент, то badge-#{$color} необходимо убрать и вместо него вставить: badge-gradient -->
                                    <div class="badge badge-black badge-colored badge-card w-100">
                                        <div class="badge-content">
                                            <div class="badge-title">
                                                Пространства, <br>
                                                внешние атрибуты, <br>
                                                комфорт
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <code class="code">
                                        <div class="code-content">
                                            <div class="code-title">
                                                Пример использования
                                            </div>
<pre class="hljs html code-body"><code>&lt;div class="badge badge-black badge-colored badge-card w-100"&gt;
    &lt;div class="badge-content"&gt;
        &lt;div class="badge-title"&gt;
            Пространства,
            внешние атрибуты,
            комфорт
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
                                        </div>
                                    </code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `;
});
