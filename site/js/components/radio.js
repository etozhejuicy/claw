window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#radio").innerHTML = `
          <div class="row g-5">
              <div class="col-12">
                  <div class="card shadow-none">
                      <div class="card-body">
                          <div class="row g-5">
                              <div class="col-12">
                                  <div class="row g-3">
                                      <div class="col-12">
                                          <h3 class="h4">
                                              Радио
                                          </h3>
                                      </div>
                                      <div class="col-12">
                                          <div class="row g-3">
                                              <div class="col-auto">
                                                  <div class="form-check">
                                                      <input class="form-check-input" name="flexRadioDefault" type="radio" value="" id="flexRadioChecked" checked>
                                                      <label class="form-check-label" for="flexRadioChecked">
                                                          Радио выбран
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-check">
                                                      <input class="form-check-input" name="flexRadioDefault" type="radio" value="" id="flexRadioChecked2">
                                                      <label class="form-check-label" for="flexRadioChecked2">
                                                          Радио
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" value="" id="flexRadioDisabled" disabled>
                                                      <label class="form-check-label" for="flexRadioDisabled">
                                                          Радио не активен
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" value="" id="flexRadioCheckedDisabled" checked disabled>
                                                      <label class="form-check-label" for="flexRadioCheckedDisabled">
                                                          Радио выбран и не активен
                                                      </label>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                    <div class="col-12">
                                        <p>
                                            Радио имеет следующую структуру:
                                        </p>
                                    </div>
                                    <div class="col-12">
                                        <code class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
                                                <div class="code-body">
                                                &lt;div class="form-check"&gt;
                                                &lt;input class="form-check-input" type="radio" id="radioExample"&gt;
                                                &lt;label class="form-check-label" for="radioExample"&gt;
                                                    Радио
                                                &lt;/label&gt;
                                                &lt;/div&gt;
                                                </div>
                                            </div>
                                        </code>
                                    </div>
                                    <div class="col-12">
                                        <p>
                                            Изменяя следующий класс можно манипулировать цветом радио:
                                        </p>
                                        <blockquote class="blockquote">
                                            <div class="blockquote-content">
                                                <div class="blockquote-body text-warning">.form-check-{color}</div>
                                            </div>
                                        </blockquote>
                                        <p>
                                            Список наименований цветов для данного компонента используется в точности, как в <a href="./utilities#colors" class="fw-600">палитре</a>.
                                        </p>
                                    </div>
                                      <div class="col-12">
                                          <div class="row g-3">
                                              <div class="col-auto">
                                                  <div class="form-check form-check-primary">
                                                      <input class="form-check-input" name="flexRadioPrimary" type="radio" value="" id="flexRadioCheckedPrimary" checked>
                                                      <label class="form-check-label" for="flexRadioCheckedPrimary">
                                                          Радио выбран
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-check form-check-primary">
                                                      <input class="form-check-input" name="flexRadioPrimary" type="radio" value="" id="flexRadioCheckedPrimary2">
                                                      <label class="form-check-label" for="flexRadioCheckedPrimary2">
                                                          Радио
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-check form-check-primary">
                                                      <input class="form-check-input" type="radio" value="" id="flexRadioDisabledPrimary" disabled>
                                                      <label class="form-check-label" for="flexRadioDisabledPrimary">
                                                          Радио не активен
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-check form-check-primary">
                                                      <input class="form-check-input" type="radio" value="" id="flexRadioCheckedDisabledPrimary" checked disabled>
                                                      <label class="form-check-label" for="flexRadioCheckedDisabledPrimary">
                                                          Радио выбран и не активен
                                                      </label>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <div class="row g-3">
                                              <div class="col-auto">
                                                  <div class="form-check form-check-success">
                                                      <input class="form-check-input" name="flexRadioSuccess" type="radio" value="" id="flexRadioCheckedSuccess" checked>
                                                      <label class="form-check-label" for="flexRadioCheckedSuccess">
                                                          Радио выбран
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-check form-check-success">
                                                      <input class="form-check-input" name="flexRadioSuccess" type="radio" value="" id="flexRadioCheckedSuccess2">
                                                      <label class="form-check-label" for="flexRadioCheckedSuccess2">
                                                          Радио
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-check form-check-success">
                                                      <input class="form-check-input" type="radio" value="" id="flexRadioDisabledSuccess" disabled>
                                                      <label class="form-check-label" for="flexRadioDisabledSuccess">
                                                          Радио не активен
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-check form-check-success">
                                                      <input class="form-check-input" type="radio" value="" id="flexRadioCheckedDisabledSuccess" checked disabled>
                                                      <label class="form-check-label" for="flexRadioCheckedDisabledSuccess">
                                                          Радио выбран и не активен
                                                      </label>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <div class="row g-3">
                                              <div class="col-auto">
                                                  <div class="form-check form-check-danger">
                                                      <input class="form-check-input" name="flexRadioDanger" type="radio" value="" id="flexRadioCheckedDanger" checked>
                                                      <label class="form-check-label" for="flexRadioCheckedDanger">
                                                          Радио выбран
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-check form-check-danger">
                                                      <input class="form-check-input" name="flexRadioDanger" type="radio" value="" id="flexRadioCheckedDanger2">
                                                      <label class="form-check-label" for="flexRadioCheckedDanger2">
                                                          Радио
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-check form-check-danger">
                                                      <input class="form-check-input" type="radio" value="" id="flexRadioDisabledDanger" disabled>
                                                      <label class="form-check-label" for="flexRadioDisabledDanger">
                                                          Радио не активен
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-check form-check-danger">
                                                      <input class="form-check-input" type="radio" value="" id="flexRadioCheckedDisabledDanger" checked disabled>
                                                      <label class="form-check-label" for="flexRadioCheckedDisabledDanger">
                                                          Радио выбран и не активен
                                                      </label>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <div class="row g-3">
                                              <div class="col-auto">
                                                  <div class="form-check form-check-warning">
                                                      <input class="form-check-input" name="flexRadioWarning" type="radio" value="" id="flexRadioCheckedWarning" checked>
                                                      <label class="form-check-label" for="flexRadioCheckedWarning">
                                                          Радио выбран
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-check form-check-warning">
                                                      <input class="form-check-input" name="flexRadioWarning" type="radio" value="" id="flexRadioCheckedWarning2">
                                                      <label class="form-check-label" for="flexRadioCheckedWarning2">
                                                          Радио
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-check form-check-warning">
                                                      <input class="form-check-input" type="radio" value="" id="flexRadioDisabledWarning" disabled>
                                                      <label class="form-check-label" for="flexRadioDisabledWarning">
                                                          Радио не активен
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-check form-check-warning">
                                                      <input class="form-check-input" type="radio" value="" id="flexRadioCheckedDisabledWarning" checked disabled>
                                                      <label class="form-check-label" for="flexRadioCheckedDisabledWarning">
                                                          Радио выбран и не активен
                                                      </label>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <div class="row g-3">
                                              <div class="col-auto">
                                                  <div class="form-check form-check-orange">
                                                      <input class="form-check-input" name="flexRadioOrange" type="radio" value="" id="flexRadioCheckedOrange" checked>
                                                      <label class="form-check-label" for="flexRadioCheckedOrange">
                                                          Радио выбран
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-check form-check-orange">
                                                      <input class="form-check-input" name="flexRadioOrange" type="radio" value="" id="flexRadioCheckedOrange2">
                                                      <label class="form-check-label" for="flexRadioCheckedOrange2">
                                                          Радио
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-check form-check-orange">
                                                      <input class="form-check-input" type="radio" value="" id="flexRadioDisabledOrange" disabled>
                                                      <label class="form-check-label" for="flexRadioDisabledOrange">
                                                          Радио не активен
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-check form-check-orange">
                                                      <input class="form-check-input" type="radio" value="" id="flexRadioCheckedDisabledOrange" checked disabled>
                                                      <label class="form-check-label" for="flexRadioCheckedDisabledOrange">
                                                          Радио выбран и не активен
                                                      </label>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <div class="row g-3">
                                              <div class="col-auto">
                                                  <div class="form-check form-check-purple">
                                                      <input class="form-check-input" name="flexRadioPurple" type="radio" value="" id="flexRadioCheckedPurple" checked>
                                                      <label class="form-check-label" for="flexRadioCheckedPurple">
                                                          Радио выбран
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-check form-check-purple">
                                                      <input class="form-check-input" name="flexRadioPurple" type="radio" value="" id="flexRadioCheckedPurple2">
                                                      <label class="form-check-label" for="flexRadioCheckedPurple2">
                                                          Радио
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-check form-check-purple">
                                                      <input class="form-check-input" type="radio" value="" id="flexRadioDisabledPurple" disabled>
                                                      <label class="form-check-label" for="flexRadioDisabledPurple">
                                                          Радио не активен
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-check form-check-purple">
                                                      <input class="form-check-input" type="radio" value="" id="flexRadioCheckedDisabledPurple" checked disabled>
                                                      <label class="form-check-label" for="flexRadioCheckedDisabledPurple">
                                                          Радио выбран и не активен
                                                      </label>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <div class="row g-3">
                                              <div class="col-auto">
                                                  <div class="form-check form-check-blue">
                                                      <input class="form-check-input" name="flexRadioBlue" type="radio" value="" id="flexRadioCheckedBlue" checked>
                                                      <label class="form-check-label" for="flexRadioCheckedBlue">
                                                          Радио выбран
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-check form-check-blue">
                                                      <input class="form-check-input" name="flexRadioBlue" type="radio" value="" id="flexRadioCheckedBlue2">
                                                      <label class="form-check-label" for="flexRadioCheckedBlue2">
                                                          Радио
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-check form-check-blue">
                                                      <input class="form-check-input" type="radio" value="" id="flexRadioDisabledBlue" disabled>
                                                      <label class="form-check-label" for="flexRadioDisabledBlue">
                                                          Радио не активен
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-check form-check-blue">
                                                      <input class="form-check-input" type="radio" value="" id="flexRadioCheckedDisabledBlue" checked disabled>
                                                      <label class="form-check-label" for="flexRadioCheckedDisabledBlue">
                                                          Радио выбран и не активен
                                                      </label>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                    <div class="col-12">
                                        <hr />
                                    </div>
                                      <div class="col-12">
                                        <p>
                                            Существуют вариации радио с цветом текста, который совпадает с цветом фона радио.
                                        </p>
                                    </div>
                                    <div class="col-12">
                                        <div class="row g-3">
                                            <div class="col-auto">
                                                  <div class="form-check form-check-primary form-check-colored">
                                                      <input class="form-check-input" name="flexRadioColored" type="radio" value="" id="flexRadioCheckedColored" checked>
                                                      <label class="form-check-label" for="flexRadioCheckedColored">
                                                          Радио выбран
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-check form-check-primary form-check-colored">
                                                      <input class="form-check-input" name="flexRadioColored" type="radio" value="" id="flexRadioCheckedColored2">
                                                      <label class="form-check-label" for="flexRadioCheckedColored2">
                                                          Радио
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-check form-check-primary form-check-colored">
                                                      <input class="form-check-input" type="radio" value="" id="flexRadioDisabledColored" disabled>
                                                      <label class="form-check-label" for="flexRadioDisabledColored">
                                                          Радио не активно
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-check form-check-primary form-check-colored">
                                                      <input class="form-check-input" type="radio" value="" id="flexRadioCheckedDisabledColored" checked disabled>
                                                      <label class="form-check-label" for="flexRadioCheckedDisabledColored">
                                                          Радио выбран и не активно
                                                      </label>
                                                  </div>
                                              </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <code class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
                                                <div class="code-body">
                                                &lt;div class="form-check form-check-primary form-check-colored"&gt;
                                                &lt;input class="form-check-input" type="radio" id="radioExample"&gt;
                                                &lt;label class="form-check-label" for="radioExample"&gt;
                                                    Чекбокс
                                                &lt;/label&gt;
                                                &lt;/div&gt;
                                                </div>
                                            </div>
                                        </code>
                                    </div>
                                    <div class="col-12">
                                        <p>
                                            Когда радио имеет  класс <code class="text-warning">.form-check-colored</code>, он становится цветным.
                                            Граница <code class="text-warning">border</code> и текст <code class="text-warning">color</code> имеет цвет,  который совпадает с цветом фона радио с параметром <code class="text-warning">checked="true"</code>, иначе имеет цвет текста <code class="text-warning">var(--body-text-color);</code>

                                        </p>
                                        <p>
                                            Обратите внимание! Вариации радио с цветом текста работают только при использовании класса:
                                        </p>
                                        <blockquote class="blockquote">
                                            <div class="blockquote-content">
                                                <div class="blockquote-body text-warning">.form-check-colored</div>
                                            </div>
                                        </blockquote>
                                    </div>
                                    <div class="col-12">
                                        <hr />
                                    </div>
                                    <div class="col-12">
                                        <p>
                                            Чтобы зеркально отобразить радио, добавьте следующий класс:
                                        </p>
                                        <blockquote class="blockquote">
                                            <div class="blockquote-content">
                                                <div class="blockquote-body text-warning">.form-check-reverse</div>
                                            </div>
                                        </blockquote>
                                    </div>
                                    <div class="col-12">
                                        <div class="row g-3">
                                            <div class="col-auto">
                                                <div class="form-check form-check-reverse">
                                                    <input class="form-check-input" type="radio" value="" id="flexRadioMirror">
                                                    <label class="form-check-label" for="flexRadioMirror">
                                                        Радио зеркально
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <hr />
                                    </div>
                                    <div class="col-12">
                                        <p>
                                            Существуют вариации радио с выбранным цветом <code class="text-warning">border</code>, который не совпадает с цветом фона радио.
                                        </p>
                                    </div>
                                    <div class="col-12">
                                        <div class="row g-3">
                                            <div class="col-auto">
                                                <div class="form-check form-check-primary form-check-outline">
                                                    <input class="form-check-input" type="radio" name="flexRadioOutlineColored" value="" id="flexRadioOutlineCheckedPrimary1" checked>
                                                    <label class="form-check-label" for="flexRadioOutlineCheckedPrimary1">
                                                        Радио выбрано
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="form-check form-check-primary form-check-outline">
                                                    <input class="form-check-input" type="radio" name="flexRadioOutlineColored" value="" id="flexRadioOutlineCheckedPrimary2">
                                                    <label class="form-check-label" for="flexRadioOutlineCheckedPrimary2">
                                                        Радио не выбрано
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="form-check form-check-primary form-check-outline">
                                                    <input class="form-check-input" type="radio" value="" id="flexRadioOutlineDisabledPrimary3" disabled>
                                                    <label class="form-check-label" for="flexRadioOutlineDisabledPrimary3">
                                                        Радио не активно
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="form-check form-check-primary form-check-outline">
                                                    <input class="form-check-input" type="radio" value="" id="flexRadioOutlineCheckedDisabledPrimary4" checked disabled>
                                                    <label class="form-check-label" for="flexRadioOutlineCheckedDisabledPrimary4">
                                                        Радио выбрано и не активно
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <code class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
                                                <div class="code-body">
                                                &lt;div class="form-check form-check-primary form-check-outline"&gt;
                                                &lt;input class="form-check-input" type="radio" id="radioExample"&gt;
                                                &lt;label class="form-check-label" for="radioExample"&gt;
                                                    Радио
                                                &lt;/label&gt;
                                                &lt;/div&gt;
                                                </div>
                                            </div>
                                        </code>
                                    </div>
                                    <div class="col-12">
                                        <p>
                                            Когда радио имеет  класс <code class="text-warning">.form-check-outline</code>, его <code class="text-warning">border</code> становится цветным, а <code class="text-warning">background-color</code> прозрачным.

                                        </p>
                                        <p>
                                            Обратите внимание! <br />
                                            Вариации радио с активным цветом текста работают только при использовании класса:
                                        </p>
                                        <blockquote class="blockquote">
                                            <div class="blockquote-content">
                                                <div class="blockquote-body text-warning">.form-check-colored</div>
                                            </div>
                                        </blockquote>
                                    </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  `;
});
