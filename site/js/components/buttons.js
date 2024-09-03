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
                                        <code class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
                                                <div class="code-body">&lt;button type="button" class="btn btn-primary"&gt;Кнопка 1&lt;/button&gt;
                                                </div>
                                            </div>
                                        </code>
                                    </div>
                                    <div class="col-12">
                                        <p>
                                            Задать цветовую схему для компонента кнопок опираясь на таблицу цветов, добавив в конце после дефиса цвет:
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
                                        <code class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
                                                <div class="code-body">&lt;button type="button" class="btn btn-primary btn-shadow"&gt;Кнопка 1 с тенью&lt;/button&gt;
                                                </div>
                                            </div>
                                        </code>
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
                                        <code class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
                                                <div class="code-body">&lt;button type="button" class="btn btn-primary btn-voluminous"&gt;Кнопка 1 с подсветкой&lt;/button&gt;
                                                </div>
                                            </div>
                                        </code>
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
                                        <code class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
                                                <div class="code-body">&lt;button type="button" class="btn btn-primary btn-outline-primary"&gt;Кнопка 1 с обводкой&lt;/button&gt;
                                                </div>
                                            </div>
                                        </code>
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
                                        <code class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
                                                <div class="code-body">&lt;button type="button" class="btn btn-primary btn-colored btn-outline-primary"&gt;Кнопка 1 с обводкой + цвет&lt;/button&gt;
                                                </div>
                                            </div>
                                        </code>
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
                                        <code class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
                                                <div class="code-body">&lt;button type="button" class="btn btn-primary btn-dimmed btn-colored btn-outline-primary"&gt;Кнопка 1 с затемнением + цвет&lt;/button&gt;
                                                </div>
                                            </div>
                                        </code>
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
                                        <button type="button" class="btn btn-icon btn-primary rounded-circle">
                                            <i class="cl-icon-clock"></i>
                                        </button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-icon btn-secondary rounded-circle">
                                            <i class="cl-icon-keyboard"></i>
                                        </button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-icon btn-danger rounded-circle">
                                            <i class="cl-icon-cart"></i>
                                        </button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-icon btn-warning rounded-circle">
                                            <i class="cl-icon-copy"></i>
                                        </button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-icon btn-success rounded-circle">
                                            <i class="cl-icon-profile"></i>
                                        </button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-icon btn-white rounded-circle">
                                            <i class="cl-icon-image"></i>
                                        </button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-icon btn-vk rounded-circle">
                                            <i class="cl-icon-mobile"></i>
                                        </button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-icon btn-orange rounded-circle">
                                            <i class="cl-icon-pencil"></i>
                                        </button>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-icon btn-purple rounded-circle">
                                            <i class="cl-icon-search"></i>
                                        </button>
                                    </div>
                                    <div class="col-12">
                                        <code class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
                                                <div class="code-body">&lt;button type="button" class="btn btn-primary btn-dimmed btn-colored btn-outline-primary"&gt;
                                                        &lt;i class="cl-icon-search"&gt;&lt;/i&gt;
                                                    &lt;/button&gt;
                                                </div>
                                            </div>
                                        </code>
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
                                            <i class="cl-icon-hour-glass"></i>
                                            <span class="btn-icon-text">Кнопка 1</span>
                                        </button>
                                    </div>
                                    <div class="col-12">
                                        <code class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
                                                <div class="code-body">&lt;button type="button" class="btn btn-icon btn-primary">
                                                        &lt;i class="cl-icon-hour-glass"&gt;&lt;/i&gt;
                                                        &lt;span class="btn-icon-text">Кнопка 1&lt;/span&gt;
                                                    &lt;/button&gt;
                                                </div>
                                            </div>
                                        </code>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-icon btn-secondary">
                                            <span class="btn-icon-text">Кнопка 2</span>
                                            <i class="cl-icon-bubble"></i>
                                        </button>
                                    </div>
                                    <div class="col-12">
                                        <code class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
                                                <div class="code-body">&lt;button type="button" class="btn btn-icon btn-primary">
                                                        &lt;span class="btn-icon-text">Кнопка 2&lt;/span&gt;
                                                        &lt;i class="cl-icon-bubble"&gt;&lt;/i&gt;
                                                    &lt;/button&gt;
                                                </div>
                                            </div>
                                        </code>
                                    </div>
                                    <div class="col-auto">
                                        <button type="button" class="btn btn-icon btn-danger">
                                            <i class="cl-icon-drawer"></i>
                                            <span class="btn-icon-text">Кнопка 3</span>
                                            <i class="cl-icon-upload"></i>
                                        </button>
                                    </div>
                                    <div class="col-12">
                                        <code class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
                                                <div class="code-body">&lt;button type="button" class="btn btn-icon btn-primary">
                                                        &lt;i class="cl-icon-drawer"&gt;&lt;/i&gt;
                                                        &lt;span class="btn-icon-text">Кнопка 3&lt;/span&gt;
                                                        &lt;i class="cl-icon-upload"&gt;&lt;/i&gt;
                                                    &lt;/button&gt;
                                                </div>
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
    </div>
</div>
  `;
});
