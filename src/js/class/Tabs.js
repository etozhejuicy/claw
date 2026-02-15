class Tabs {
    constructor() {
        this.tabButtons = document.querySelectorAll("[data-tab-open]");
        this.tabs = document.querySelectorAll("[data-tab-id]");
        this.tabGroups = this.groupTabs();

        this.init();
        this.bindEvents();
        this.initScrollableTabs();
    }

    // Группируем табы и кнопки по группам
    groupTabs() {
        const groups = {};

        // Собираем все группы из кнопок
        this.tabButtons.forEach((button) => {
            const group = button.dataset.tabGroup || "default";
            if (!groups[group]) {
                groups[group] = {
                    buttons: [],
                    tabs: [],
                    scrollHeader: null,
                    buttonsContainer: null,
                    prevButton: null,
                    nextButton: null,
                };
            }
        });

        // Распределяем кнопки по группам
        this.tabButtons.forEach((button) => {
            const group = button.dataset.tabGroup || "default";
            groups[group].buttons.push(button);
        });

        // Распределяем табы по группам
        this.tabs.forEach((tab) => {
            const group = tab.dataset.tabGroup || "default";
            if (groups[group]) {
                groups[group].tabs.push(tab);
            }
        });

        return groups;
    }

    // Инициализация скролла для табов
    initScrollableTabs() {
        for (const groupName in this.tabGroups) {
            const group = this.tabGroups[groupName];
            if (group.buttons.length === 0) continue;

            // Находим контейнер скролла для этой группы
            const firstButton = group.buttons[0];
            const scrollHeader = firstButton.closest(".tabs-header-scrolling");

            if (scrollHeader) {
                group.scrollHeader = scrollHeader;
                group.buttonsContainer = scrollHeader.querySelector(".tabs-buttons");
                group.prevButton = scrollHeader.querySelector(
                    "[data-tab-buttons-prev]",
                );
                group.nextButton = scrollHeader.querySelector(
                    "[data-tab-buttons-next]",
                );

                // Инициализируем кнопки скролла
                this.initScrollButtons(groupName);

                // Проверяем видимость активной кнопки при загрузке
                setTimeout(() => this.checkActiveButtonVisibility(groupName), 100);
            }
        }
    }

    // Инициализация кнопок скролла
    initScrollButtons(groupName) {
        const group = this.tabGroups[groupName];
        if (!group.buttonsContainer) return;

        // Кнопка "назад"
        if (group.prevButton) {
            group.prevButton.addEventListener("click", () => {
                this.scrollTabs(groupName, -1);
            });
        }

        // Кнопка "вперед"
        if (group.nextButton) {
            group.nextButton.addEventListener("click", () => {
                this.scrollTabs(groupName, 1);
            });
        }

        // Обновляем состояние кнопок скролла при прокрутке
        group.buttonsContainer.addEventListener("scroll", () => {
            this.updateScrollButtonsState(groupName);
        });

        // Обновляем состояние кнопок при изменении размера окна
        window.addEventListener("resize", () => {
            this.updateScrollButtonsState(groupName);
        });

        // Инициализируем начальное состояние кнопок
        this.updateScrollButtonsState(groupName);
    }

    // Скролл табов на одну позицию
    scrollTabs(groupName, direction) {
        const group = this.tabGroups[groupName];
        if (!group.buttonsContainer) return;

        const container = group.buttonsContainer;
        const buttons = Array.from(container.querySelectorAll("[data-tab-open]"));
        const containerRect = container.getBoundingClientRect();

        // Находим первую полностью или частично видимую кнопку
        let targetButton = null;

        if (direction > 0) {
            // Скролл вперед - ищем первую невидимую справа
            for (let i = 0; i < buttons.length; i++) {
                const buttonRect = buttons[i].getBoundingClientRect();
                if (buttonRect.right > containerRect.right) {
                    targetButton = buttons[i];
                    break;
                }
            }
            // Если все видно, скроллим к последней кнопке
            if (!targetButton && buttons.length > 0) {
                targetButton = buttons[buttons.length - 1];
            }
        } else {
            // Скролл назад - ищем первую невидимую слева
            for (let i = buttons.length - 1; i >= 0; i--) {
                const buttonRect = buttons[i].getBoundingClientRect();
                if (buttonRect.left < containerRect.left) {
                    targetButton = buttons[i];
                    break;
                }
            }
            // Если все видно, скроллим к первой кнопке
            if (!targetButton && buttons.length > 0) {
                targetButton = buttons[0];
            }
        }

        if (targetButton) {
            this.scrollToButton(groupName, targetButton);
        }
    }

    // Скролл к конкретной кнопке
    scrollToButton(groupName, button) {
        const group = this.tabGroups[groupName];
        if (!group.buttonsContainer) return;

        const container = group.buttonsContainer;
        const containerRect = container.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();

        // Вычисляем положение для скролла
        let scrollPosition = container.scrollLeft;

        if (buttonRect.left < containerRect.left) {
            // Кнопка слева за границей видимости
            scrollPosition += buttonRect.left - containerRect.left - 10;
        } else if (buttonRect.right > containerRect.right) {
            // Кнопка справа за границей видимости
            scrollPosition += buttonRect.right - containerRect.right + 10;
        } else {
            // Кнопка уже видна
            return;
        }

        container.scrollTo({
            left: scrollPosition,
            behavior: "smooth",
        });

        // Обновляем состояние кнопок после скролла
        setTimeout(() => this.updateScrollButtonsState(groupName), 300);
    }

    // Проверка видимости активной кнопки
    checkActiveButtonVisibility(groupName) {
        const group = this.tabGroups[groupName];
        if (!group.buttonsContainer) return;

        const activeButton =
            group.buttonsContainer.querySelector(".tab-button.active");
        if (activeButton) {
            const containerRect = group.buttonsContainer.getBoundingClientRect();
            const buttonRect = activeButton.getBoundingClientRect();

            // Проверяем, видна ли активная кнопка
            const isVisible =
                buttonRect.left >= containerRect.left &&
                buttonRect.right <= containerRect.right;

            if (!isVisible) {
                // Скроллим к активной кнопке
                this.scrollToButton(groupName, activeButton);
            }
        }
    }

    // Обновление состояния кнопок скролла
    updateScrollButtonsState(groupName) {
        const group = this.tabGroups[groupName];
        if (!group.buttonsContainer || !group.prevButton || !group.nextButton)
            return;

        const container = group.buttonsContainer;
        const scrollLeft = container.scrollLeft;
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;

        // Кнопка "назад"
        group.prevButton.disabled = scrollLeft <= 0;

        // Кнопка "вперед"
        group.nextButton.disabled = scrollLeft + clientWidth >= scrollWidth - 1; // -1 для учета погрешности
    }

    // Активация таба по ID и группе
    activateTab(tabId, groupName = "default", shouldScroll = false) {
        const group = this.tabGroups[groupName];
        if (!group) return;

        // Деактивируем все в группе
        group.buttons.forEach((btn) => btn.classList.remove("active"));
        group.tabs.forEach((tab) => tab.classList.remove("active"));

        // Активируем нужные элементы
        const activeButton = Array.from(group.buttons).find(
            (btn) => btn.dataset.tabOpen === tabId,
        );
        const activeTab = Array.from(group.tabs).find(
            (tab) => tab.dataset.tabId === tabId,
        );

        if (activeButton) {
            activeButton.classList.add("active");

            // Проверяем видимость активной кнопки и скроллим если нужно
            if (group.buttonsContainer) {
                this.checkActiveButtonVisibility(groupName);
            }
        }

        if (activeTab) {
            activeTab.classList.add("active");
            // Прокрутка к табу, если нужно
            if (shouldScroll) {
                activeTab.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }

        // Обработка чекбоксов
        if (activeButton?.hasAttribute("for")) {
            const checkbox = document.getElementById(
                activeButton.getAttribute("for"),
            );
            if (checkbox) checkbox.checked = true;
        }

        // Обновляем состояние кнопок скролла
        if (group.buttonsContainer) {
            this.updateScrollButtonsState(groupName);
        }
    }

    // Обработчик кликов
    handleTabClick(event) {
        if (event.target.hasAttribute("data-not-prevent")) {
            return;
        } else {
            event.preventDefault();
        }

        const button = event.currentTarget;
        const tabId = button.dataset.tabOpen;
        const group = button.dataset.tabGroup || "default";

        this.activateTab(tabId, group);

        // Обновляем URL
        // if (history.pushState) {
        // 	history.pushState(null, null, `#${tabId}`);
        // } else {
        // 	window.location.hash = tabId;
        // }
    }

    // Обработчик хэша
    handleHashChange() {
        const hash = window.location.hash.substring(1);
        if (!hash) return;

        // Ищем таб с таким ID во всех группах
        for (const [groupName, group] of Object.entries(this.tabGroups)) {
            const tabExists = group.tabs.some((tab) => tab.dataset.tabId === hash);
            if (tabExists) {
                this.activateTab(hash, groupName);
                break;
            }
        }
    }

    // Обработчик внешних ссылок
    handleExternalLink(event) {
        const link = event.target.closest("[data-link-tab-open]");
        if (!link) return;

        event.preventDefault();
        const tabId = link.dataset.linkTabOpen;
        const group = link.dataset.tabGroup || "default";

        this.activateTab(tabId, group);
        window.location.hash = tabId;
    }

    bindEvents() {
        // Клики по кнопкам табов
        this.tabButtons.forEach((button) => {
            button.addEventListener("click", this.handleTabClick.bind(this));
        });

        // Внешние ссылки
        document.addEventListener("click", this.handleExternalLink.bind(this));

        // Изменение хэша
        window.addEventListener("hashchange", this.handleHashChange.bind(this));
        window.addEventListener("load", this.handleHashChange.bind(this));
    }

    init() {
        // При загрузке активируем первый таб в каждой группе, если нет хэша
        // const hash = window.location.hash.substring(1);
        // if (!hash) {
        // 	Object.keys(this.tabGroups).forEach((groupName) => {
        // 		const group = this.tabGroups[groupName];
        // 		if (group.buttons.length > 0) {
        // 			const firstButton = group.buttons[0];
        // 			const firstTabId = firstButton.dataset.tabOpen;
        // 			// Проверяем, есть ли соответствующий таб
        // 			const hasCorrespondingTab = group.tabs.some(
        // 				(tab) => tab.dataset.tabId === firstTabId
        // 			);
        // 			if (hasCorrespondingTab) {
        // 				this.activateTab(firstTabId, groupName);
        // 			}
        // 		}
        // 	});
        // }
    }
}

new Tabs();