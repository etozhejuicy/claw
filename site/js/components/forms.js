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
                                        <div class="row g-3">
                                            <input type="text" class="form-control" placeholder="Введите текст..." />
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