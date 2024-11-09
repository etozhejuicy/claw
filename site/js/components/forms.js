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
                                    <div class="col-auto">
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
                                    <div class="col-auto">
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

                                    <div class="col-12">
                                        <p>
                                            Текстовое поле ввода <code>textarea</code> с плейсхолдером. Пример с использованием трёх строк высоты поля:
                                        </p>
                                    </div>
                                    <div class="col-auto">
                                        <textarea type="text" class="form-control w-auto" rows="3" value="" placeholder="Введите текст"></textarea>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
<pre class="hljs html code-body"><code>&lt;textarea type="text" class="form-control w-auto" rows="3" value="" placeholder="Введите текст"&gt;&lt;/textarea&gt;</code></pre>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <p>
                                            Текстовое поле ввода <code class="text-warning">textarea</code> с лейблом, который при вводе смещается вверх и масштабируется. Пример с использованием трёх строк высоты поля:
                                        </p>
                                    </div>
                                    <div class="col-auto">
                                        <div class="form-floating">
                                            <textarea type="text" class="form-control w-auto d-flex" rows="3" value="" id="floatingTextarea" placeholder="Введите текст"></textarea>
                                            <label for="floatingTextarea">Введите ваш текст</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
<pre class="hljs html code-body"><code>&lt;div class="form-floating"&gt;
    &lt;textarea type="text" class="form-control w-auto d-flex" rows="3" value="" id="floatingTextarea" placeholder="Введите текст">&lt;/textarea&gt;
    &lt;label for="floatingTextarea">Введите ваш текст&lt;/label&gt;
&lt;/div&gt;</code></pre>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Отступление -->
                                    <div class="col-12">
                                        <p>
                                            Существует поле ввода текста <code class="text-warning">textarea</code> с раширяемым полем без скролла. Такой эффект достижим с помощью атрибута <code class="text-purple">data-autosize</code>.
                                        </p>
                                        <blockquote class="blockquote">
                                            <div class="blockquote-content">
                                                <div class="blockquote-body">
                                                    <span class="text-warning">Внимание!</span> Данный атрибут работает только при использовании аддона <code class="text-purple">autosize</code>.
                                                </div>
                                            </div>
                                        </blockquote>
                                        <p class="fw-600">
                                            Будет доступен позднее
                                        </p>
                                    </div>
                                    <div class="col-auto">
                                        <div class="form-floating">
                                            <textarea type="text" class="form-control w-auto d-flex" rows="3" value="" id="floatingTextarea" placeholder="Введите текст" data-autosize></textarea>
                                            <label for="floatingTextarea">Введите ваш текст</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
<pre class="hljs html code-body"><code>&lt;div class="form-floating"&gt;
    &lt;textarea type="text" class="form-control w-auto d-flex" rows="3" value="" id="floatingTextarea" placeholder="Введите текст" data-autosize>&lt;/textarea&gt;
    &lt;label for="floatingTextarea">Введите ваш текст&lt;/label&gt;
&lt;/div&gt;</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Отступление -->

                                    <div class="col-12">
                                        <p>
                                            Существуют вариации таких текстовых полей с выбранным цветом <code class="text-warning">border</code> и <code class="text-warning">color</code>, при вводе.
                                        </p>
                                    </div>
                                    <div class="col-auto">
                                        <div class="form-floating form-outline form-outline-primary">
                                            <textarea type="text" class="form-control w-auto d-flex" rows="3" value="" id="floatingTextarea" placeholder="Введите текст"></textarea>
                                            <label for="floatingTextarea">Введите ваш текст</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
<pre class="hljs html code-body"><code>&lt;div class="form-floating form-outline form-outline-primary"&gt;
    &lt;textarea type="text" class="form-control w-auto d-flex" rows="3" value="" id="floatingTextarea" placeholder="Введите текст">&lt;/textarea&gt;
    &lt;label for="floatingTextarea">Введите ваш текст&lt;/label&gt;
&lt;/div&gt;</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <p>
                                            Обратите внимание! Вариации <code class="text-warning">textarea</code> работают только при использовании класса:
                                        </p>
                                        <blockquote class="blockquote">
                                            <div class="blockquote-content">
                                                <div class="blockquote-body text-warning">.form-outline</div>
                                            </div>
                                        </blockquote>
                                    </div>

                                    <div class="col-12">
                                        <p>
                                            Текстовые поля <code class="text-warning">textarea</code> поддерживают нахождение внутри иконки. Пример:
                                        </p>
                                    </div>
                                    <div class="col-auto">
                                        <div class="form-floating">
                                            <div class="form-icon form-icon-top form-icon-end">
                                                <i class="cl-icon-arrow-left"></i>
                                            </div>
                                            <textarea type="text" class="form-control w-auto d-flex" rows="3" value="" id="floatingTextarea" placeholder="Введите текст"></textarea>
                                            <label for="floatingTextarea">Введите ваш текст</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
<pre class="hljs html code-body"><code>&lt;div class="form-floating form-outline form-outline-primary"&gt;
    &lt;div class="form-icon form-icon-top form-icon-end"&gt;
        &lt;i class="cl-icon-arrow-left"&gt;&lt;/i&gt;
    &lt;/div&gt;
    &lt;textarea type="text" class="form-control w-auto d-flex" rows="3" value="" id="floatingTextarea" placeholder="Введите текст">&lt;/textarea&gt;
    &lt;label for="floatingTextarea">Введите ваш текст&lt;/label&gt;
&lt;/div&gt;</code></pre>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <p>
                                            Иконки внутри текстовых полей можно перемещать, регулируя классами иконку в направлениях по оси Y:  <code class="text-warning">.form-icon-top</code>, <code class="text-warning">.form-icon-middle</code> и <code class="text-warning">.form-icon-bottom</code>. 
                                        </p>
                                    </div>
                                    <div class="col-auto">
                                        <div class="form-floating">
                                            <div class="form-icon form-icon-middle form-icon-end">
                                                <i class="cl-icon-arrow-left"></i>
                                            </div>
                                            <textarea type="text" class="form-control w-auto d-flex" rows="3" value="" id="floatingTextarea" placeholder="Введите текст"></textarea>
                                            <label for="floatingTextarea">Введите ваш текст</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
<pre class="hljs html code-body"><code>&lt;div class="form-floating form-outline form-outline-primary"&gt;
    &lt;div class="form-icon form-icon-middle form-icon-end"&gt;
        &lt;i class="cl-icon-arrow-left"&gt;&lt;/i&gt;
    &lt;/div&gt;
    &lt;textarea type="text" class="form-control w-auto d-flex" rows="3" value="" id="floatingTextarea" placeholder="Введите текст">&lt;/textarea&gt;
    &lt;label for="floatingTextarea">Введите ваш текст&lt;/label&gt;
&lt;/div&gt;</code></pre>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <p>
                                            Также можно перемещать, регулируя классами иконку в направлениях по оси X: <code class="text-warning">.form-icon-start</code> и <code class="text-warning">.form-icon-end</code>.
                                        </p>
                                    </div>
                                    <div class="col-auto">
                                        <div class="form-floating">
                                            <div class="form-icon form-icon-bottom form-icon-start">
                                                <i class="cl-icon-arrow-left"></i>
                                            </div>
                                            <textarea type="text" class="form-control w-auto d-flex" rows="3" value="" id="floatingTextarea" placeholder="Введите текст"></textarea>
                                            <label for="floatingTextarea">Введите ваш текст</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
<pre class="hljs html code-body"><code>&lt;div class="form-floating form-outline form-outline-primary"&gt;
    &lt;div class="form-icon form-icon-bottom form-icon-start"&gt;
        &lt;i class="cl-icon-arrow-left"&gt;&lt;/i&gt;
    &lt;/div&gt;
    &lt;textarea type="text" class="form-control w-auto d-flex" rows="3" value="" id="floatingTextarea" placeholder="Введите текст">&lt;/textarea&gt;
    &lt;label for="floatingTextarea">Введите ваш текст&lt;/label&gt;
&lt;/div&gt;</code></pre>
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