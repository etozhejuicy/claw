window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#buttons").innerHTML = `
    <div class="row g-5">
    <!-- Кнопки обычные -->
    <div class="col-12">
        <div class="row g-3">
            <div class="col-12">
                <div class="card shadow-none">
                    <div class="card-body">
                        <div class="row g-5">
                            <div class="col-12">
                                <div class="row g-3">
                                    <div class="col-12">
                                        <h5 class="h5">
                                            Кнопки
                                        </h5>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn">Пример кнопки</button>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
                                                <pre class="hljs html code-body"><code>&lt;button type="button" class="btn"&gt;Пример кнопки&lt;/button&gt;</code></pre>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <p>
                                            Кнопки могут иметь разные размеры в зависимости от задач интерфейса. Получить самый маленький размер возможно при помощи специального класса <code class="text-warning">.btn-xs</code> Для примера, так выглядит самая маленькая кнопка:
                                        </p>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-xs">Пример кнопки</button>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
                                                <pre class="hljs html code-body"><code>&lt;button type="button" class="btn btn-xs"&gt;Пример кнопки&lt;/button&gt;</code></pre>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <p>
                                            Можно получить размер чуть больше, чем предыдущий при помощи специального класса <code class="text-warning">.btn-sm</code> Для примера, так выглядит маленькая кнопка:
                                        </p>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-sm">Пример кнопки</button>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
                                                <pre class="hljs html code-body"><code>&lt;button type="button" class="btn btn-sm"&gt;Пример кнопки&lt;/button&gt;</code></pre>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <p>
                                            А, вот так выглядит большая кнопка с использованием специального класса <code class="text-warning">.btn-lg</code>
                                        </p>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-lg">Пример кнопки</button>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
                                                <pre class="hljs html code-body"><code>&lt;button type="button" class="btn btn-lg"&gt;Пример кнопки&lt;/button&gt;</code></pre>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <p>
                                            Это самая большая кнопка с использованием специального класса <code class="text-warning">.btn-xl</code>
                                        </p>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-xl">Пример кнопки</button>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
                                                <pre class="hljs html code-body"><code>&lt;button type="button" class="btn btn-xl"&gt;Пример кнопки&lt;/button&gt;</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="row g-3">
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-primary">Кнопка 1</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-secondary">Кнопка 2</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-danger">Кнопка 3</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-warning">Кнопка 4</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-success">Кнопка 5</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-white">Кнопка 6</button>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
                                                <pre class="hljs html code-body"><code>&lt;button type="button" class="btn btn-primary"&gt;Кнопка 1&lt;/button&gt;</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <p>
                                            Задать цветовую схему для компонента кнопок можно, опираясь на таблицу цветов, добавив в конце после дефиса цвет:
                                        </p>
                                        <blockquote class="blockquote">
                                            <div class="blockquote-content">
                                                <div class="blockquote-body text-warning">.btn-{color}</div>
                                            </div>
                                        </blockquote>
                                    </div>
                                    <div class="col-12">
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
                                <div class="row g-3">
                                    <div class="col-12">
                                        <h5 class="h5">
                                            Кнопки (с тенью)
                                        </h5>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-primary btn-shadow">Кнопка 1</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-secondary btn-shadow">Кнопка 2</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-danger btn-shadow">Кнопка 3</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-warning btn-shadow">Кнопка 4</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-success btn-shadow">Кнопка 5</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-white btn-shadow">Кнопка 6</button>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
                                                <pre class="hljs html code-body"><code>&lt;button type="button" class="btn btn-primary btn-shadow"&gt;Кнопка 1 с тенью&lt;/button&gt;</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="row g-3">
                                    <div class="col-12">
                                        <h5 class="h5">
                                            Кнопки (с подсветкой)
                                        </h5>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-primary btn-voluminous">Кнопка 1</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-secondary btn-voluminous">Кнопка 2</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-danger btn-voluminous">Кнопка 3</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-warning btn-voluminous">Кнопка 4</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-success btn-voluminous">Кнопка 5</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-white btn-voluminous">Кнопка 6</button>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
                                                <pre class="hljs html code-body"><code>&lt;button type="button" class="btn btn-primary btn-voluminous"&gt;Кнопка 1 с подсветкой&lt;/button&gt;</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="row g-3">
                                    <div class="col-12">
                                        <h5 class="h5">
                                            Кнопки (с обводкой)
                                        </h5>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-primary btn-outline-primary">Кнопка 1</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-secondary btn-outline-secondary">Кнопка 2</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-danger btn-outline-danger">Кнопка 3</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-warning btn-outline-warning">Кнопка 4</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-success btn-outline-success">Кнопка 5</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-white btn-outline-white">Кнопка 6</button>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
                                                <pre class="hljs html code-body"><code>&lt;button type="button" class="btn btn-primary btn-outline-primary"&gt;Кнопка 1 с обводкой&lt;/button&gt;</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="row g-3">
                                    <div class="col-12">
                                        <h5 class="h5">
                                            Кнопки (с обводкой + цвет)
                                        </h5>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-primary btn-colored btn-outline-primary">Кнопка 1</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-secondary btn-colored btn-outline-secondary">Кнопка 2</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-danger btn-colored btn-outline-danger">Кнопка 3</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-warning btn-colored btn-outline-warning">Кнопка 4</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-success btn-colored btn-outline-success">Кнопка 5</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-white btn-colored btn-outline-white">Кнопка 6</button>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
                                                <pre class="hljs html code-body"><code>&lt;button type="button" class="btn btn-primary btn-colored btn-outline-primary"&gt;Кнопка 1 с обводкой + цвет&lt;/button&gt;</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="row g-3">
                                    <div class="col-12">
                                        <h5 class="h5">
                                            Кнопки (с затемнением)
                                        </h5>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-primary btn-dimmed btn-colored">Кнопка 1</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-secondary btn-dimmed btn-colored">Кнопка 2</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-danger btn-dimmed btn-colored">Кнопка 3</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-warning btn-dimmed btn-colored">Кнопка 4</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-success btn-dimmed btn-colored">Кнопка 5</button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-white btn-dimmed btn-colored">Кнопка 6</button>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
                                                <pre class="hljs html code-body"><code>&lt;button type="button" class="btn btn-primary btn-dimmed btn-colored btn-outline-primary"&gt;Кнопка 1 с затемнением + цвет&lt;/button&gt;</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="row g-3">
                                    <div class="col-12">
                                        <h5 class="h5">
                                            Кнопки (с иконками)
                                        </h5>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-icon btn-primary">
                                            <i class="fa-solid fa-clock"></i>
                                        </button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-icon btn-secondary">
                                            <i class="fa-solid fa-keyboard"></i>
                                        </button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-icon btn-danger">
                                            <i class="fa-solid fa-cart-shopping"></i>
                                        </button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-icon btn-warning">
                                            <i class="fa-solid fa-copy"></i>
                                        </button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-icon btn-success">
                                            <i class="fa-solid fa-user"></i>
                                        </button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-icon btn-white">
                                            <i class="fa-solid fa-image"></i>
                                        </button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-icon btn-vk">
                                            <i class="fa-solid fa-phone"></i>
                                        </button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-icon btn-orange">
                                            <i class="fa-solid fa-pencil"></i>
                                        </button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-icon btn-purple">
                                            <i class="fa-solid fa-search"></i>
                                        </button>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
<pre class="hljs html code-body"><code>&lt;button type="button" class="btn btn-icon btn-primary"&gt;
    &lt;i class="cl-icon-search"&gt;&lt;/i&gt;
&lt;/button&gt;</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="row g-3">
                                    <div class="col-12">
                                        <h5 class="h5">
                                            Кнопки (с иконками + текст)
                                        </h5>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-icon btn-primary">
                                            <i class="fa-solid fa-hourglass-start"></i>
                                            <span class="btn-icon-text">Кнопка 1</span>
                                        </button>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
<pre class="hljs html code-body"><code>&lt;button type="button" class="btn btn-icon btn-primary">
    &lt;i class="cl-icon-hour-glass"&gt;&lt;/i&gt;
    &lt;span class="btn-icon-text">Кнопка 1&lt;/span&gt;
&lt;/button&gt;</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-icon btn-secondary">
                                            <span class="btn-icon-text">Кнопка 2</span>
                                            <i class="fa-solid fa-comment"></i>
                                        </button>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
<pre class="hljs html code-body"><code>&lt;button type="button" class="btn btn-icon btn-primary">
    &lt;span class="btn-icon-text">Кнопка 2&lt;/span&gt;
    &lt;i class="cl-icon-bubble"&gt;&lt;/i&gt;
&lt;/button&gt;</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-icon btn-danger">
                                            <i class="fa-solid fa-bars"></i>
                                            <span class="btn-icon-text">Кнопка 3</span>
                                            <i class="fa-solid fa-volume-high"></i>
                                        </button>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
<pre class="hljs html code-body"><code>&lt;button type="button" class="btn btn-icon btn-primary">
    &lt;i class="cl-icon-drawer"&gt;&lt;/i&gt;
    &lt;span class="btn-icon-text">Кнопка 3&lt;/span&gt;
    &lt;i class="cl-icon-upload"&gt;&lt;/i&gt;
&lt;/button&gt;</code></pre>
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
  `;
});