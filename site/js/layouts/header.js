import logo from "/logo.svg";

class Header {
  constructor() {
    window.addEventListener("DOMContentLoaded", () => {
      this.events();
    });
  }

  events() {
    let header = document.createElement("header"),
      main = document.querySelector("main");

    header.innerHTML =
      `
            <div class="container">
                <div class="header-inner">
                    <div class="row g-2 g-md-4">
                        <div class="col-auto">
                            <div class="header-logo">
                                <img data-src="` +
      logo +
      `" class="lazyload" />
                                <a href="./" class="stretched-link"></a>
                            </div>
                        </div>
                        <div class="col">
                            <div class="header-navigation">
                                <nav class="nav nav-horizontal" navigation="header"></nav>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="header-button">
                                <button type="button" class="btn btn-grey-600 btn-dimmed btn-colored btn-icon btn-icon-burger position-relative" data-menu-open="">
                                    <i class="cl-icon-menu"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `;

    // add class for <header>
    header.classList.add("header");

    // prepend header of main
    main.parentElement.prepend(header);
  }
}

new Header();
