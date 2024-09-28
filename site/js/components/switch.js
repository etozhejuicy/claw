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
                                                      <input class="form-switch-input" type="checkbox" value="" id="flexSwitchChecked" checked>
                                                      <label class="form-switch-label" for="flexSwitchChecked">
                                                          Свитч выбран
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch">
                                                      <input class="form-switch-input" type="checkbox" value="" id="flexSwitchDisabled" disabled>
                                                      <label class="form-switch-label" for="flexSwitchDisabled">
                                                          Свитч не активен
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch">
                                                      <input class="form-switch-input" type="checkbox" value="" id="flexSwitchCheckedDisabled" checked disabled>
                                                      <label class="form-switch-label" for="flexSwitchCheckedDisabled">
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
                                                  <div class="form-switch form-switch-primary">
                                                      <input class="form-switch-input" type="checkbox" value="" id="flexSwitchCheckedPrimary" checked>
                                                      <label class="form-switch-label" for="flexSwitchCheckedPrimary">
                                                          Свитч выбран
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch form-switch-primary">
                                                      <input class="form-switch-input" type="checkbox" value="" id="flexSwitchDisabledPrimary" disabled>
                                                      <label class="form-switch-label" for="flexSwitchDisabledPrimary">
                                                          Свитч не активен
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch form-switch-primary">
                                                      <input class="form-switch-input" type="checkbox" value="" id="flexSwitchCheckedDisabledPrimary" checked disabled>
                                                      <label class="form-switch-label" for="flexSwitchCheckedDisabledPrimary">
                                                          Свитч выбран и не активен
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
                                                          Свитч выбран
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch form-switch-success">
                                                      <input class="form-switch-input" type="checkbox" value="" id="flexSwitchDisabledSuccess" disabled>
                                                      <label class="form-switch-label" for="flexSwitchDisabledSuccess">
                                                          Свитч не активен
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch form-switch-success">
                                                      <input class="form-switch-input" type="checkbox" value="" id="flexSwitchCheckedDisabledSuccess" checked disabled>
                                                      <label class="form-switch-label" for="flexSwitchCheckedDisabledSuccess">
                                                          Свитч выбран и не активен
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
                                                          Свитч выбран
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch form-switch-danger">
                                                      <input class="form-switch-input" type="checkbox" value="" id="flexSwitchDisabledDanger" disabled>
                                                      <label class="form-switch-label" for="flexSwitchDisabledDanger">
                                                          Свитч не активен
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch form-switch-danger">
                                                      <input class="form-switch-input" type="checkbox" value="" id="flexSwitchCheckedDisabledDanger" checked disabled>
                                                      <label class="form-switch-label" for="flexSwitchCheckedDisabledDanger">
                                                          Свитч выбран и не активен
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
                                                          Свитч выбран
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch form-switch-warning">
                                                      <input class="form-switch-input" type="checkbox" value="" id="flexSwitchDisabledWarning" disabled>
                                                      <label class="form-switch-label" for="flexSwitchDisabledWarning">
                                                          Свитч не активен
                                                      </label>
                                                  </div>
                                              </div>
                                              <div class="col-auto">
                                                  <div class="form-switch form-switch-warning">
                                                      <input class="form-switch-input" type="checkbox" value="" id="flexSwitchCheckedDisabledWarning" checked disabled>
                                                      <label class="form-switch-label" for="flexSwitchCheckedDisabledWarning">
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
