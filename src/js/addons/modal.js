const Modal = {
    init: function () {
        const openModalButtons = document.querySelectorAll('[data-modal-open]');

        const closeButtons = document.querySelectorAll('[data-modal-close]');

        openModalButtons.forEach((button) => {
            button.addEventListener('click', function (e) {
                const modalKey = e.currentTarget.getAttribute('data-modal-open');
                const modal = document.querySelector('[data-modal-id="' + modalKey + '"]');

                if (modal) {
                    modal.classList.add('show');
                    document.documentElement.classList.add('modal-open');
                }
            });
        });


        closeButtons.forEach((button) => {
            button.addEventListener('click', function () {
                const modal = button.closest('.modal');

                if (modal) {
                    modal.classList.remove('show');
                    document.documentElement.classList.remove('modal-open');
                }
            });
        });


        document.addEventListener('click', function (event) {
            const modals = document.querySelectorAll('.modal');

            modals.forEach((modal) => {
                if (event.target === modal) {
                    modal.classList.remove('show');
                    document.documentElement.classList.remove('modal-open');
                }
            });
        });
    }
};

document.addEventListener('DOMContentLoaded', () => { Modal.init() });