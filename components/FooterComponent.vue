<template>
    <div class="pt-3"></div>
    <section class="faq py-3 py-md-5 mt-3 mt-md-5">
        <div class="container py-3">
            <div class="row">
                <div class="col-md-10 mx-auto">
                    <h2 class="text-center mb-4">Часто задаваемые вопросы</h2>
                    <div class="accordion accordion-flush faq__accordion" id="accordionFaq">
                        <div class="accordion-item">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne" aria-expanded="false">
                                Есть ли в клубе готовые наборы спортивного питания?
                            </button>

                            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to
                                    demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion
                                    body.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo" aria-expanded="false">
                                Как оплатить программу?
                            </button>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFaq">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to
                                    demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion
                                    body. Let's imagine this being filled with some actual content.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree" aria-expanded="false">
                                Что после оплаты? Как получить доступ к оплаченной программе?
                            </button>
                            <div id="flush-collapseThree" class="accordion-collapse collapse"
                                data-bs-parent="#accordionFaq">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to
                                    demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion
                                    body. Nothing more exciting happening here in terms of content, but just filling up the
                                    space to make it look, at least at first glance, a bit more representative of how this
                                    would look in a real-world application.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer class="footer py-4">
        <div class="container">
            <div class="footer__wrap row justify-content-between  align-items-center">
                <div class="footer__copyright col-md-auto">
                    © Рамис Сахибов
                </div>
                <div class="footer__menu col-md-6">
                    <nav class="nav justify-content-center">
                        <nuxt-link class="nav-link text-light" to="/trainings">Тренировки</nuxt-link>
                        <nuxt-link class="nav-link text-light" to="/nutritions">Питание</nuxt-link>
                        <nuxt-link class="nav-link text-light" to="/courses">Курсы</nuxt-link>
                    </nav>
                </div>
                <div class="footer__social d-flex col-md-auto gap-2">
                    <a href="#">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M30.3402 9.60351C27.5969 6.85851 23.9485 5.34517 20.0619 5.34351C12.0502 5.34351 5.53186 11.8585 5.53019 19.8668C5.52686 22.4152 6.19519 24.9202 7.46853 27.1285L5.40686 34.6552L13.1102 32.6352C15.2419 33.7952 17.6285 34.4035 20.0552 34.4035H20.0619C28.0702 34.4035 34.5885 27.8868 34.5919 19.8785C34.5935 15.9985 33.0835 12.3502 30.3402 9.60351Z"
                                stroke="#F52626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M21.8246 22.5998L22.5013 21.9282C23.1229 21.3115 24.1063 21.2332 24.8229 21.7365C25.5163 22.2232 26.1429 22.6598 26.7263 23.0665C27.6529 23.7098 27.7646 25.0298 26.9663 25.8265L26.3679 26.4248"
                                stroke="#F52626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M13.5758 13.6314L14.1741 13.0331C14.9708 12.2364 16.2908 12.3481 16.9341 13.2731C17.3391 13.8564 17.7758 14.4831 18.2641 15.1764C18.7675 15.8931 18.6908 16.8764 18.0725 17.4981L17.4008 18.1747"
                                stroke="#F52626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M26.3679 26.4247C23.8995 28.8814 19.7512 26.7947 16.4762 23.5181" stroke="#F52626"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.4801 23.5233C13.2051 20.2466 11.1184 16.0999 13.5751 13.6316" stroke="#F52626"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M17.4008 18.1746C17.9324 19.0129 18.6141 19.8429 19.3841 20.6129L19.3874 20.6162C20.1574 21.3862 20.9874 22.0679 21.8258 22.5996"
                                stroke="#F52626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                    <a href="#">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12.5 5H27.5067C31.645 5 35 8.355 35 12.4933V27.5083C35 31.645 31.645 35 27.5067 35H12.4933C8.355 35 5 31.645 5 27.5067V12.5C5 8.35833 8.35833 5 12.5 5V5Z"
                                stroke="#F52626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.4994 21.4998H27.4994" stroke="#F52626" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M27.5006 13.9998H25.9256C23.4823 13.9998 21.5006 15.9814 21.5006 18.4248V19.9998V34.9998"
                                stroke="#F52626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                    <a href="#">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12.5 5H27.5067C31.645 5 35 8.355 35 12.4933V27.5083C35 31.645 31.645 35 27.5067 35H12.4933C8.355 35 5 31.645 5 27.5067V12.5C5 8.35833 8.35833 5 12.5 5V5Z"
                                stroke="#F52626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20 23.8032L17.7273 25.811C17.3333 26.1588 16.674 26.0049 16.5144 25.5272L15 21"
                                stroke="#F52626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M22.0275 17.4366C22.0275 17.4366 19.2701 19.9214 17.8557 21.1968C17.4328 21.5776 17.468 22.2477 17.926 22.5849L23.6539 26.811C24.2173 27.2269 25.0225 26.9216 25.1684 26.2366L27.9812 12.9968C28.1175 12.3564 27.4881 11.8214 26.8767 12.0565L10.3523 18.4216C9.86558 18.6088 9.88902 19.3034 10.3864 19.4587L14.7287 20.8117"
                                stroke="#F52626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </a>
                </div>
                
            </div>
        </div>
    </footer>
</template>
