const modalExample = document.createElement('div');
modalExample.setAttribute('data-modal-id', 'example-modal');
modalExample.classList.add('modal');

window.addEventListener("DOMContentLoaded", () => {
    modalExample.innerHTML = `
    <div class="modal-dialog">
        <button class="btn btn-close" btn-close-modal>
            <i class="icon-close"></i>
        </button>
        <div class="modal-content">
            <div class="modal-header">
                Тестовое окно
            </div>
            <div class="modal-body">
                <p>
                    Привет!
                </p>
            </div>
        </div>
    </div>
`;

    document.body.appendChild(modalExample);
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#modals").innerHTML = `
    <div class="row g-5">
        <div class="col-12">
            <div class="card shadow-none">
                <div class="card-body">
                    <div class="row g-3">
                        <div class="col-12">
                            <h5 class="h5">
                                Модальные окна
                            </h5>
                        </div>
                        <div class="col-12">
                            <div class="row g-3">
                                <div class="col-12">
                                    <p>
                                        Модальные окна — это окна, которые появляются поверх основного содержимого страницы. Они используются для вывода информации, которая не должна быть частью основного содержимого страниц. Модальные окна могут быть вызваны с помощью JavaScript. В этом разделе мы рассмотрим основные элементы модальных окон.
                                    </p>
                                </div>
                                <div class="col-12">
                                    <button type="button" class="btn btn-primary" data-modal-open="example-modal">Открыть модалку</button>
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