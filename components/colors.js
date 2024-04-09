window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#colors").innerHTML = `
<!-- Палитра цветов -->
    <div class="row g-3">
        <div class="col-12">
            <h3 class="h4">
                Палитра цветов
            </h3>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-body">
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
            </div>
        </div>
    </div>
`;
});
