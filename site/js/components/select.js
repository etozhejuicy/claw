window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#select").innerHTML = `
        <div class="row g-5">
            <div class="col-12">
                <div class="card shadow-none">
                    <div class="card-body">
                        <div class="row g-5">
                            <div class="col-12">
                                <div class="row g-3">
                                    <div class="col-12">
                                        <h5 class="h5">
                                            Формы вариантов
                                        </h5>
                                    </div>
                                    <div class="col-12">
                                        <p>
                                            Данный компонент представляет собой выбор из списка возможных вариантов.
                                        </p>
                                    </div>
                                    <div class="col-12">
                                        <select class="form-select">
                                            <option value="" disabled selected>Пожалуйста, выберите вариант</option>
                                            <option value="dog">Собака</option>
                                            <option value="cat">Кот</option>
                                            <option value="hamster">Хомяк</option>
                                            <option value="parrot">Попугай</option>
                                            <option value="spider">Паук</option>
                                            <option value="goldfish">Золотая рыбка</option>
                                        </select>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
<pre class="hljs html code-body"><code>&lt;select class="form-select"&gt;
    &lt;option value="" disabled selected>Пожалуйста, выберите вариант&lt;/option&gt;
    &lt;option value="dog"&gt;Собака&lt;/option&gt;
    &lt;option value="cat"&gt;Кот&lt;/option&gt;
    &lt;option value="hamster"&gt;Хомяк&lt;/option&gt;
    &lt;option value="parrot"&gt;Попугай&lt;/option&gt;
    &lt;option value="spider"&gt;Паук&lt;/option&gt;
    &lt;option value="goldfish"&gt;Золотая рыбка&lt;/option&gt;
&lt;/select&gt;</code></pre>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <p>
                                            Компонент <code>select</code> имеет малый и большой размеры.
                                        </p>
                                    </div>
                                    <div class="col-12">
                                        <select class="form-select form-select-sm">
                                            <option value="" disabled selected>Пожалуйста, выберите вариант</option>
                                            <option value="dog">Собака</option>
                                            <option value="cat">Кот</option>
                                            <option value="hamster">Хомяк</option>
                                            <option value="parrot">Попугай</option>
                                            <option value="spider">Паук</option>
                                            <option value="goldfish">Золотая рыбка</option>
                                        </select>
                                    </div>
                                    <div class="col-12">
                                        <select class="form-select form-select-lg">
                                            <option value="" disabled selected>Пожалуйста, выберите вариант</option>
                                            <option value="dog">Собака</option>
                                            <option value="cat">Кот</option>
                                            <option value="hamster">Хомяк</option>
                                            <option value="parrot">Попугай</option>
                                            <option value="spider">Паук</option>
                                            <option value="goldfish">Золотая рыбка</option>
                                        </select>
                                    </div>
                                    <div class="col-12">
                                        <p>
                                            Регулировать размер <code>select</code> возможно с помощью классов <code class="text-warning">.form-select-sm</code> и <code class="text-warning">.form-select-lg</code>
                                        </p>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
<pre class="hljs html code-body"><code>&lt;select class="form-select form-select-sm"&gt;
    &lt;option value="" disabled selected>Пожалуйста, выберите вариант&lt;/option&gt;
    &lt;option value="dog"&gt;Собака&lt;/option&gt;
    &lt;option value="cat"&gt;Кот&lt;/option&gt;
    &lt;option value="hamster"&gt;Хомяк&lt;/option&gt;
    &lt;option value="parrot"&gt;Попугай&lt;/option&gt;
    &lt;option value="spider"&gt;Паук&lt;/option&gt;
    &lt;option value="goldfish"&gt;Золотая рыбка&lt;/option&gt;
&lt;/select&gt;</code></pre>
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