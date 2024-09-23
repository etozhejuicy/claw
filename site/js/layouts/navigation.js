class Navigation {
  constructor() {
    window.addEventListener("load", (e) => {
      this.events();
    });
  }

  events() {
    let pageURL = window.location.pathname,
      lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1),
      items = [
        {
          'name': 'Установка',
          'path': 'installation'
        },
        {
          'name': 'Компоненты',
          'path': 'components'
        },
        {
          'name': 'Утилиты',
          'path': 'utilities'
        },
        {
          'name': 'О нас',
          'path': 'about'
        }
      ],
      navAreas = document.querySelectorAll('[navigation]');

    for (const navArea of navAreas) {
      if (navArea) {
        for (const item of items) {
          const navItem = document.createElement('div');
          navItem.className = 'nav-item';
          navItem.innerHTML = `
      <a href="/${item.path}" class="nav-link ${item.path === lastURLSegment ? 'active' : ''}" url="/${item.path}">
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