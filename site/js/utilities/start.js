window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#start").innerHTML = `
<!-- Утилиты -->
<div class="row g-5">
    <div class="col-12" id="start">
        <div class="card shadow-none">
            <div class="card-body">
                <div class="row g-3">
                    <div class="col-12">
                        <h5 class="h5">
                            <span>Утилиты <a href="#start">#</a></span>
                        </h5>
                    </div>
                    <div class="col-12">
                        Утилиты подключены в файле <code class="text-warning">app.scss</code> через <code class="text-blue">@import</code> следующим образом:
                    </div>
                    <div class="col-12">
                        <div class="code">
                            <div class="code-content">
<pre class="hljs scss code-body"><code>// normalize
@import "./utilities/normalize";
// utility
@import "./utilities/utility";
// responsive
@import "./utilities/responsive";</code></pre>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <p>
                            Вы можете регулировать количество импортов в вашем исходном файле стилей.
                        </p>
                        <p>
                            В файле <code class="text-primary">./utilities/utility</code> содержится подключение всех утилит для работы с фреймворком.
                        </p>
                        <p>
                            В файле <code class="text-primary">./utilities/normalize</code> содержатся стили для сброса стилей, источник: <a href="https://github.com/necolas/normalize.css" target="_blank">normalize.css</a>.
                        </p>
                        <p>
                            В файле <code class="text-primary">./utilities/responsive</code> содержится <code class="text-warning">:root</code>-стили для управления "резиновой" версткой.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
});
