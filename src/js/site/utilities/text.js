window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#text").innerHTML = `
    <div class="row g-5">
    <!-- Заголовки -->
    <div class="col-12">
        <div class="card shadow-none">
            <div class="card-body">
                <div class="row g-3">
                    <div class="col-12">
                        <h5 class="h-5">
                            Система заголовков
                        </h5>
                    </div>
                    <div class="col-12">
                        <p>
                            Для всех элементов заголовка —<code>&lt;h1&gt—&lt;h6&gt</code> - убрано как верхнее, так и нижнее поле.
                        </p>
                    </div>
                    <div class="col-12">
                        <h1 class="h-1">Заголовок 1</h1>
                        <h2 class="h-2">Заголовок 2</h2>
                        <h3 class="h-3">Заголовок 3</h3>
                        <h4 class="h-4">Заголовок 4</h4>
                        <h5 class="h-5">Заголовок 5</h5>
                        <h6 class="h-6">Заголовок 6</h6>
                    </div>
                    <div class="col-12">
                        <code class="code">
                            <div class="code-content">
                                <div class="code-title">
                                    Пример использования
                                </div>
                                <div class="code-body">&lt;h1 class="h-1"&gt; Заголовок 1 &lt;/h1&gt;</div>
                            </div>
                        </code>
                    </div>
                    <div class="col-12">
                        <p>
                            Градация элементов заголовка представлена ниже:
                        </p>
                        <blockquote class="blockquote">
                            <div class="blockquote-content">
                                <div class="blockquote-body">
                                    <ul class="list list-nobullet m-0">
                                        <li class="list-item">.h-1</li>
                                        <li class="list-item">.h-2</li>
                                        <li class="list-item">.h-3</li>
                                        <li class="list-item">.h-4</li>
                                        <li class="list-item">.h-5</li>
                                        <li class="list-item">.h-6</li>
                                    </ul>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Обычный текст -->
    <div class="col-12">
        <div class="card shadow-none">
            <div class="card-header">
                <h5 class="h-5">
                    Обычный текст (параграф)
                </h5>
            </div>
            <div class="card-body">
                <div class="row g-3">
                    <div class="col-12">
                        <p>
                            Это параграф.
                        </p>
                    </div>
                    <div class="col-12">
                        <code class="code">
                            <div class="code-content">
                                <div class="code-title">
                                    Пример использования
                                </div>
                                <div class="code-body">&lt;p&gt;
                                        Это параграф.
                                    &lt;/p&gt;
                                </div>
                            </div>
                        </code>
                    </div>
                    <div class="col-12">
                        <p>
                            Есть возможность изменять насыщенность текста параграфа находу:
                        </p>
                        <blockquote class="blockquote mb-0">
                            <div class="blockquote-content">
                                <div class="blockquote-body text-warning">.fw-{level}</div>
                            </div>
                        </blockquote>
                    </div>
                    <div class="col-12">
                        <p class="fw-100">
                            Это прогрессивные специалисты самых разных профилей со всей страны. Находи тех, кто нужен твоему проекту и формируй команду мечты.
                        </p>
                        <p class="fw-200">
                            Это прогрессивные специалисты самых разных профилей со всей страны. Находи тех, кто нужен твоему проекту и формируй команду мечты.
                        </p>
                        <p class="fw-300">
                            Это прогрессивные специалисты самых разных профилей со всей страны. Находи тех, кто нужен твоему проекту и формируй команду мечты.
                        </p>
                        <p class="fw-400">
                            Это прогрессивные специалисты самых разных профилей со всей страны. Находи тех, кто нужен твоему проекту и формируй команду мечты.
                        </p>
                        <p class="fw-500">
                            Это прогрессивные специалисты самых разных профилей со всей страны. Находи тех, кто нужен твоему проекту и формируй команду мечты.
                        </p>
                        <p class="fw-600">
                            Это прогрессивные специалисты самых разных профилей со всей страны. Находи тех, кто нужен твоему проекту и формируй команду мечты.
                        </p>
                        <p class="fw-700">
                            Это прогрессивные специалисты самых разных профилей со всей страны. Находи тех, кто нужен твоему проекту и формируй команду мечты.
                        </p>
                        <p class="fw-800">
                            Это прогрессивные специалисты самых разных профилей со всей страны. Находи тех, кто нужен твоему проекту и формируй команду мечты.
                        </p>
                        <p class="fw-900">
                            Это прогрессивные специалисты самых разных профилей со всей страны. Находи тех, кто нужен твоему проекту и формируй команду мечты.
                        </p>
                    </div>
                    <div class="col-12">
                        <code class="code">
                            <div class="code-content">
                                <div class="code-title">
                                    Пример использования
                                </div>
                                <div class="code-body">&lt;p class="fw-100"&gt;
                                        Ваш текст
                                    &lt;/p&gt;
                                </div>
                            </div>
                        </code>
                    </div>
                    <div class="col-12">
                        <p>
                            Вот как числовые значения влияют на насыщенность шрифта:
                        </p>
                        <blockquote class="blockquote">
                            <div class="blockquote-content">
                                <div class="blockquote-body">
                                    <ul class="list list-nobullet m-0">
                                        <li class="list-item">.fw-100</li>
                                        <li class="list-item">.fw-200</li>
                                        <li class="list-item">.fw-300</li>
                                        <li class="list-item">.fw-400</li>
                                        <li class="list-item">.fw-500</li>
                                        <li class="list-item">.fw-600</li>
                                        <li class="list-item">.fw-600</li>
                                        <li class="list-item">.fw-700</li>
                                        <li class="list-item">.fw-800</li>
                                        <li class="list-item">.fw-900</li>
                                    </ul>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                    <div class="col-12">
                        <p class="text-primary">
                            Это прогрессивные специалисты самых разных профилей со всей страны. Находи тех, кто нужен твоему проекту и формируй команду мечты.
                        </p>
                        <p class="text-secondary">
                            Это прогрессивные специалисты самых разных профилей со всей страны. Находи тех, кто нужен твоему проекту и формируй команду мечты.
                        </p>
                        <p class="text-success">
                            Это прогрессивные специалисты самых разных профилей со всей страны. Находи тех, кто нужен твоему проекту и формируй команду мечты.
                        </p>
                        <p class="text-danger">
                            Это прогрессивные специалисты самых разных профилей со всей страны. Находи тех, кто нужен твоему проекту и формируй команду мечты.
                        </p>
                        <p class="text-warning">
                            Это прогрессивные специалисты самых разных профилей со всей страны. Находи тех, кто нужен твоему проекту и формируй команду мечты.
                        </p>
                        <p class="text-black">
                            Это прогрессивные специалисты самых разных профилей со всей страны. Находи тех, кто нужен твоему проекту и формируй команду мечты.
                        </p>
                        <p class="text-white">
                            Это прогрессивные специалисты самых разных профилей со всей страны. Находи тех, кто нужен твоему проекту и формируй команду мечты.
                        </p>
                        <p class="text-orange">
                            Это прогрессивные специалисты самых разных профилей со всей страны. Находи тех, кто нужен твоему проекту и формируй команду мечты.
                        </p>
                        <p class="text-purple">
                            Это прогрессивные специалисты самых разных профилей со всей страны. Находи тех, кто нужен твоему проекту и формируй команду мечты.
                        </p>
                        <p class="text-blue">
                            Это прогрессивные специалисты самых разных профилей со всей страны. Находи тех, кто нужен твоему проекту и формируй команду мечты.
                        </p>
                    </div>
                    <div class="col-12">
                        <code class="code">
                            <div class="code-content">
                                <div class="code-title">
                                    Пример использования
                                </div>
                                <div class="code-body">&lt;p class="text-primary"&gt;
                                        Ваш текст
                                    &lt;/p&gt;
                                </div>
                            </div>
                        </code>
                    </div>
                    <div class="col-12">
                        <p>
                            Список наименований цветов для параграфа используется в точности, как в <a href="#palette" class="fw-600">палитре</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  `;
});
