class Dropdown {
    constructor(selector, options = {}) {
        this.options = { options };
        this.selector = selector;
        this.method = 'hover';

        if (!this.selector) return;

        this.init();
    }

    init() {
        console.log('This successfule initialisation!');

        this.bindEvents();
        // get the event method: 'hover' || 'click', default: 'hover'
        // add attributes: aria-expanded (default: false), aria-controls (default: id-trigger)
    }

    bindEvents() {
        if (this.method === 'hover') {
            this.selector.addEventListener('mouseenter', (e) => this.toggle(e));
            this.selector.addEventListener('touchstart', (e) => this.toggle(e));
        } else {
            this.selector.addEventListener('click', (e) => this.toggle(e));
        }
    }

    toggle() {
        // get dropdown state: (opened || closed)
        // select method: open() || close()
    }

    open() {
        // change selector state class: ('.dropdown-trigger--active')
        // change state attributes: aria-expanded (true)
    }

    close() {
        // change selector state class: ('.dropdown-trigger--close')
        // change state attributes: aria-expanded (false)
    }

    closeAll() {
        // for all dropdowns
        // change selector state class: ('.dropdown-trigger--close')
        // change state attributes: aria-expanded (false)
    }
}

export default new Dropdown();