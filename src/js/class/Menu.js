class Menu {
    constructor(menuElem) {
        this.menu = menuElem || document.querySelector(".menu");
        if (!this.menu) {
            console.warn("Menu element not found");
            return;
        }
        this.isMobile = false;

        this.currentState = "closed";
        this.triggers = [];

        this.init();
    }

    init() {
        console.log("Menu is initialized");

        this.triggers = Array.from(document.querySelectorAll("[data-menu]"));

        this.triggers.forEach((trigger) => {
            this.setupEvents(trigger);
        });

        this.updateTriggers();

        document.addEventListener("click", this.handleOutsideClick.bind(this));

        window.addEventListener('resize', this.resizeInit());
    }

    setupEvents(trigger) {
        trigger.addEventListener("click", (e) => {
            e.preventDefault();
            const expectedState = trigger.getAttribute("data-menu");

            if (expectedState === this.currentState) {
                this.toggle(trigger);
            }
        });
    }

    handleOutsideClick(event) {
        if (this.currentState !== "open") return;

        const isClickInsideMenu = this.menu.contains(event.target);
        const isClickOnTrigger = this.triggers.some((trigger) =>
            trigger.contains(event.target),
        );

        if (!isClickInsideMenu && !isClickOnTrigger) {
            this.close();
        }
    }

    updateTriggers() {
        this.triggers.forEach((trigger) => {
            trigger.setAttribute("data-menu", this.currentState);
        });

        this.triggers.forEach((trigger) => {
            const icon = trigger.querySelector("svg");
            if (icon) {
                icon.innerHTML = this.currentState === "open" ? `<use xlink:href="/sprite.svg#icon-cross"></use>` : `<use xlink:href="/sprite.svg#icon-menu"></use>`;
            }
        });
    }

    open() {
        if (this.currentState === "open") return;

        this.currentState = "open";
        this.menu.classList.add("open");
        document.documentElement.classList.add("menu-is-open");

        this.updateTriggers();
        console.log("Menu opened");
    }

    close() {
        if (this.currentState === "closed") return;

        this.currentState = "closed";
        this.menu.classList.remove("open");
        document.documentElement.classList.remove("menu-is-open");

        this.updateTriggers();
        console.log("Menu closed");
    }

    toggle(trigger) {
        if (this.currentState === "open") {
            this.close();
        } else {
            this.open();
        }
    }

    resizeInit() {
        if (this.isMobile) {
            this.close();
        }
    }
}

export default new Menu();