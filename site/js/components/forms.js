window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#forms").innerHTML = `
        <div class="row g-5">
            <div class="col-12">
                <div class="card shadow-none">
                    <div class="card-body">
                        <div class="row g-5">
                            <div class="col-12">
                                <div class="row g-3">
                                    <div class="col-12">
                                        <h5 class="h5">
                                            Формы ввода
                                        </h5>
                                    </div>
                                    <div class="col-12">
                                        <p>
                                            Данный компонент имеет множество вариаций, создан для отображения полей ввода информации в привычном виде для фреймворка. Можете попробовать набрать текст в данном примере:
                                        </p>
                                    </div>
                                    <div class="col-12">
                                        <input type="text" class="form-control" placeholder="Введите текст..." />
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
<pre class="hljs html code-body"><code>&lt;input type="text" class="form-control" placeholder="Введите текст..." /&gt;</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <p>
                                            Вы можете задать автоматический размер для вашего поля ввода, добавив класс <code class="text-warning">.w-auto</code>
                                        </p>
                                    </div>
                                    <div class="col-12">
                                        <input type="text" class="form-control w-auto" placeholder="Введите текст..." />
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
<pre class="hljs html code-body"><code>&lt;input type="text" class="form-control w-auto" placeholder="Введите текст..." /&gt;</code></pre>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <p>
                                            Текстовое поле ввода <code>textarea</code> также поддерживается. Пример с использованием трёх строк высоты поля:
                                        </p>
                                    </div>
                                    <div class="col-12">
                                        <textarea type="text" class="form-control w-auto" rows="3" value=""></textarea>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
<pre class="hljs html code-body"><code>&lt;textarea type="text" class="form-control w-auto" rows="3" value=""&gt;&lt;/textarea&gt;</code></pre>
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