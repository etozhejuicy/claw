const textareaAutosize = {
    init: function () {
        const textareas = document.querySelectorAll('textarea[data-autosize]');
        textareas.forEach(textarea => this.resize(textarea));

        document.addEventListener('shown.bs.modal', (event) => {
            if (event.target.classList.contains('modal')) {
                const textareasInModal = document.querySelectorAll('textarea[data-autosize]');
                textareasInModal.forEach(textarea => this.resize(textarea));
            }
        });

        document.addEventListener('input', (event) => {
            if (event.target.matches('textarea[data-autosize]')) {
                this.resize(event.target);
            }
        });

        document.addEventListener('change', (event) => {
            if (event.target.matches('textarea[data-autosize]')) {
                this.resize(event.target);
            }
        });

        const observer = new MutationObserver(() => {
            const newTextareas = document.querySelectorAll('textarea[data-autosize]:not([data-autosize="true"])');
            newTextareas.forEach(textarea => this.resize(textarea));
        });

        observer.observe(document.body, { childList: true, subtree: true });
    },

    resize: function (elem) {
        if (elem) {
            elem.style.height = 'auto';
            elem.style.height = (elem.scrollHeight + 5) + 'px';

            if (elem.getAttribute('data-autosize') !== 'true') {
                elem.setAttribute('data-autosize', 'true');
            }
        }
    }
};

// Инициализация
document.addEventListener('DOMContentLoaded', () => textareaAutosize.init());