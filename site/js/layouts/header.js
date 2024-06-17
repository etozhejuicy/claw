import logo from "/logo.svg";

window.addEventListener("DOMContentLoaded", () => {
  let header = document.createElement("header"),
    main = document.querySelector("main");

  header.innerHTML =
    `
            <div class="container">
                <div class="header-inner">
                    <div class="row g-4">
                        <div class="col-auto">
                            <div class="header-logo">
                                <img data-src="` +
    logo +
    `" class="lazyload" />
                                <a href="./" class="stretched-link"></a>
                            </div>
                        </div>
                        <div class="col">
                            <nav class="nav nav-horizontal">
                                <div class="nav-item">
                                    <a href="./installation" class="nav-link" url="/installation">
                                        <div class="nav-link-inner">
                                            <div class="nav-link-text">
                                                Установка
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="nav-item">
                                    <a href="./components" class="nav-link" url="/components">
                                        <div class="nav-link-inner">
                                            <div class="nav-link-text">
                                                Компоненты
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="nav-item">
                                    <a href="./utilities" class="nav-link" url="/utilities">
                                        <div class="nav-link-inner">
                                            <div class="nav-link-text">
                                                Утилиты
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
    `;

  // add class for <header>
  header.classList.add("header");

  // prepend header of main
  main.parentElement.prepend(header);
});
