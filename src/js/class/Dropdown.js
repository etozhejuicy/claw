class Dropdown {
    constructor(selector, options = {}) {
        this.options = options;
        this.selector = typeof selector === 'string' ? document.querySelector(selector) : selector;
        this.method = this.options.method || 'hover';
        this.dropdownWrapper = this.selector?.nextElementSibling;
        this.closeTimeout = null;

        if (!this.selector || !this.dropdownWrapper) return;

        // Инициализация
        this.init();
    }

    init() {
        console.log('Dropdown successful initialisation!');

        // Устанавливаем начальные атрибуты доступности
        this.setupAccessibility();

        // Привязываем события
        this.bindEvents();
    }

    setupAccessibility() {
        // Добавляем атрибуты доступности
        this.selector.setAttribute('aria-expanded', 'false');
        this.selector.setAttribute('aria-haspopup', 'true');

        // Если у wrapper нет ID, создаём его
        if (!this.dropdownWrapper.id) {
            this.dropdownWrapper.id = `dropdown-${Math.random().toString(36).substr(2, 9)}`;
        }
        this.selector.setAttribute('aria-controls', this.dropdownWrapper.id);
    }

    bindEvents() {
        const dropdownContainer = this.selector.closest('.dropdown');

        if (this.method === 'hover') {
            // Открываем при наведении на контейнер
            dropdownContainer.addEventListener('mouseenter', () => {
                clearTimeout(this.closeTimeout);
                this.open()
            });

            // Закрываем только если курсор покидает весь контейнер
            dropdownContainer.addEventListener('mouseleave', (e) => {
                if (!dropdownContainer.contains(e.relatedTarget)) {
                    this.closeTimeout = setTimeout(() => this.close(), 300);
                }
            });

            this.dropdownWrapper.addEventListener('mouseenter', () => {
                clearTimeout(this.closeTimeout);
            });

            // Для мобильных устройств: toggle при касании
            this.selector.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.toggle();
            });
        } else {
            // Для click: переключаем состояние при клике на триггере
            this.selector.addEventListener('click', () => this.toggle());
        }

        // Закрываем при клике вне dropdown
        document.addEventListener('click', (e) => {
            if (!dropdownContainer.contains(e.target)) {
                this.close();
            }
        });
    }


    toggle() {
        const isExpanded = this.selector.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            this.close();
        } else {
            // Сначала закрываем все остальные dropdown'ы
            Dropdown.closeAll();
            this.open();
        }
    }

    open() {
        this.selector.classList.add('dropdown-trigger--active');
        this.selector.setAttribute('aria-expanded', 'true');
        this.dropdownWrapper.classList.add('dropdown-wrapper--visible');
        // this.dropdownWrapper.style.display = 'block';
    }

    close() {
        clearTimeout(this.closeTimeout);
        this.selector.classList.remove('dropdown-trigger--active');
        this.selector.setAttribute('aria-expanded', 'false');
        this.dropdownWrapper.classList.remove('dropdown-wrapper--visible');
        // this.dropdownWrapper.style.display = 'none';
    }

    static closeAll() {
        // Находим все dropdown triggers и закрываем их
        document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
            const dropdownWrapper = trigger.nextElementSibling;
            trigger.classList.remove('dropdown-trigger--active');
            trigger.setAttribute('aria-expanded', 'false');
            if (dropdownWrapper) {
                this.dropdownWrapper.classList.remove('dropdown-wrapper--visible');
                // dropdownWrapper.style.display = 'none';
            }
        });
    }
}

export default Dropdown;
