class Header {
    constructor() {
        this.options = {
            header: document.querySelector(".header"),
        };
        this.init();
    }

    init() {
        this.setFixedHeader();

        window.addEventListener("scroll", this.setFixedHeader.bind(this));
    }

    setFixedHeader() {
        if (!this.options.header) return;

        if (window.scrollY >= this.options.header.offsetHeight - 20) {
            this.options.header.classList.add("scrolled");
        } else {
            this.options.header.classList.remove("scrolled");
        }
    }
}

export default new Header();