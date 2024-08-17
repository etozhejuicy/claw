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
                                              Свитчи
                                          </h5>
                                      </div>
                                      <div class="col-12">
                                          <div class="row g-3">
                                              <div class="col-auto">
                                                  <div class="form-switch">
                                                      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                                                      <label class="form-check-label" for="flexCheckChecked">
                                                          Свитч выбран
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch">
                                                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled>
                                                      <label class="form-check-label" for="flexCheckDisabled">
                                                          Свитч не активен
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch">
                                                      <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled>
                                                      <label class="form-check-label" for="flexCheckCheckedDisabled">
                                                          Свитч выбран и не активен
                                                      </label>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <p>
                                              Здесь будет описание структуры Свитчов и почему они имеют такую структуру
                                          </p>
                                      </div>
                                      <div class="col-12">
                                          <div class="row g-3">
                                              <div class="col-auto">
                                                  <div class="form-switch form-check-primary">
                                                      <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedPrimary" checked>
                                                      <label class="form-check-label" for="flexCheckCheckedPrimary">
                                                          Свитч выбран
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch form-check-primary">
                                                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabledPrimary" disabled>
                                                      <label class="form-check-label" for="flexCheckDisabledPrimary">
                                                          Свитч не активен
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch form-check-primary">
                                                      <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabledPrimary" checked disabled>
                                                      <label class="form-check-label" for="flexCheckCheckedDisabledPrimary">
                                                          Свитч выбран и не активен
                                                      </label>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <div class="row g-3">
                                              <div class="col-auto">
                                                  <div class="form-switch form-check-success">
                                                      <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedSuccess" checked>
                                                      <label class="form-check-label" for="flexCheckCheckedSuccess">
                                                          Свитч выбран
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch form-check-success">
                                                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabledSuccess" disabled>
                                                      <label class="form-check-label" for="flexCheckDisabledSuccess">
                                                          Свитч не активен
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch form-check-success">
                                                      <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabledSuccess" checked disabled>
                                                      <label class="form-check-label" for="flexCheckCheckedDisabledSuccess">
                                                          Свитч выбран и не активен
                                                      </label>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <div class="row g-3">
                                              <div class="col-auto">
                                                  <div class="form-switch form-check-danger">
                                                      <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDanger" checked>
                                                      <label class="form-check-label" for="flexCheckCheckedDanger">
                                                          Свитч выбран
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch form-check-danger">
                                                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabledDanger" disabled>
                                                      <label class="form-check-label" for="flexCheckDisabledDanger">
                                                          Свитч не активен
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch form-check-danger">
                                                      <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabledDanger" checked disabled>
                                                      <label class="form-check-label" for="flexCheckCheckedDisabledDanger">
                                                          Свитч выбран и не активен
                                                      </label>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <div class="row g-3">
                                              <div class="col-auto">
                                                  <div class="form-switch form-check-warning">
                                                      <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedWarning" checked>
                                                      <label class="form-check-label" for="flexCheckCheckedWarning">
                                                          Свитч выбран
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch form-check-warning">
                                                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabledWarning" disabled>
                                                      <label class="form-check-label" for="flexCheckDisabledWarning">
                                                          Свитч не активен
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch form-check-warning">
                                                      <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabledWarning" checked disabled>
                                                      <label class="form-check-label" for="flexCheckCheckedDisabledWarning">
                                                          Свитч выбран и не активен
                                                      </label>
                                                  </div>
                                              </div>
                                          </div>
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
