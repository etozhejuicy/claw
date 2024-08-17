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
                                                      <input class="form-check-input" type="radio" value="" id="flexRadioCheckedDanger" checked>
                                                      <label class="form-check-label" for="flexRadioCheckedDanger">
                                                          Радио выбран
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
                                                      <input class="form-check-input" type="radio" value="" id="flexRadioCheckedWarning" checked>
                                                      <label class="form-check-label" for="flexRadioCheckedWarning">
                                                          Радио выбран
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
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  `;
});
