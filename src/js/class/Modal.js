class Modal {
    constructor() {
        this.openButtons = document.querySelectorAll("[data-modal-open]");
        this.closeButtons = document.querySelectorAll("[data-modal-close]");
        this.generateButtons = document.querySelectorAll("[data-modal-generate]");
        this.title = ``;
        this.content = "";
        this.selector = "";
        this.events();
    }

    events() {
        this.openButtons.forEach((openButton) => {
            openButton.addEventListener("click", (e) => {
                try {
                    const modalKey = e.currentTarget.dataset.modalOpen;
                    const modal = document.querySelector(
                        '[data-modal-id="' + modalKey + '"]',
                    );

                    e.currentTarget.dataset.modalTitle
                        ? (this.title = e.currentTarget.dataset.modalTitle)
                        : null;
                    e.currentTarget.dataset.modalContent
                        ? (this.content = e.currentTarget.dataset.modalContent)
                        : null;
                    e.currentTarget.dataset.modalClass
                        ? (this.selector = e.currentTarget.dataset.modalClass)
                        : null;

                    this.open(modal);
                } catch (error) {
                    console.error(
                        `Ошибка, окно не найдено: ${e.currentTarget.dataset.modalOpen} \n ${error}`,
                    );
                }
            });
        });

        this.generateButtons.forEach((generateButton) => {
            generateButton.addEventListener("click", (e) => {
                try {
                    const existModal = document.querySelector(
                        '[data-modal-id="' + e.currentTarget.dataset.modalGenerate + '"]',
                    );

                    this.title = e.currentTarget.dataset.modalTitle;
                    this.content = e.currentTarget.dataset.modalContent;
                    this.selector = e.currentTarget.dataset.modalClass;

                    if (
                        existModal &&
                        e.currentTarget.dataset.modalGenerate === existModal.dataset.modalId
                    ) {
                        this.open(existModal);
                    } else {
                        this.generate(e);
                    }
                } catch (error) {
                    console.error(error);
                }
            });
        });

        this.closeButtons.forEach((closeButton) => {
            closeButton.addEventListener("click", () => {
                try {
                    const modal = closeButton.closest(".modal");

                    if (modal) {
                        this.close(modal);
                    }
                } catch (error) {
                    console.error(error);
                }
            });
        });

        window.addEventListener("click", (event) => {
            const modals = document.querySelectorAll(".modal");

            modals.forEach((modal) => {
                if (
                    event.target === modal ||
                    event.target.closest("[data-modal-close]")
                ) {
                    this.close(modal);
                }
            });
        });
    }

    generate(e) {
        const modal = document.createElement("div");

        modal.innerHTML = `
            <div class="modal-dialog">
              <div class="modal-content">
								<div class="modal-header">
									<div class="modal-title"></div>
									<button class="btn-outline-white btn-close aspected" data-modal-close>
										<i class="icon-cross"></i>
									</button>
								</div>
                <div class="modal-body"></div>
              </div>
            </div>
          `;

        modal.classList.add("modal");
        modal.dataset.modalId = e.currentTarget.dataset.modalGenerate;

        document.body.append(modal);

        setTimeout(() => {
            this.open(modal);
        }, 50);
    }

    create(options = {}) {
        const {
            id = `modal-${Date.now()}`,
            title = ``,
            content = "",
            className = "",
            showImmediately = true,
        } = options;

        // Проверяем, существует ли уже модальное окно с таким id
        let modal = document.querySelector(`[data-modal-id="${id}"]`);

        if (!modal) {
            // Создаем новое модальное окно
            modal = document.createElement("div");
            modal.classList.add("modal");
            modal.dataset.modalId = id;

            modal.innerHTML = `
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							${title ? `<div class="modal-title">${title}</div>` : ""}
							<button class="btn-outline-white btn-close aspected" data-modal-close>
								<i class="icon-cross"></i>
							</button>
						</div>
						${content ? `<div class="modal-body">${content}</div>` : ""}
					</div>
				</div>
			`;

            document.body.append(modal);

            // Добавляем кастомный класс если указан
            if (className) {
                modal.classList.add(className);
            }
        } else {
            // Обновляем существующее модальное окно
            this.setup(modal, title, content, className);
        }

        // Показываем модальное окно если требуется
        if (showImmediately) {
            this.open(modal);
        }

        return modal;
    }

    // Обновленный метод setup для поддержки параметров
    setup(modal, title = null, content = null, selector = null) {
        if (modal) {
            const modalTitle = modal?.querySelector(".modal-title");
            const modalContent = modal?.querySelector(".modal-body");

            // Проверяем, если второй параметр - объект (options), то обрабатываем его
            if (typeof title === "object" && title !== null) {
                const options = title;
                const titleToSet =
                    options.title !== undefined ? options.title : this.title;
                const contentToSet =
                    options.content !== undefined ? options.content : this.content;
                const selectorToSet =
                    options.selector !== undefined ? options.selector : this.selector;

                if (titleToSet && titleToSet !== "" && modalTitle) {
                    modalTitle.innerHTML = titleToSet;
                }

                if (contentToSet && contentToSet !== "" && modalContent) {
                    modalContent.innerHTML = contentToSet;
                }

                if (selectorToSet && selectorToSet !== "") {
                    modal.classList.add(selectorToSet);
                }
            } else {
                // Иначе используем отдельные параметры
                const titleToSet = title !== null ? title : this.title;
                const contentToSet = content !== null ? content : this.content;
                const selectorToSet = selector !== null ? selector : this.selector;

                if (titleToSet && titleToSet !== "" && modalTitle) {
                    modalTitle.innerHTML = titleToSet;
                }

                if (contentToSet && contentToSet !== "" && modalContent) {
                    modalContent.innerHTML = contentToSet;
                }

                if (selectorToSet && selectorToSet !== "") {
                    modal.classList.add(selectorToSet);
                }
            }
        }
    }

    // Существующие методы без изменений
    open(modal, callback) {
        // Если передан string - ищем элемент по data-modal-id
        if (typeof modal === "string") {
            modal = document.querySelector(`[data-modal-id="${modal}"]`);

            if (!modal) {
                console.error(`Модальное окно с id "${modal}" не найдено`);
                return;
            }
        }

        // Проверяем, что modal - это DOM-элемент
        if (!(modal instanceof Element)) {
            console.error(
                "Недопустимый параметр модального окна: должен быть элементом DOM или строкой идентификатора окна",
            );
            return;
        }

        this.setup(modal);
        modal.classList.add("show");
        document.documentElement.classList.add("modal-open");

        if (callback && typeof callback === "function") {
            callback();
        }
    }

    resetState() {
        this.title = ``;
        this.content = "";
        this.selector = "";
    }

    close(modal) {
        this.resetState(modal);
        modal.classList.remove("show");
        document.documentElement.classList.remove("modal-open");
    }
}

new Modal();