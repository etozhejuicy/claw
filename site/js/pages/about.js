class About {
  constructor() {
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
                            <div class="card-header text-center justify-content-center">
                                <h1 class="h3 fw-700">
                                    Легкий и гибкий CSS-фреймворк
                                </h1>
                            </div>
                            <div class="card-body">
                                <p>
                                    Представляем вашему вниманию Клешню (Claw)!
                                </p>
                                <p>
                                    Будьте готовы вывести свою веб-разработку на новый уровень с помощью Клешни (Claw) - передового CSS-фреймворка, предназначенного для упрощения рабочего процесса и ускорения разработки вашего проекта. 
                                </p>
                                <p>
                                    Благодаря своей легкой архитектуре, гибким возможностям настройки и простому процессу установки, Клешня (Claw) является идеальным решением для разработчиков, которые ценят скорость, эффективность и простоту использования.
                                </p>
                                <p>
                                    <h5 class="h-5 fw-700">Основные преимущества:</h5>
                                    <ul class="list">
                                        <li class="list-item">
                                            <strong>Легкий вес</strong>: Клешня (Claw) спроектирован таким образом, чтобы быть компактным и экономичным, с минимальными габаритами, которые не помешают вашему проекту. Это означает сокращение времени загрузки и повышение производительности для ваших пользователей.
                                        </li>
                                        <li class="list-item">
                                            <strong>Гибкость</strong>: С Клешней (Claw) вы не ограничены жесткими рамками. Наш фреймворк легко настраивается, что позволяет вам адаптировать пользовательский интерфейс к вашим уникальным потребностям и стилю.
                                        </li>
                                        <li class="list-item">
                                            <strong>Простая установка</strong>: Начните работу с Клешней (Claw) в кратчайшие сроки. Наш простой процесс установки гарантирует, что вы сможете приступить к созданию своего проекта прямо сейчас, не тратя часы на установку и интеграцию.
                                        </li>
                                        <li class="list-item">
                                            <strong>Быстрая интеграция</strong>: Клешня (Claw) разработана таким образом, чтобы легко интегрироваться в существующую структуру вашего проекта, так что вы можете быстро приступить к созданию и интеграции.
                                        </li>
                                    </ul>
                                </p>
                                <p>
                                    <h5 class="h-5 fw-700">Что отличает Клешню (Claw) от других:</h5>
                                    <ul class="list">
                                        <li class="list-item">
                                            <strong>Модульный дизайн</strong>: Наш фреймворк построен с использованием модульной архитектуры, что дает возможность легко выбрать нужные вам компоненты без необходимости загружать ненужный код.
                                        </li>
                                        <li class="list-item">
                                            <strong>Готовые компоненты</strong>: Клешня (Claw) поставляется с целым рядом готовых компонентов пользовательского интерфейса, включая навигацию, формы и элементы макета, которые помогут вам быстро приступить к работе.
                                        </li>
                                        <li class="list-item">
                                            <strong>Обширная документация</strong>: Наша обширная документация и учебные пособия гарантируют, что у вас будет все необходимое для получения максимальной отдачи от Клешни (Claw).
                                        </li>
                                    </ul>
                                </p>
                                <p>
                                    <div class="badge badge-primary badge-colored w-100">
                                        <p>
                                            <a href="https://t.me/claw_css" target="_blank" rel="follow" class="link"><strong>Присоединяйтесь</strong></a> к сообществу Клешни (Claw) уже сегодня и начните создавать быстрее, качественнее и эффективнее!
                                        </p>
                                        <p>
                                            <a href="https://t.me/claw_css" target="_blank" rel="follow" class="btn btn-primary">Присоединиться</a>
                                        </p>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </main>
            `;
  }
}

new About();
