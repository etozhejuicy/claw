window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#switch").innerHTML = `
          <div class="row g-5">
              <div class="col-12">
                  <div class="card shadow-none">
                      <div class="card-body">
                          <div class="row g-5">
                              <div class="col-12">
                                  <div class="row g-3">
                                      <div class="col-12">
                                          <h5 class="h5">
                                              Переключатели
                                          </h5>
                                      </div>
                                      <div class="col-12">
                                          <div class="row g-3">
                                              <div class="col-auto">
                                                  <div class="form-switch">
                                                      <input class="form-switch-input" type="checkbox" value="" id="flexSwitchChecked" checked>
                                                      <label class="form-switch-label" for="flexSwitchChecked">
                                                          Переключатель выбран
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch">
                                                      <input class="form-switch-input" type="checkbox" value="" id="flexSwitchDisabled" disabled>
                                                      <label class="form-switch-label" for="flexSwitchDisabled">
                                                          Переключатель не активен
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch">
                                                      <input class="form-switch-input" type="checkbox" value="" id="flexSwitchCheckedDisabled" checked disabled>
                                                      <label class="form-switch-label" for="flexSwitchCheckedDisabled">
                                                          Переключатель выбран и не активен
                                                      </label>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                        <p>
                                            Переключатель имеет следующую структуру:
                                        </p>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
<pre class="hljs html code-body"><code>&lt;div class="form-switch"&gt;
    &lt;input class="form-switch-input" type="checkbox" id="switchExample"&gt;
    &lt;label class="form-switch-label" for="switchExample"&gt;
        Переключатель
    &lt;/label&gt;
&lt;/div&gt;</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <p>
                                            Изменяя следующий класс можно манипулировать цветом переключателя:
                                        </p>
                                        <blockquote class="blockquote">
                                            <div class="blockquote-content">
                                                <div class="blockquote-body text-warning">.form-switch-{color}</div>
                                            </div>
                                        </blockquote>
                                        <p>
                                            Список наименований цветов для данного компонента используется в точности, как в <a href="./utilities#colors" class="fw-600">палитре</a>.
                                        </p>
                                    </div>
                                      <div class="col-12">
                                          <div class="row g-3">
                                              <div class="col-auto">
                                                  <div class="form-switch form-switch-primary">
                                                      <input class="form-switch-input" type="checkbox" value="" id="flexSwitchCheckedPrimary" checked>
                                                      <label class="form-switch-label" for="flexSwitchCheckedPrimary">
                                                          Переключатель выбран
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch form-switch-primary">
                                                      <input class="form-switch-input" type="checkbox" value="" id="flexSwitchDisabledPrimary" disabled>
                                                      <label class="form-switch-label" for="flexSwitchDisabledPrimary">
                                                          Переключатель не активен
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch form-switch-primary">
                                                      <input class="form-switch-input" type="checkbox" value="" id="flexSwitchCheckedDisabledPrimary" checked disabled>
                                                      <label class="form-switch-label" for="flexSwitchCheckedDisabledPrimary">
                                                          Переключатель выбран и не активен
                                                      </label>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <div class="row g-3">
                                              <div class="col-auto">
                                                  <div class="form-switch form-switch-success">
                                                      <input class="form-switch-input" type="checkbox" value="" id="flexSwitchCheckedSuccess" checked>
                                                      <label class="form-switch-label" for="flexSwitchCheckedSuccess">
                                                          Переключатель выбран
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch form-switch-success">
                                                      <input class="form-switch-input" type="checkbox" value="" id="flexSwitchDisabledSuccess" disabled>
                                                      <label class="form-switch-label" for="flexSwitchDisabledSuccess">
                                                          Переключатель не активен
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch form-switch-success">
                                                      <input class="form-switch-input" type="checkbox" value="" id="flexSwitchCheckedDisabledSuccess" checked disabled>
                                                      <label class="form-switch-label" for="flexSwitchCheckedDisabledSuccess">
                                                          Переключатель выбран и не активен
                                                      </label>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <div class="row g-3">
                                              <div class="col-auto">
                                                  <div class="form-switch form-switch-danger">
                                                      <input class="form-switch-input" type="checkbox" value="" id="flexSwitchCheckedDanger" checked>
                                                      <label class="form-switch-label" for="flexSwitchCheckedDanger">
                                                          Переключатель выбран
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch form-switch-danger">
                                                      <input class="form-switch-input" type="checkbox" value="" id="flexSwitchDisabledDanger" disabled>
                                                      <label class="form-switch-label" for="flexSwitchDisabledDanger">
                                                          Переключатель не активен
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch form-switch-danger">
                                                      <input class="form-switch-input" type="checkbox" value="" id="flexSwitchCheckedDisabledDanger" checked disabled>
                                                      <label class="form-switch-label" for="flexSwitchCheckedDisabledDanger">
                                                          Переключатель выбран и не активен
                                                      </label>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <div class="row g-3">
                                              <div class="col-auto">
                                                  <div class="form-switch form-switch-warning">
                                                      <input class="form-switch-input" type="checkbox" value="" id="flexSwitchCheckedWarning" checked>
                                                      <label class="form-switch-label" for="flexSwitchCheckedWarning">
                                                          Переключатель выбран
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch form-switch-warning">
                                                      <input class="form-switch-input" type="checkbox" value="" id="flexSwitchDisabledWarning" disabled>
                                                      <label class="form-switch-label" for="flexSwitchDisabledWarning">
                                                          Переключатель не активен
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch form-switch-warning">
                                                      <input class="form-switch-input" type="checkbox" value="" id="flexSwitchCheckedDisabledWarning" checked disabled>
                                                      <label class="form-switch-label" for="flexSwitchCheckedDisabledWarning">
                                                          Переключатель выбран и не активен
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
                                            Существуют вариации переключателя с активным цветом текста, который совпадает с цветом фона чекбокса.
                                        </p>
                                    </div>
                                    <div class="col-12">
                                        <div class="row g-3">
                                            <div class="col-auto">
                                                <div class="form-switch form-switch-primary form-switch-colored">
                                                    <input class="form-switch-input" type="checkbox" value="" id="flexSwitchCheckedPrimary1" checked>
                                                    <label class="form-switch-label" for="flexSwitchCheckedPrimary1">
                                                        Переключатель выбран
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="form-switch form-switch-primary form-switch-colored">
                                                    <input class="form-switch-input" type="checkbox" value="" id="flexSwitchDisabledPrimary1" disabled>
                                                    <label class="form-switch-label" for="flexSwitchDisabledPrimary1">
                                                        Переключатель не активен
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="form-switch form-switch-primary form-switch-colored">
                                                    <input class="form-switch-input" type="checkbox" value="" id="flexSwitchCheckedDisabledPrimary1" checked disabled>
                                                    <label class="form-switch-label" for="flexSwitchCheckedDisabledPrimary1">
                                                        Переключатель выбран и не активен
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
<pre class="hljs html code-body"><code>&lt;div class="form-switch form-switch-primary form-switch-colored"&gt;
    &lt;input class="form-switch-input" type="checkbox" id="switchExample"&gt;
    &lt;label class="form-switch-label" for="switchExample"&gt;
        Переключатель
    &lt;/label&gt;
&lt;/div&gt;</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <p>
                                            Когда переключатель имеет  класс <code class="text-warning">.form-switch-colored</code>, он становится цветным.
                                            Граница <code class="text-warning">border</code> и текст <code class="text-warning">color</code> имеет цвет,  который совпадает с цветом фона переключателя с параметром <code class="text-warning">checked="true"</code>, иначе имеет цвет текста <code class="text-warning">var(--body-text-color);</code>

                                        </p>
                                        <p>
                                            Обратите внимание! <br />
                                            Вариации переключателя с активным цветом текста работают только при использовании класса:
                                        </p>
                                        <blockquote class="blockquote">
                                            <div class="blockquote-content">
                                                <div class="blockquote-body text-warning">.form-switch-colored</div>
                                            </div>
                                        </blockquote>
                                    </div>
                                    <div class="col-12">
                                        <hr />
                                    </div>
                                    <div class="col-12">
                                        <p>
                                            Чтобы зеркально отобразить переключатель, добавьте следующий класс:
                                        </p>
                                        <blockquote class="blockquote">
                                            <div class="blockquote-content">
                                                <div class="blockquote-body text-warning">.form-switch-reverse</div>
                                            </div>
                                        </blockquote>
                                    </div>
                                    <div class="col-12">
                                        <div class="row g-3">
                                            <div class="col-auto">
                                                <div class="form-switch form-switch-reverse">
                                                    <input class="form-switch-input" type="checkbox" value="" id="flexSwitchMirror">
                                                    <label class="form-switch-label" for="flexSwitchMirror">
                                                        Переключатель зеркально
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
                                            Существуют вариации переключателя с выбранным цветом <code class="text-warning">border</code>, который не совпадает с цветом фона переключателя.
                                        </p>
                                    </div>
                                    <div class="col-12">
                                        <div class="row g-3">
                                            <div class="col-auto">
                                                <div class="form-switch form-switch-primary form-switch-outline">
                                                    <input class="form-switch-input" type="checkbox" value="" id="flexSwitchOutlineCheckedPrimary1" checked>
                                                    <label class="form-switch-label" for="flexSwitchOutlineCheckedPrimary1">
                                                        Переключатель выбран
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="form-switch form-switch-primary form-switch-outline">
                                                    <input class="form-switch-input" type="checkbox" value="" id="flexSwitchOutlineDisabledPrimary1" disabled>
                                                    <label class="form-switch-label" for="flexSwitchOutlineDisabledPrimary1">
                                                        Переключатель не активен
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <div class="form-switch form-switch-primary form-switch-outline">
                                                    <input class="form-switch-input" type="checkbox" value="" id="flexSwitchOutlineCheckedDisabledPrimary1" checked disabled>
                                                    <label class="form-switch-label" for="flexSwitchOutlineCheckedDisabledPrimary1">
                                                        Переключатель выбран и не активен
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="code">
                                            <div class="code-content">
                                                <div class="code-title">
                                                    Пример использования
                                                </div>
<pre class="hljs html code-body"><code>&lt;div class="form-switch form-switch-primary form-switch-outline"&gt;
    &lt;input class="form-switch-input" type="checkbox" id="switchExample"&gt;
    &lt;label class="form-switch-label" for="switchExample"&gt;
        Переключатель
    &lt;/label&gt;
&lt;/div&gt;</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <p>
                                            Когда переключатель имеет  класс <code class="text-warning">.form-switch-outline</code>, его <code class="text-warning">border</code> становится цветным, а <code class="text-warning">background-color</code> прозрачным.

                                        </p>
                                        <p>
                                            Обратите внимание! <br />
                                            Вариации переключателя с активным цветом текста работают только при использовании класса:
                                        </p>
                                        <blockquote class="blockquote">
                                            <div class="blockquote-content">
                                                <div class="blockquote-body text-warning">.form-switch-colored</div>
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
