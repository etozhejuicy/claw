// vendor libs
import Swiper from "swiper/bundle";

// vendor styles
import "../../../node_modules/swiper/swiper.css";

let items = [
  {
    title: "Портфолио",
    image: "./images/demo/items/works/portfolio.png",
    brief:
      "Собственное портфолио, разработано специально для демонстрации возможностей фреймворка Claw (Клешня).",
    link: "https://etozhejuicy.github.io/portfolio/",
    rate: "75",
  },
  {
    title: "Читай детям",
    image: "./images/demo/items/works/kids_read.png",
    brief: "Мастер-классы по созданию книжного контента для детей и родителей",
    link: "http://chitaisdetmi.lirflagman.beget.tech/",
    rate: "37",
  },
  {
    title: "Лагерь Креативных Лидеров",
    image: "./images/demo/items/works/creative_leaders.png",
    brief:
      "Образовательный проект для предпринимателей в креативных индустриях",
    link: "https://creative-leaders.ru/",
    rate: "54",
  },
  {
    title: "Креативный Путь",
    image: "./images/demo/items/works/creative_way.png",
    brief: "Сориентируем на карте креативных индустрий России",
    link: "https://creative-way.ru/",
    rate: "53",
  },
  {
    title: "Инносоциум",
    image: "./images/demo/items/works/innosocium.png",
    brief:
      "Социальная платформа Фонда Росконгресс, обеспечивающая поддержку социально значимых проектов, креативных отраслей экономики, молодежных инициатив и образования.",
    link: "https://innosocium.org/",
    rate: "58",
  },
  {
    title: "Nera",
    image: "./images/demo/items/works/nera.png",
    brief: "NERA помогает быстрее получить желаемое и достичь любых целей.",
    link: "https://nera.one/",
    rate: "62",
  },
  {
    title: "Nera Education",
    image: "./images/demo/items/works/nera_edu.png",
    brief:
      "Персональный цифровой наставник, для самосовершенствования и построения личной стратегии жизни.",
    link: "https://edu.nera.one/",
    rate: "60",
  },
  {
    title: "Воркшоп Цели и ценности",
    image: "./images/demo/items/works/workshop.png",
    brief:
      "Ценности — основа целей, они помогают сохранять мотивацию и не идти за чужими мечтами.",
    link: "https://workshop.nera.one/",
    rate: "35",
  },
  {
    title: "Достоевский",
    image: "./images/demo/items/works/dostoevsky.png",
    brief:
      "Фестиваль-путешествие «Достоевский» — первое культурное событие, сомасштабное личности писателя.",
    link: "https://dostoevskyfest.ru/",
    rate: "59",
  },
  {
    title: "Миллениум для клиентов",
    image: "./images/demo/items/works/millennium_client.png",
    brief:
      "Millennium - сервис организации командировок и деловых поездок в Москве и по всей России",
    link: "https://millennium-dream.ru/",
    rate: "36",
  },
  {
    title: "Миллениум Администратор",
    image: "./images/demo/items/works/millennium_admin.png",
    brief: "Современная online-платформа по управлению командировками и MICE",
    link: "https://millennium-platform.ru/",
    rate: "28",
  },
];

class Demo {
  constructor() {
    this.events();
  }

  events() {
    document.addEventListener("DOMContentLoaded", () => {
      this.init();
    });
  }

  init() {
    document.querySelector("#app").innerHTML = `
            <main class="content">
                <section>
                    <div class="container">
                        <div class="card shadow-none">
                            <div class="card-content">
                                <div class="card-body">
                                    <div class="row g-4">
                                        <div class="col-12">
                                            <p class="fs-5 fw-500">
                                                Список проектов, которые используют ранние наработки Claw (Клешни):
                                            </p>
                                        </div>
                                        <div class="col-12">
                                            <div class="swiper-container swiper-demo">
                                                <div class="swiper-wrapper align-items-stretch pb-5" items-list=""></div>
                                                <div class="swiper-pagination fs-4 fw-bold"></div>
                                                <div class="btn btn-primary btn-icon swiper-button-next" style="--swiper-navigation-size: 2.5rem;width:var(--swiper-navigation-size);height:var(--swiper-navigation-size);--swiper-navigation-color: var(--cl-btn-color);">
                                                    <i class="cl-icon-arrow-right"></i>
                                                </div>
                                                <div class="btn btn-primary btn-icon swiper-button-prev" style="--swiper-navigation-size: 2.5rem;width:var(--swiper-navigation-size);height:var(--swiper-navigation-size);--swiper-navigation-color: var(--cl-btn-color);">
                                                    <i class="cl-icon-arrow-prev"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        `;

    const itemsList = document.querySelector("[items-list]");

    //  sort items
    items.sort((a, b) => {
      var a1 = a.rate.toLowerCase();
      var b1 = b.rate.toLowerCase();
      return a1 > b1 ? -1 : a1 < b1 ? 1 : 0;
    });

    items.forEach((item, index) => {
      item.id = index + 1;
    });

    // foreach of items
    items.forEach((item) => {
      const colItem = document.createElement("div");
      colItem.className = "swiper-slide";
      colItem.innerHTML = `
                  <div class="card card-primary card-outline d-flex flex-column" style="width: 20rem;max-width:20rem;min-height:30rem;" item-id="${item.id
        }">
                    <div class="card-content d-flex flex-column flex-fill">
                        <div class="card-header">
                            <div class="card-title text-primary">
                                ${item.title}
                            </div>
                        </div>
                        <div class="card-body flex-fill">
                            <div class="row g-3">
                                <div class="col-12">
                                <div class="card-image rounded ratio ratio-16x9 lazyload overflow-hidden">
                                    <img data-src="${item.image
        }" class="lazyload object-fit-cover" />
                                </div>
                                </div>
                                <div class="col-12">
                                    <div class="card-body">
                                        <p class="">
                                            ${item.brief}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                                <div class="row g-2">
                                  ${item.link
          ? `
                                    <div class="col-auto">
                                      <a href="${item.link}" class="btn btn-primary btn-icon w-100" target="_blank" rel="noopener noreferrer">
                                        <i class="cl-icon-link"></i>
                                      </a>
                                    </div>
                                  `
          : ""
        }
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                `;

      itemsList.appendChild(colItem);
    });

    this.swipers();
  }

  swipers() {
    if ($(".swiper-demo").length) {
      var swiperDemo = new Swiper(".swiper-demo", {
        slidesPerView: "auto",
        spaceBetween: 20,
        height: 100,
        scrollbar: {
          enabled: true,
          el: ".swiper-scrollbar-demo",
          draggable: true,
          dragSize: "auto",
          hide: false,
          snapOnRelease: true,
        },
        pagination: {
          enabled: true,
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          enabled: true,
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        allowTouchMove: true,
        grabCursor: true,
      });
      setTimeout(function () {
        if (swiperDemo.update) {
          swiperDemo.update();
        }
      }, 500);
    }
  }
}

new Demo();
