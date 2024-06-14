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
                        <blockquote class="blockquote">
                            <div class="blockquote-content">
                                <div class="blockquote-body">
                                    <div>
                                        <span class="text-secondary">// utility</span><br>
                                        @import "./utilities/utility";<br>
                                        <span class="text-secondary">// normalize</span><br>
                                        @import "./utilities/normalize";<br>
                                        <span class="text-secondary">// responsive</span><br>
                                        @import "./utilities/responsive";
                                    </div>
                                </div>
                            </div>
                        </blockquote>
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
