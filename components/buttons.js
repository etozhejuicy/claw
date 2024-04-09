window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#buttons").innerHTML = `
    <div class="row g-3">
    <!-- Кнопки обычные -->
    <div class="col-12">
        <div class="row g-3">
            <div class="col-12">
                <h3 class="h4">
                    Кнопки (обычные)
                </h3>
            </div>
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row g-3">
                            <div class="col-auto">
                                <button type="button" class="btn btn-primary">Кнопка 1</button>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-secondary">Кнопка 2</button>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-danger">Кнопка 3</button>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-warning">Кнопка 4</button>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-success">Кнопка 5</button>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-white">Кнопка 6</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Кнопки с подсветкой -->
    <div class="col-12">
        <div class="row g-3">
            <div class="col-12">
                <h3 class="h-3">
                    Кнопки (с подсветкой)
                </h3>
            </div>
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row g-3">
                            <div class="col-auto">
                                <button type="button" class="btn btn-primary btn-primary-shadow">Кнопка 1 с подсветкой</button>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-secondary btn-secondary-shadow">Кнопка 2 с подсветкой</button>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-danger btn-danger-shadow">Кнопка 3 с подсветкой</button>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-warning btn-warning-shadow">Кнопка 4 с подсветкой</button>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-success btn-success-shadow">Кнопка 5 с подсветкой</button>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-white btn-white-shadow">Кнопка 6 с подсветкой</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Кнопки с обводкой -->
    <div class="col-12">
        <div class="row g-3">
            <div class="col-12">
                <h3 class="h-3">
                    Кнопки (с обводкой)
                </h3>
            </div>
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row g-3">
                            <div class="col-auto">
                                <button type="button" class="btn btn-primary btn-outline-primary">Кнопка 1 с обводкой</button>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-secondary btn-outline-secondary">Кнопка 2 с обводкой</button>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-danger btn-outline-danger">Кнопка 3 с обводкой</button>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-warning btn-outline-warning">Кнопка 4 с обводкой</button>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-success btn-outline-success">Кнопка 5 с обводкой</button>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-white btn-outline-white">Кнопка 6 с обводкой</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Кнопки с обводкой + цвет -->
    <div class="col-12">
        <div class="row g-3">
            <div class="col-12">
                <h3 class="h-3">
                    Кнопки (с обводкой + цвет)
                </h3>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-primary btn-colored btn-outline-primary">Кнопка 1 с обводкой + цвет</button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-secondary btn-colored btn-outline-secondary">Кнопка 2 с обводкой + цвет</button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-danger btn-colored btn-outline-danger">Кнопка 3 с обводкой + цвет</button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-warning btn-colored btn-outline-warning">Кнопка 4 с обводкой + цвет</button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-success btn-colored btn-outline-success">Кнопка 5 с обводкой + цвет</button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-white btn-colored btn-outline-white">Кнопка 6 с обводкой + цвет</button>
            </div>
        </div>
    </div>
    <!-- Кнопки с затемнением -->
    <div class="col-12">
        <div class="row g-3">
            <div class="col-12">
                <h3 class="h-3">
                    Кнопки (с затемнением)
                </h3>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-primary btn-dimmed btn-colored">Кнопка 1 с затемнением + цвет</button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-secondary btn-dimmed btn-colored">Кнопка 2 с затемнением + цвет</button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-danger btn-dimmed btn-colored">Кнопка 3 с затемнением + цвет</button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-warning btn-dimmed btn-colored">Кнопка 4 с затемнением + цвет</button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-success btn-dimmed btn-colored">Кнопка 5 с затемнением + цвет</button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-white btn-dimmed btn-colored">Кнопка 6 с затемнением + цвет</button>
            </div>
        </div>
    </div>
    <!-- Кнопки с иконками -->
    <div class="col-12">
        <div class="row g-3">
            <div class="col-12">
                <h3 class="h4">
                    Кнопки (с иконками)
                </h3>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-icon btn-primary rounded-circle">
                    <!-- Обязательный параметр для svg-элементов  aria-hidden="true" focusable="false" -->
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <path d="M7.55786 14C7.38284 14 7.21704 13.962 7.06045 13.886C6.90386 13.8145 6.74036 13.7006 6.56995 13.5441L3.68221 10.8894C3.63615 10.8536 3.58319 10.8358 3.52332 10.8358H1.56131C1.0593 10.8358 0.672424 10.7017 0.400691 10.4335C0.133564 10.1654 0 9.76983 0 9.24693V6.75978C0 6.24134 0.133564 5.84804 0.400691 5.57989C0.672424 5.31173 1.0593 5.17765 1.56131 5.17765H3.52332C3.58319 5.17765 3.63615 5.15754 3.68221 5.11732L6.56995 2.49609C6.76338 2.32179 6.93149 2.19665 7.07427 2.12067C7.21704 2.04022 7.37363 2 7.54404 2C7.81117 2 8.02763 2.08715 8.19344 2.26145C8.36385 2.43575 8.44905 2.64804 8.44905 2.89832V13.1352C8.44905 13.381 8.36615 13.5866 8.20035 13.752C8.03454 13.9173 7.82038 14 7.55786 14ZM10.9154 10.9698C10.7496 10.8626 10.6528 10.7196 10.6252 10.5408C10.6022 10.362 10.6552 10.1765 10.7841 9.98436C10.9729 9.7162 11.1203 9.41229 11.2263 9.07263C11.3322 8.72849 11.3851 8.36872 11.3851 7.9933C11.3851 7.61788 11.3322 7.2581 11.2263 6.91397C11.1249 6.56983 10.9775 6.26592 10.7841 6.00223C10.6505 5.81453 10.5976 5.63128 10.6252 5.45251C10.6528 5.26927 10.7496 5.12402 10.9154 5.01676C11.0628 4.9229 11.2216 4.89162 11.3921 4.9229C11.5625 4.95419 11.6983 5.04134 11.7997 5.18436C12.0806 5.54637 12.2994 5.97318 12.456 6.4648C12.6125 6.95196 12.6908 7.46145 12.6908 7.9933C12.6908 8.52514 12.6125 9.03464 12.456 9.52179C12.2994 10.0089 12.0806 10.4335 11.7997 10.7955C11.6983 10.943 11.5625 11.0324 11.3921 11.0637C11.2216 11.0905 11.0628 11.0592 10.9154 10.9698ZM13.6718 12.7598C13.5106 12.6615 13.4185 12.5251 13.3955 12.3508C13.3725 12.1721 13.4208 11.9955 13.5406 11.8212C13.9044 11.2939 14.1877 10.7017 14.3903 10.0447C14.593 9.38771 14.6943 8.70391 14.6943 7.9933C14.6943 7.28268 14.593 6.59888 14.3903 5.9419C14.1923 5.28045 13.909 4.68827 13.5406 4.16536C13.4162 3.99106 13.3656 3.81676 13.3886 3.64246C13.4162 3.46369 13.5106 3.32514 13.6718 3.22682C13.8284 3.12849 13.9919 3.09721 14.1623 3.13296C14.3374 3.16425 14.4778 3.25587 14.5838 3.40782C15.0351 4.02011 15.3828 4.72626 15.6269 5.52626C15.8756 6.32179 16 7.14413 16 7.9933C16 8.84246 15.8756 9.6648 15.6269 10.4603C15.3782 11.2514 15.0305 11.9575 14.5838 12.5788C14.4778 12.7307 14.3374 12.8223 14.1623 12.8536C13.9919 12.8849 13.8284 12.8536 13.6718 12.7598Z" fill="#DDDDDD" />
                    </svg>
                </button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-icon btn-secondary rounded-circle">
                    <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <path d="M1.04102 12.7344C0.884766 12.5742 0.779297 12.3867 0.724609 12.1719C0.673828 11.957 0.673828 11.7422 0.724609 11.5273C0.779297 11.3164 0.880859 11.1367 1.0293 10.9883L5.23633 6.77539L1.0293 2.56836C0.880859 2.42383 0.78125 2.24609 0.730469 2.03516C0.679688 1.82031 0.679688 1.60547 0.730469 1.39062C0.78125 1.17578 0.884766 0.988281 1.04102 0.828125C1.20117 0.667969 1.38867 0.5625 1.60352 0.511719C1.82227 0.460938 2.03711 0.460938 2.24805 0.511719C2.45898 0.5625 2.64062 0.662109 2.79297 0.810547L7 5.01758L11.2012 0.816406C11.3574 0.660156 11.541 0.556641 11.752 0.505859C11.9629 0.455078 12.1738 0.457031 12.3848 0.511719C12.5996 0.566406 12.7852 0.673828 12.9414 0.833984C13.1055 0.990234 13.2129 1.17578 13.2637 1.39062C13.3184 1.60156 13.3203 1.81445 13.2695 2.0293C13.2188 2.24414 13.1152 2.42773 12.959 2.58008L8.76367 6.77539L12.959 10.9824C13.1152 11.1348 13.2188 11.3164 13.2695 11.5273C13.3203 11.7422 13.3184 11.9551 13.2637 12.166C13.2129 12.3809 13.1055 12.5684 12.9414 12.7285C12.7852 12.8887 12.5996 12.9961 12.3848 13.0508C12.1738 13.1055 11.9629 13.1074 11.752 13.0566C11.541 13.0059 11.3574 12.9023 11.2012 12.7461L7 8.54492L2.79297 12.752C2.64062 12.8965 2.45898 12.9941 2.24805 13.0449C2.03711 13.0996 1.82422 13.0996 1.60938 13.0449C1.39453 12.9941 1.20508 12.8906 1.04102 12.7344Z" fill="#DDDDDD" />
                    </svg>
                </button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-icon btn-danger rounded-circle">
                    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <use xlink:href="/sprite.svg#play"></use>
                    </svg>
                </button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-icon btn-warning rounded-circle">
                    <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <path d="M10.794 1.86261H5.20732C2.78065 1.86261 1.33398 3.30928 1.33398 5.73594V11.3159C1.33398 13.7493 2.78065 15.1959 5.20732 15.1959H10.7873C13.214 15.1959 14.6607 13.7493 14.6607 11.3226V5.73594C14.6673 3.30928 13.2207 1.86261 10.794 1.86261ZM10.6673 9.02928H8.50065V11.1959C8.50065 11.4693 8.27398 11.6959 8.00065 11.6959C7.72732 11.6959 7.50065 11.4693 7.50065 11.1959V9.02928H5.33398C5.06065 9.02928 4.83398 8.80261 4.83398 8.52928C4.83398 8.25594 5.06065 8.02928 5.33398 8.02928H7.50065V5.86261C7.50065 5.58928 7.72732 5.36261 8.00065 5.36261C8.27398 5.36261 8.50065 5.58928 8.50065 5.86261V8.02928H10.6673C10.9407 8.02928 11.1673 8.25594 11.1673 8.52928C11.1673 8.80261 10.9407 9.02928 10.6673 9.02928Z" fill="#888888" />
                    </svg>
                </button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-icon btn-success rounded-circle">
                    <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <path d="M10.794 1.86261H5.20732C2.78065 1.86261 1.33398 3.30928 1.33398 5.73594V11.3159C1.33398 13.7493 2.78065 15.1959 5.20732 15.1959H10.7873C13.214 15.1959 14.6607 13.7493 14.6607 11.3226V5.73594C14.6673 3.30928 13.2207 1.86261 10.794 1.86261ZM10.6673 9.02928H8.50065V11.1959C8.50065 11.4693 8.27398 11.6959 8.00065 11.6959C7.72732 11.6959 7.50065 11.4693 7.50065 11.1959V9.02928H5.33398C5.06065 9.02928 4.83398 8.80261 4.83398 8.52928C4.83398 8.25594 5.06065 8.02928 5.33398 8.02928H7.50065V5.86261C7.50065 5.58928 7.72732 5.36261 8.00065 5.36261C8.27398 5.36261 8.50065 5.58928 8.50065 5.86261V8.02928H10.6673C10.9407 8.02928 11.1673 8.25594 11.1673 8.52928C11.1673 8.80261 10.9407 9.02928 10.6673 9.02928Z" fill="#888888" />
                    </svg>
                </button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-icon btn-white rounded-circle">
                    <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <path d="M10.794 1.86261H5.20732C2.78065 1.86261 1.33398 3.30928 1.33398 5.73594V11.3159C1.33398 13.7493 2.78065 15.1959 5.20732 15.1959H10.7873C13.214 15.1959 14.6607 13.7493 14.6607 11.3226V5.73594C14.6673 3.30928 13.2207 1.86261 10.794 1.86261ZM10.6673 9.02928H8.50065V11.1959C8.50065 11.4693 8.27398 11.6959 8.00065 11.6959C7.72732 11.6959 7.50065 11.4693 7.50065 11.1959V9.02928H5.33398C5.06065 9.02928 4.83398 8.80261 4.83398 8.52928C4.83398 8.25594 5.06065 8.02928 5.33398 8.02928H7.50065V5.86261C7.50065 5.58928 7.72732 5.36261 8.00065 5.36261C8.27398 5.36261 8.50065 5.58928 8.50065 5.86261V8.02928H10.6673C10.9407 8.02928 11.1673 8.25594 11.1673 8.52928C11.1673 8.80261 10.9407 9.02928 10.6673 9.02928Z" fill="#888888" />
                    </svg>
                </button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-icon btn-vk rounded-circle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <path d="M0 11.52C0 6.08942 1.19209e-07 3.37413 1.68707 1.68707C3.37413 0 6.08942 0 11.52 0H12.48C17.9106 0 20.6259 0 22.3129 1.68707C24 3.37413 24 6.08942 24 11.52V12.48C24 17.9106 24 20.6259 22.3129 22.3129C20.6259 24 17.9106 24 12.48 24H11.52C6.08942 24 3.37413 24 1.68707 22.3129C1.19209e-07 20.6259 0 17.9106 0 12.48V11.52Z" fill="currentColor" />
                        <path d="M12.8126 17.3501C7.40768 17.3501 4.12848 13.5931 4 7.3501H6.73746C6.82279 11.9361 8.90537 13.8794 10.5018 14.279V7.3501H13.1252V11.3078C14.6651 11.1368 16.2769 9.33665 16.8186 7.3501H19.4007C18.9875 9.79294 17.2328 11.5931 15.9931 12.3357C17.2338 12.9361 19.2301 14.5076 20 17.3501H17.1619C16.5626 15.45 15.0946 13.9783 13.1261 13.7785V17.3501H12.8126Z" style="fill:var(--vk)!important" />
                    </svg>
                </button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-icon btn-orange rounded-circle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <path d="M0 11.52C0 6.08942 1.19209e-07 3.37413 1.68707 1.68707C3.37413 0 6.08942 0 11.52 0H12.48C17.9106 0 20.6259 0 22.3129 1.68707C24 3.37413 24 6.08942 24 11.52V12.48C24 17.9106 24 20.6259 22.3129 22.3129C20.6259 24 17.9106 24 12.48 24H11.52C6.08942 24 3.37413 24 1.68707 22.3129C1.19209e-07 20.6259 0 17.9106 0 12.48V11.52Z" fill="currentColor" />
                        <path d="M12.8126 17.3501C7.40768 17.3501 4.12848 13.5931 4 7.3501H6.73746C6.82279 11.9361 8.90537 13.8794 10.5018 14.279V7.3501H13.1252V11.3078C14.6651 11.1368 16.2769 9.33665 16.8186 7.3501H19.4007C18.9875 9.79294 17.2328 11.5931 15.9931 12.3357C17.2338 12.9361 19.2301 14.5076 20 17.3501H17.1619C16.5626 15.45 15.0946 13.9783 13.1261 13.7785V17.3501H12.8126Z" style="fill:var(--orange)!important" />
                    </svg>
                </button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-icon btn-purple rounded-circle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <path d="M0 11.52C0 6.08942 1.19209e-07 3.37413 1.68707 1.68707C3.37413 0 6.08942 0 11.52 0H12.48C17.9106 0 20.6259 0 22.3129 1.68707C24 3.37413 24 6.08942 24 11.52V12.48C24 17.9106 24 20.6259 22.3129 22.3129C20.6259 24 17.9106 24 12.48 24H11.52C6.08942 24 3.37413 24 1.68707 22.3129C1.19209e-07 20.6259 0 17.9106 0 12.48V11.52Z" fill="currentColor" />
                        <path d="M12.8126 17.3501C7.40768 17.3501 4.12848 13.5931 4 7.3501H6.73746C6.82279 11.9361 8.90537 13.8794 10.5018 14.279V7.3501H13.1252V11.3078C14.6651 11.1368 16.2769 9.33665 16.8186 7.3501H19.4007C18.9875 9.79294 17.2328 11.5931 15.9931 12.3357C17.2338 12.9361 19.2301 14.5076 20 17.3501H17.1619C16.5626 15.45 15.0946 13.9783 13.1261 13.7785V17.3501H12.8126Z" style="fill:var(--purple)!important" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <!-- Кнопки с иконками + текст -->
    <div class="col-12">
        <div class="row g-3">
            <div class="col-12">
                <h3 class="h4">
                    Кнопки (с иконками + текст)
                </h3>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-icon btn-primary">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <path d="M7.55786 14C7.38284 14 7.21704 13.962 7.06045 13.886C6.90386 13.8145 6.74036 13.7006 6.56995 13.5441L3.68221 10.8894C3.63615 10.8536 3.58319 10.8358 3.52332 10.8358H1.56131C1.0593 10.8358 0.672424 10.7017 0.400691 10.4335C0.133564 10.1654 0 9.76983 0 9.24693V6.75978C0 6.24134 0.133564 5.84804 0.400691 5.57989C0.672424 5.31173 1.0593 5.17765 1.56131 5.17765H3.52332C3.58319 5.17765 3.63615 5.15754 3.68221 5.11732L6.56995 2.49609C6.76338 2.32179 6.93149 2.19665 7.07427 2.12067C7.21704 2.04022 7.37363 2 7.54404 2C7.81117 2 8.02763 2.08715 8.19344 2.26145C8.36385 2.43575 8.44905 2.64804 8.44905 2.89832V13.1352C8.44905 13.381 8.36615 13.5866 8.20035 13.752C8.03454 13.9173 7.82038 14 7.55786 14ZM10.9154 10.9698C10.7496 10.8626 10.6528 10.7196 10.6252 10.5408C10.6022 10.362 10.6552 10.1765 10.7841 9.98436C10.9729 9.7162 11.1203 9.41229 11.2263 9.07263C11.3322 8.72849 11.3851 8.36872 11.3851 7.9933C11.3851 7.61788 11.3322 7.2581 11.2263 6.91397C11.1249 6.56983 10.9775 6.26592 10.7841 6.00223C10.6505 5.81453 10.5976 5.63128 10.6252 5.45251C10.6528 5.26927 10.7496 5.12402 10.9154 5.01676C11.0628 4.9229 11.2216 4.89162 11.3921 4.9229C11.5625 4.95419 11.6983 5.04134 11.7997 5.18436C12.0806 5.54637 12.2994 5.97318 12.456 6.4648C12.6125 6.95196 12.6908 7.46145 12.6908 7.9933C12.6908 8.52514 12.6125 9.03464 12.456 9.52179C12.2994 10.0089 12.0806 10.4335 11.7997 10.7955C11.6983 10.943 11.5625 11.0324 11.3921 11.0637C11.2216 11.0905 11.0628 11.0592 10.9154 10.9698ZM13.6718 12.7598C13.5106 12.6615 13.4185 12.5251 13.3955 12.3508C13.3725 12.1721 13.4208 11.9955 13.5406 11.8212C13.9044 11.2939 14.1877 10.7017 14.3903 10.0447C14.593 9.38771 14.6943 8.70391 14.6943 7.9933C14.6943 7.28268 14.593 6.59888 14.3903 5.9419C14.1923 5.28045 13.909 4.68827 13.5406 4.16536C13.4162 3.99106 13.3656 3.81676 13.3886 3.64246C13.4162 3.46369 13.5106 3.32514 13.6718 3.22682C13.8284 3.12849 13.9919 3.09721 14.1623 3.13296C14.3374 3.16425 14.4778 3.25587 14.5838 3.40782C15.0351 4.02011 15.3828 4.72626 15.6269 5.52626C15.8756 6.32179 16 7.14413 16 7.9933C16 8.84246 15.8756 9.6648 15.6269 10.4603C15.3782 11.2514 15.0305 11.9575 14.5838 12.5788C14.4778 12.7307 14.3374 12.8223 14.1623 12.8536C13.9919 12.8849 13.8284 12.8536 13.6718 12.7598Z" fill="#DDDDDD" />
                    </svg>
                    <span class="btn-icon-text">Кнопка 1</span>
                </button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-icon btn-secondary">
                    <span class="btn-icon-text">Кнопка 2</span>
                    <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <path d="M1.04102 12.7344C0.884766 12.5742 0.779297 12.3867 0.724609 12.1719C0.673828 11.957 0.673828 11.7422 0.724609 11.5273C0.779297 11.3164 0.880859 11.1367 1.0293 10.9883L5.23633 6.77539L1.0293 2.56836C0.880859 2.42383 0.78125 2.24609 0.730469 2.03516C0.679688 1.82031 0.679688 1.60547 0.730469 1.39062C0.78125 1.17578 0.884766 0.988281 1.04102 0.828125C1.20117 0.667969 1.38867 0.5625 1.60352 0.511719C1.82227 0.460938 2.03711 0.460938 2.24805 0.511719C2.45898 0.5625 2.64062 0.662109 2.79297 0.810547L7 5.01758L11.2012 0.816406C11.3574 0.660156 11.541 0.556641 11.752 0.505859C11.9629 0.455078 12.1738 0.457031 12.3848 0.511719C12.5996 0.566406 12.7852 0.673828 12.9414 0.833984C13.1055 0.990234 13.2129 1.17578 13.2637 1.39062C13.3184 1.60156 13.3203 1.81445 13.2695 2.0293C13.2188 2.24414 13.1152 2.42773 12.959 2.58008L8.76367 6.77539L12.959 10.9824C13.1152 11.1348 13.2188 11.3164 13.2695 11.5273C13.3203 11.7422 13.3184 11.9551 13.2637 12.166C13.2129 12.3809 13.1055 12.5684 12.9414 12.7285C12.7852 12.8887 12.5996 12.9961 12.3848 13.0508C12.1738 13.1055 11.9629 13.1074 11.752 13.0566C11.541 13.0059 11.3574 12.9023 11.2012 12.7461L7 8.54492L2.79297 12.752C2.64062 12.8965 2.45898 12.9941 2.24805 13.0449C2.03711 13.0996 1.82422 13.0996 1.60938 13.0449C1.39453 12.9941 1.20508 12.8906 1.04102 12.7344Z" fill="#DDDDDD" />
                    </svg>
                </button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-icon btn-danger">
                    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <use xlink:href="/sprite.svg#play"></use>
                    </svg>
                    <span class="btn-icon-text">Кнопка 3</span>
                    <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <path d="M10.794 1.86261H5.20732C2.78065 1.86261 1.33398 3.30928 1.33398 5.73594V11.3159C1.33398 13.7493 2.78065 15.1959 5.20732 15.1959H10.7873C13.214 15.1959 14.6607 13.7493 14.6607 11.3226V5.73594C14.6673 3.30928 13.2207 1.86261 10.794 1.86261ZM10.6673 9.02928H8.50065V11.1959C8.50065 11.4693 8.27398 11.6959 8.00065 11.6959C7.72732 11.6959 7.50065 11.4693 7.50065 11.1959V9.02928H5.33398C5.06065 9.02928 4.83398 8.80261 4.83398 8.52928C4.83398 8.25594 5.06065 8.02928 5.33398 8.02928H7.50065V5.86261C7.50065 5.58928 7.72732 5.36261 8.00065 5.36261C8.27398 5.36261 8.50065 5.58928 8.50065 5.86261V8.02928H10.6673C10.9407 8.02928 11.1673 8.25594 11.1673 8.52928C11.1673 8.80261 10.9407 9.02928 10.6673 9.02928Z" fill="#888888" />
                    </svg>
                </button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-icon btn-warning">
                    <span class="btn-icon-text">Кнопка 4</span>
                    <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <path d="M10.794 1.86261H5.20732C2.78065 1.86261 1.33398 3.30928 1.33398 5.73594V11.3159C1.33398 13.7493 2.78065 15.1959 5.20732 15.1959H10.7873C13.214 15.1959 14.6607 13.7493 14.6607 11.3226V5.73594C14.6673 3.30928 13.2207 1.86261 10.794 1.86261ZM10.6673 9.02928H8.50065V11.1959C8.50065 11.4693 8.27398 11.6959 8.00065 11.6959C7.72732 11.6959 7.50065 11.4693 7.50065 11.1959V9.02928H5.33398C5.06065 9.02928 4.83398 8.80261 4.83398 8.52928C4.83398 8.25594 5.06065 8.02928 5.33398 8.02928H7.50065V5.86261C7.50065 5.58928 7.72732 5.36261 8.00065 5.36261C8.27398 5.36261 8.50065 5.58928 8.50065 5.86261V8.02928H10.6673C10.9407 8.02928 11.1673 8.25594 11.1673 8.52928C11.1673 8.80261 10.9407 9.02928 10.6673 9.02928Z" fill="#888888" />
                    </svg>
                </button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-icon btn-success">
                    <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <path d="M10.794 1.86261H5.20732C2.78065 1.86261 1.33398 3.30928 1.33398 5.73594V11.3159C1.33398 13.7493 2.78065 15.1959 5.20732 15.1959H10.7873C13.214 15.1959 14.6607 13.7493 14.6607 11.3226V5.73594C14.6673 3.30928 13.2207 1.86261 10.794 1.86261ZM10.6673 9.02928H8.50065V11.1959C8.50065 11.4693 8.27398 11.6959 8.00065 11.6959C7.72732 11.6959 7.50065 11.4693 7.50065 11.1959V9.02928H5.33398C5.06065 9.02928 4.83398 8.80261 4.83398 8.52928C4.83398 8.25594 5.06065 8.02928 5.33398 8.02928H7.50065V5.86261C7.50065 5.58928 7.72732 5.36261 8.00065 5.36261C8.27398 5.36261 8.50065 5.58928 8.50065 5.86261V8.02928H10.6673C10.9407 8.02928 11.1673 8.25594 11.1673 8.52928C11.1673 8.80261 10.9407 9.02928 10.6673 9.02928Z" fill="#888888" />
                    </svg>
                    <span class="btn-icon-text">Кнопка 5</span>
                </button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-icon btn-white">
                    <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <path d="M10.794 1.86261H5.20732C2.78065 1.86261 1.33398 3.30928 1.33398 5.73594V11.3159C1.33398 13.7493 2.78065 15.1959 5.20732 15.1959H10.7873C13.214 15.1959 14.6607 13.7493 14.6607 11.3226V5.73594C14.6673 3.30928 13.2207 1.86261 10.794 1.86261ZM10.6673 9.02928H8.50065V11.1959C8.50065 11.4693 8.27398 11.6959 8.00065 11.6959C7.72732 11.6959 7.50065 11.4693 7.50065 11.1959V9.02928H5.33398C5.06065 9.02928 4.83398 8.80261 4.83398 8.52928C4.83398 8.25594 5.06065 8.02928 5.33398 8.02928H7.50065V5.86261C7.50065 5.58928 7.72732 5.36261 8.00065 5.36261C8.27398 5.36261 8.50065 5.58928 8.50065 5.86261V8.02928H10.6673C10.9407 8.02928 11.1673 8.25594 11.1673 8.52928C11.1673 8.80261 10.9407 9.02928 10.6673 9.02928Z" fill="#888888" />
                    </svg>
                    <span class="btn-icon-text">Кнопка 6</span>
                </button>
            </div>
        </div>
    </div>
    <!-- Кнопки с иконками + прогресс -->
    <div class="col-12">
        <div class="row g-3">
            <div class="col-12">
                <h3 class="h4">
                    Кнопки (с иконками + прогресс)
                </h3>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-icon btn-primary btn-rounded btn-progress">
                    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <use xlink:href="/sprite.svg#play"></use>
                    </svg>
                    <div class="btn-progress-round"></div>
                </button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-icon btn-outline-secondary btn-rounded btn-progress">
                    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <use xlink:href="/sprite.svg#play"></use>
                    </svg>
                    <div class="btn-progress-round"></div>
                </button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-icon btn-danger btn-dimmed btn-warning-shadow btn-voluminous btn-rounded btn-progress">
                    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <use xlink:href="/sprite.svg#play"></use>
                    </svg>
                    <div class="btn-progress-round"></div>
                </button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-icon btn-warning btn-rounded btn-progress">
                    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <use xlink:href="/sprite.svg#play"></use>
                    </svg>
                    <div class="btn-progress-round"></div>
                </button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-icon btn-success btn-progress btn-rounded">
                    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <use xlink:href="/sprite.svg#play"></use>
                    </svg>
                    <div class="btn-progress-round"></div>
                </button>
            </div>
        </div>
    </div>
    
    <!-- Кнопки с иконками + прогресс + прелоадер -->
    <div class="col-12">
        <div class="row g-3">
            <div class="col-12">
                <h3 class="h4">
                    Кнопки (с иконками + прогресс + прелоадер)
                </h3>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-icon btn-primary btn-progress btn-rounded">
                    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <use xlink:href="/sprite.svg#play"></use>
                    </svg>
                    <div class="btn-progress-spinner">
                        <div class="spinner-border text-black" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    <div class="btn-progress-round"></div>
                </button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-icon btn-secondary btn-progress btn-rounded">
                    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <use xlink:href="/sprite.svg#play"></use>
                    </svg>
                    <div class="btn-progress-spinner">
                        <div class="spinner-border text-white" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    <div class="btn-progress-round"></div>
                </button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-icon btn-success btn-progress btn-rounded">
                    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <use xlink:href="/sprite.svg#play"></use>
                    </svg>
                    <div class="btn-progress-spinner">
                        <div class="spinner-border text-white" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    <div class="btn-progress-round"></div>
                </button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-icon btn-danger btn-progress btn-rounded">
                    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <use xlink:href="/sprite.svg#play"></use>
                    </svg>
                    <div class="btn-progress-spinner">
                        <div class="spinner-border text-white" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    <div class="btn-progress-round"></div>
                </button>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-icon btn-warning btn-progress btn-rounded">
                    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <use xlink:href="/sprite.svg#play"></use>
                    </svg>
                    <div class="btn-progress-spinner">
                        <div class="spinner-border text-black" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    <div class="btn-progress-round"></div>
                </button>
            </div>
        </div>
    </div>
    </div>
  `;
});
