class Navigation {
  constructor() {
    window.addEventListener("load", (e) => {
      this.events();
    });
  }

  events() {
    let pageURL = window.location.pathname,
      lastURLSegment = pageURL.substr(pageURL.lastIndexOf("/") + 1),
      items = [
        {
          name: "Установка",
          path: "installation",
          childs: false,
        },
        {
          name: "Компоненты",
          path: "components",
          childs: [
            {
              name: "Кнопки",
              path: "buttons",
            },
            {
              name: "Бейджи",
              path: "badges",
            },
            {
              name: "Чекбоксы",
              path: "checkboxes",
            },
            {
              name: "Радио",
              path: "radios",
            },
            {
              name: "Переключатели",
              path: "switches",
            },
            {
              name: "Формы",
              path: "inputs",
            },
          ],
        },
        {
          name: "Утилиты",
          path: "utilities",
          childs: false,
        },
        {
          name: "О нас",
          path: "about",
          childs: false,
        },
        {
          name: "Демо",
          path: "demo",
          childs: false,
        },
      ],
      navAreas = document.querySelectorAll("[navigation]");

    for (const navArea of navAreas) {
      if (navArea) {
        for (const item of items) {
          const navItem = document.createElement("div");
          navItem.className = "nav-item";
          navItem.innerHTML = `
      <a href="./${item.path}" class="nav-link ${
            item.path === lastURLSegment ? "active" : ""
          }" url="/${item.path}" ${
            item.childs ? `data-popover-open="${item.path}"` : ""
          }>
        <div class="nav-link-inner">
          <div class="nav-link-text">
            ${item.name}
          </div>
        </div>
      </a>
    `;
          navArea.appendChild(navItem);
        }
      }
    }
  }
}

new Navigation();
