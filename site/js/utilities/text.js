window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#text").innerHTML = `
    <div class="row g-5">
    <!-- Заголовки -->
    <div class="col-12" id="title">
        <div class="card shadow-none">
            <div class="card-body">
                <div class="row g-3">
                    <div class="col-12">
                        <h5 class="h5">
                            <span>Система заголовков <a href="#title">#</a></span>
                        </h5>
                    </div>
                    <div class="col-12">
                        <p>
                            Для всех элементов заголовка —<code>&lt;h1&gt—&lt;h6&gt</code> - убрано как верхнее, так и нижнее поле.
                        </p>
                    </div>
                    <div class="col-12">
                        <h1 class="h1">Заголовок 1</h1>
                        <h2 class="h2">Заголовок 2</h2>
                        <h3 class="h3">Заголовок 3</h3>
                        <h4 class="h4">Заголовок 4</h4>
                        <h5 class="h5">Заголовок 5</h5>
                        <h6 class="h6">Заголовок 6</h6>
                    </div>
                    <div class="col-12">
                        <div class="code">
                            <div class="code-content">
                                <div class="code-title">
                                    Пример использования
                                </div>
<pre class="hljs html code-body"><code>&lt;h1 class="h1"&gt; Заголовок 1 &lt;/h1&gt;</code></pre>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <p>
                            Градация элементов заголовка представлена ниже:
                        </p>
                    </div>
                    <div class="col-12">
                        <div class="code">
                            <div class="code-content">
<pre class="hljs css code-body"><code>.h1
.h2
.h3
.h4
.h5
.h6</code></pre>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <p>
                            Стандартно для всех заголовков заданы параметры стилей:
                        </p>
                    </div>
                    <div class="col-12">
                        <div class="code">
                            <div class="code-content">
<pre class="hljs css code-body"><code>{
    font-weight: 600;
    font-style: normal;
    line-height: 120%;
    letter-spacing: -0.035rem;
}</code></pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Обычный текст -->
    <div class="col-12" id="paragraph">
        <div class="card shadow-none">
            <div class="card-header">
                <h5 class="h5">
                    <span>Параграф <a href="#paragraph">#</a></span>
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
                        <div class="code">
                            <div class="code-content">
                                <div class="code-title">
                                    Пример использования
                                </div>
<pre class="hljs html code-body"><code>&lt;p&gt;
    Это параграф.
&lt;/p&gt;</code></pre>
                            </div>
                        </div>
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
                        <div class="code">
                            <div class="code-content">
                                <div class="code-title">
                                    Пример использования
                                </div>
<pre class="hljs html code-body"><code>&lt;p class="fw-100"&gt;
    Ваш текст
&lt;/p&gt;</code></pre>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <p>
                            Вот как числовые значения влияют на насыщенность шрифта:
                        </p>
                    </div>
                    <div class="col-12">
                        <div class="code">
                            <div class="code-content">
<pre class="hljs css code-body"><code>.fw-100
.fw-200
.fw-300
.fw-400
.fw-500
.fw-600
.fw-600
.fw-700
.fw-800
.fw-900</code></pre>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <p>
                            Взаимодействие с цветами текстов возможно ровно также, как и с цветом блока:
                        </p>
                        <blockquote class="blockquote">
                            <div class="blockquote-content">
                                <div class="blockquote-body text-warning">.text-{color}-{level}</div>
                            </div>
                        </blockquote>
                        <p>
                            Пример основной палитры цветов для текста представлен ниже:
                        </p>
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
                        <div class="code">
                            <div class="code-content">
                                <div class="code-title">
                                    Пример использования
                                </div>
<pre class="hljs html code-body"><code>&lt;p class="text-primary"&gt;
    Ваш текст
&lt;/p&gt;</code></pre>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <p>
                            Список наименований цветов для параграфа используется в точности, как в <a href="#colors" class="fw-600">палитре</a>.
                        </p>
                    </div>
                    <div class="col-12">
                        Прозрачность можно задать числовым значением модификатора элемента. Пример с 50% прозрачностью:
                    </div>
                    <div class="col-12">
                        <p class="text-primary-50">
                            Это прогрессивные специалисты самых разных профилей со всей страны. Находи тех, кто нужен твоему проекту и формируй команду мечты.
                        </p>
                    </div>
                    <div class="col-12">
                        <div class="code">
                            <div class="code-content">
                                <div class="code-title">
                                    Пример использования
                                </div>
<pre class="hljs html code-body"><code>&lt;p class="text-primary-50"&gt; Ваш текст &lt;/div&gt;</code></pre>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <p>
                            Список % прозрачности цветов:
                        </p>
                        <blockquote class="blockquote">
                            <div class="blockquote-content">
                                <div class="blockquote-body">
                                    <ul class="list list-nobullet m-0">
                                        <li>0 - 0%</li>
                                        <li>5 - 5%</li>
                                        <li>10 - 10%</li>
                                        <li>15 - 15%</li>
                                        <li>20 - 20%</li>
                                        <li>25 - 25%</li>
                                        <li>30 - 30%</li>
                                        <li>35 - 35%</li>
                                        <li>40 - 40%</li>
                                        <li>45 - 45%</li>
                                        <li>50 - 50%</li>
                                        <li>55 - 55%</li>
                                        <li>60 - 60%</li>
                                        <li>65 - 65%</li>
                                        <li>70 - 70%</li>
                                        <li>75 - 75%</li>
                                        <li>80 - 80%</li>
                                        <li>85 - 85%</li>
                                        <li>90 - 90%</li>
                                        <li>95 - 95%</li>
                                        <li>100 - 100%</li>
                                    </ul>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  `;
});
