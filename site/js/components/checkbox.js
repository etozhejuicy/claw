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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`;
});