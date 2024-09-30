window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#checkbox").innerHTML = `
        <div class="row g-5">
            <div class="col-12">
                <div class="card shadow-none">
                    <div class="card-body">
                        <div class="row g-5">
                            <div class="col-12">
                                <div class="row g-3">
                                    <div class="col-12">
                                        <h5 class="h5">
                                            Чекбоксы
                                        </h5>
                                    </div>
                                    <div class="col-12">
                                        <div class="row g-3">
                                            <div class="col-auto">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                                                    <label class="form-check-label" for="flexCheckChecked">
                                                        Чекбокс выбран
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled>
                                                    <label class="form-check-label" for="flexCheckDisabled">
                                                        Чекбокс не активен
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled>
                                                    <label class="form-check-label" for="flexCheckCheckedDisabled">
                                                        Чекбокс выбран и не активен
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <p>
                                            Чекбокс имеет следующую структуру:
                                        </p>
                                    </div>
                                    <div class="col-12">
                                        <code class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
                                                <div class="code-body">
                                                &lt;div class="form-check"&gt;
                                                &lt;input class="form-check-input" type="checkbox" id="checkboxExample"&gt;
                                                &lt;label class="form-check-label" for="checkboxExample"&gt;
                                                    Чекбокс
                                                &lt;/label&gt;
                                                &lt;/div&gt;
                                                </div>
                                            </div>
                                        </code>
                                    </div>
                                    <div class="col-12">
                                        <p>
                                            Изменяя следующий класс можно манипулировать цветом чекбокса:
                                        </p>
                                        <blockquote class="blockquote">
                                            <div class="blockquote-content">
                                                <div class="blockquote-body text-warning">.form-check-{color}</div>
                                            </div>
                                        </blockquote>
                                        <p>
                                            Список наименований цветов для данного компонента используется в точности, как в <a href="./utilities#colors" class="fw-600">палитре</a>.
                                        </p>
                                    </div>
                                    <div class="col-12">
                                        <div class="row g-3">
                                            <div class="col-auto">
                                                <div class="form-check form-check-primary">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedPrimary" checked>
                                                    <label class="form-check-label" for="flexCheckCheckedPrimary">
                                                        Чекбокс выбран
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="form-check form-check-primary">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabledPrimary" disabled>
                                                    <label class="form-check-label" for="flexCheckDisabledPrimary">
                                                        Чекбокс не активен
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="form-check form-check-primary">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabledPrimary" checked disabled>
                                                    <label class="form-check-label" for="flexCheckCheckedDisabledPrimary">
                                                        Чекбокс выбран и не активен
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="row g-3">
                                            <div class="col-auto">
                                                <div class="form-check form-check-success">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedSuccess" checked>
                                                    <label class="form-check-label" for="flexCheckCheckedSuccess">
                                                        Чекбокс выбран
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="form-check form-check-success">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabledSuccess" disabled>
                                                    <label class="form-check-label" for="flexCheckDisabledSuccess">
                                                        Чекбокс не активен
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="form-check form-check-success">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabledSuccess" checked disabled>
                                                    <label class="form-check-label" for="flexCheckCheckedDisabledSuccess">
                                                        Чекбокс выбран и не активен
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="row g-3">
                                            <div class="col-auto">
                                                <div class="form-check form-check-danger">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDanger" checked>
                                                    <label class="form-check-label" for="flexCheckCheckedDanger">
                                                        Чекбокс выбран
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="form-check form-check-danger">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabledDanger" disabled>
                                                    <label class="form-check-label" for="flexCheckDisabledDanger">
                                                        Чекбокс не активен
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="form-check form-check-danger">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabledDanger" checked disabled>
                                                    <label class="form-check-label" for="flexCheckCheckedDisabledDanger">
                                                        Чекбокс выбран и не активен
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="row g-3">
                                            <div class="col-auto">
                                                <div class="form-check form-check-warning">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedWarning" checked>
                                                    <label class="form-check-label" for="flexCheckCheckedWarning">
                                                        Чекбокс выбран
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="form-check form-check-warning">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabledWarning" disabled>
                                                    <label class="form-check-label" for="flexCheckDisabledWarning">
                                                        Чекбокс не активен
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="form-check form-check-warning">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabledWarning" checked disabled>
                                                    <label class="form-check-label" for="flexCheckCheckedDisabledWarning">
                                                        Чекбокс выбран и не активен
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="row g-3">
                                            <div class="col-auto">
                                                <div class="form-check form-check-orange">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedOrange" checked>
                                                    <label class="form-check-label" for="flexCheckCheckedOrange">
                                                        Чекбокс выбран
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="form-check form-check-orange">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabledOrange" disabled>
                                                    <label class="form-check-label" for="flexCheckDisabledOrange">
                                                        Чекбокс не активен
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="form-check form-check-orange">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabledOrange" checked disabled>
                                                    <label class="form-check-label" for="flexCheckCheckedDisabledOrange">
                                                        Чекбокс выбран и не активен
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="row g-3">
                                            <div class="col-auto">
                                                <div class="form-check form-check-purple">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedPurple" checked>
                                                    <label class="form-check-label" for="flexCheckCheckedPurple">
                                                        Чекбокс выбран
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="form-check form-check-purple">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabledPurple" disabled>
                                                    <label class="form-check-label" for="flexCheckDisabledPurple">
                                                        Чекбокс не активен
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="form-check form-check-purple">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabledPurple" checked disabled>
                                                    <label class="form-check-label" for="flexCheckCheckedDisabledPurple">
                                                        Чекбокс выбран и не активен
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="row g-3">
                                            <div class="col-auto">
                                                <div class="form-check form-check-blue">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedBlue" checked>
                                                    <label class="form-check-label" for="flexCheckCheckedBlue">
                                                        Чекбокс выбран
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="form-check form-check-blue">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabledBlue" disabled>
                                                    <label class="form-check-label" for="flexCheckDisabledBlue">
                                                        Чекбокс не активен
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="form-check form-check-blue">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabledBlue" checked disabled>
                                                    <label class="form-check-label" for="flexCheckCheckedDisabledBlue">
                                                        Чекбокс выбран и не активен
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <p>
                                            Существуют вариации чекбокса с цветом текста, который совпадает с цветом фона чекбокса.
                                        </p>
                                    </div>
                                    <div class="col-12">
                                        <div class="row g-3">
                                            <div class="col-auto">
                                                <div class="form-check form-check-primary form-check-colored">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedPrimary1" checked>
                                                    <label class="form-check-label" for="flexCheckCheckedPrimary1">
                                                        Чекбокс выбран
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="form-check form-check-primary form-check-colored">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabledPrimary1" disabled>
                                                    <label class="form-check-label" for="flexCheckDisabledPrimary1">
                                                        Чекбокс не активен
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="form-check form-check-primary form-check-colored">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabledPrimary1" checked disabled>
                                                    <label class="form-check-label" for="flexCheckCheckedDisabledPrimary1">
                                                        Чекбокс выбран и не активен
                                                    </label>
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
                                                <div class="code-body">
                                                &lt;div class="form-check form-check-primary form-check-colored"&gt;
                                                &lt;input class="form-check-input" type="checkbox" id="checkboxExample"&gt;
                                                &lt;label class="form-check-label" for="checkboxExample"&gt;
                                                    Чекбокс
                                                &lt;/label&gt;
                                                &lt;/div&gt;
                                                </div>
                                            </div>
                                        </code>
                                    </div>
                                    <div class="col-12">
                                        <p>
                                            Когда чекбокс имеет  класс <code class="text-warning">.form-check-colored</code>, он становится цветным.
                                            Граница <code class="text-warning">border</code> и текст <code class="text-warning">color</code> имеет цвет,  который совпадает с цветом фона чекбокса с параметром <code class="text-warning">checked="true"</code>, иначе имеет цвет текста <code class="text-warning">var(--body-text-color);</code>

                                        </p>
                                        <p>
                                            Обратите внимание! <br />
                                            Вариации чекбокса с цветом текста работают только при использовании класса:
                                        </p>
                                        <blockquote class="blockquote">
                                            <div class="blockquote-content">
                                                <div class="blockquote-body text-warning">.form-check-colored</div>
                                            </div>
                                        </blockquote>
                                    </div>
                                    <div class="col-12">
                                        <p>
                                            Чтобы зеркально отобразить ваш чекбокс, добавьте следующий класс:
                                        </p>
                                        <blockquote class="blockquote">
                                            <div class="blockquote-content">
                                                <div class="blockquote-body text-warning">.form-check-reverse</div>
                                            </div>
                                        </blockquote>
                                    </div>
                                    <div class="col-12">
                                        <div class="row g-3">
                                            <div class="col-auto">
                                                <div class="form-check form-check-reverse">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckboxMirror" checked>
                                                    <label class="form-check-label" for="flexCheckboxMirror">
                                                        Чекбокс выбран
                                                    </label>
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
