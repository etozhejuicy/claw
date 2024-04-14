window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#colors").innerHTML = `
<!-- Палитра цветов -->
<div class="row g-3">
    <div class="col-12">
        <div class="card">
            <div class="card-body">
                <div class="row g-3">
                    <div class="col-12">
                        <h5 class="h-5">
                            Палитра цветов
                        </h5>
                    </div>
                    <div class="col-12">
                        <div class="d-flex flex-row">
                            <div style="display:block;width:3rem;height:3rem;" class="bg-primary"></div>
                            <div style="display:block;width:3rem;height:3rem;" class="bg-secondary"></div>
                            <div style="display:block;width:3rem;height:3rem;" class="bg-success"></div>
                            <div style="display:block;width:3rem;height:3rem;" class="bg-danger"></div>
                            <div style="display:block;width:3rem;height:3rem;" class="bg-warning"></div>
                            <div style="display:block;width:3rem;height:3rem;" class="bg-white"></div>
                            <div style="display:block;width:3rem;height:3rem;" class="bg-black"></div>
                            <div style="display:block;width:3rem;height:3rem;" class="bg-orange"></div>
                            <div style="display:block;width:3rem;height:3rem;" class="bg-purple"></div>
                            <div style="display:block;width:3rem;height:3rem;" class="bg-blue"></div>
                        </div>
                    </div>
                    <div class="col-12">
                        <code class="code">
                            <div class="code-content">
                                <div class="code-title">
                                    Пример использования
                                </div>
                                <div class="code-body">&lt;div style="display:block;width:3rem;height:3rem;" class="bg-primary"&gt;&lt;/div&gt;
                                    &lt;div style="display:block;width:3rem;height:3rem;" class="bg-secondary"&gt;&lt;/div&gt;
                                    &lt;div style="display:block;width:3rem;height:3rem;" class="bg-success"&gt;&lt;/div&gt;
                                    &lt;div style="display:block;width:3rem;height:3rem;" class="bg-danger"&gt;&lt;/div&gt;
                                    &lt;div style="display:block;width:3rem;height:3rem;" class="bg-warning"&gt;&lt;/div&gt;
                                    &lt;div style="display:block;width:3rem;height:3rem;" class="bg-white"&gt;&lt;/div&gt;
                                    &lt;div style="display:block;width:3rem;height:3rem;" class="bg-black"&gt;&lt;/div&gt;
                                    &lt;div style="display:block;width:3rem;height:3rem;" class="bg-orange"&gt;&lt;/div&gt;
                                    &lt;div style="display:block;width:3rem;height:3rem;" class="bg-purple"&gt;&lt;/div&gt;
                                    &lt;div style="display:block;width:3rem;height:3rem;" class="bg-blue"&gt;&lt;/div&gt;
                                </div>
                            </div>
                        </code>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
});
