window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#colors").innerHTML = `
<!-- Палитра цветов -->
<div class="row g-5">
    <div class="col-12" id="palette">
        <div class="card shadow-none">
            <div class="card-body">
                <div class="row g-3">
                    <div class="col-12">
                        <h5 class="h-5">
                            Палитра цветов
                        </h5>
                    </div>
                    <div class="col-12">
                        <p class="m-0">
                            <b>Клешня</b> содержит базовую цветовую палитру, которая задает тон нашим стилям и компонентам. Это позволяет проводить более полную и детальную настройку для любого проекта.
                        </p>
                        <p>
                            Цветовые решения базируются на методологии БЭМ и представляют структуру в селекторах:
                        </p>
                        <blockquote class="blockquote">
                            <div class="blockquote-content">
                                <div class="blockquote-body text-warning">.bg-{color}-{level}</div>
                            </div>
                        </blockquote>
                        <p>
                            Пример основной палитры цветов представлен ниже:
                        </p>
                    </div>
                    <div class="col-12">
                        <div class="row g-1">
                            <div class="col-auto">
                                <div style="display:block;width:3rem;height:3rem;" class="bg-primary"></div>
                            </div>
                            <div class="col-auto">
                                <div style="display:block;width:3rem;height:3rem;" class="bg-secondary"></div>
                            </div>
                            <div class="col-auto">
                                <div style="display:block;width:3rem;height:3rem;" class="bg-success"></div>
                            </div>
                            <div class="col-auto">
                                <div style="display:block;width:3rem;height:3rem;" class="bg-danger"></div>
                            </div>
                            <div class="col-auto">
                                <div style="display:block;width:3rem;height:3rem;" class="bg-warning"></div>
                            </div>
                            <div class="col-auto">
                                <div style="display:block;width:3rem;height:3rem;" class="bg-white"></div>
                            </div>
                            <div class="col-auto">
                                <div style="display:block;width:3rem;height:3rem;" class="bg-black"></div>
                            </div>
                            <div class="col-auto">
                                <div style="display:block;width:3rem;height:3rem;" class="bg-orange"></div>
                            </div>
                            <div class="col-auto">
                                <div style="display:block;width:3rem;height:3rem;" class="bg-purple"></div>
                            </div>
                            <div class="col-auto">
                                <div style="display:block;width:3rem;height:3rem;" class="bg-blue"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <code class="code">
                            <div class="code-content">
                                <div class="code-title">
                                    Пример использования
                                </div>
                                <div class="code-body">&lt;div class="bg-primary"&gt;&lt;/div&gt;
                                </div>
                            </div>
                        </code>
                    </div>
                    <div class="col-12">
                        <p>
                            Список наименования основной палитры цветов:
                        </p>
                        <blockquote class="blockquote">
                            <div class="blockquote-content">
                                <div class="blockquote-body">
                                    <ul class="list list-nobullet m-0">
                                        <li class="list-item text-primary">primary</li>
                                        <li class="list-item text-secondary">secondary</li>
                                        <li class="list-item text-success">success</li>
                                        <li class="list-item text-danger">danger</li>
                                        <li class="list-item text-warning">warning</li>
                                        <li class="list-item text-black">black</li>
                                        <li class="list-item text-orange">orange</li>
                                        <li class="list-item text-purple">purple</li>
                                        <li class="list-item text-blue">blue</li>
                                        <li class="list-item text-white">white</li>
                                    </ul>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                    <div class="col-12">
                        Прозрачность можно задать числовым значением модификатора элемента. Пример с 50% прозрачностью:
                    </div>
                    <div class="col-12">
                        <div class="row g-1">
                            <div class="col-auto">
                                <div style="display:block;width:3rem;height:3rem;" class="bg-primary-50"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <code class="code">
                            <div class="code-content">
                                <div class="code-title">
                                    Пример использования
                                </div>
                                <div class="code-body">&lt;div class="bg-primary-50"&gt;&lt;/div&gt;
                                </div>
                            </div>
                        </code>
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
