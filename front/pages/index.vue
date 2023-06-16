<template>
    <div class="container">

        <section class="promo">
            <div class="promo__wrapper row align-items-center">
                <div class="promo__image col-lg-5 col-xl-6 order-lg-last text-lg-end">
                    <img class="img-fluid" src="~/assets/img/promo_bg.png" alt="">
                </div>
                <div class="promo__text col-lg-7 col-xl-6">
                    <h1>ЖИРОСЖИГАНИЕ <br>и РОСТ МЫШЦ <span>НАУЧНЫЙ ПОДХОД</span></h1>
                    <div class="promo__text">
                        Здесь представлены самые эффективные методы тренировок, которые пропущены через призму БИОМЕХАНИКИ,
                        АНАТОМИИ мышц и ФИЗИОЛОГИИ мышечной деятельности
                    </div>

                    <a class="btn btn-primary button" href="#">Выбрать программу тренировок</a>
                </div>

            </div>
        </section>
        <!-- traiing -->
        <section class="traning py-3 py-lg-5 ">
            <h2 class="text-center mb-4">Тренировки</h2>
            <ul class="nav nav-tabs tab-gender pt-2 justify-content-center mb-4" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#training-man" type="button"
                        role="tab" aria-selected="true">Для мужчин</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#training-woman" type="button"
                        role="tab"  aria-selected="false">Для женщин</button>
                </li>
            </ul>
            <!-- tab1 -->
            <div class="tab-content" id="training">
                <div class="tab-pane fade show active" id="training-man" role="tabpanel" tabindex="0">


                    <div class="row justify-content-center">
                        <div class="col-6 col-md-4">
                            <!-- service-item -->
                            <a href="#" class="service">
                                <img class="img-fluid" src="@/assets/img/services/service_man.jpg" alt="">
                                <div class="service__wrapper">

                                    <h3 class="service__title">НОВИЧКИ</h3>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#F52626" />
                                        <path d="M13 9L19 15L13 21" stroke="white" stroke-width="2"
                                            stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </a>
                            <!-- end service-item -->
                        </div>
                        <div class="col-6 col-md-4">
                            <!-- service-item -->
                            <a href="#" class="service">
                                <img class="img-fluid" src="@/assets/img/services/service_man.jpg" alt="">
                                <div class="service__wrapper">

                                    <h3 class="service__title">ОПЫТНЫЕ</h3>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#F52626" />
                                        <path d="M13 9L19 15L13 21" stroke="white" stroke-width="2"
                                            stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </a>
                            <!-- end service-item -->
                        </div>
                    </div>


                </div>
                <!-- tab2 -->
                <div class="tab-pane fade" id="training-woman" role="tabpanel" tabindex="0">
                    
                    <div class="row justify-content-center">
                        <div class="col-6 col-md-4">
                            <!-- service-item -->
                            <a href="#" class="service">
                                <img class="img-fluid" src="@/assets/img/services/service_woman.jpg" alt="">
                                <div class="service__wrapper">

                                    <h3 class="service__title">НОВИЧКИ</h3>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#F52626" />
                                        <path d="M13 9L19 15L13 21" stroke="white" stroke-width="2"
                                            stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </a>
                            <!-- end service-item -->
                        </div>
                        <div class="col-6 col-md-4">
                            <!-- service-item -->
                            <a href="#" class="service">
                                <img class="img-fluid" src="@/assets/img/services/service_woman.jpg" alt="">
                                <div class="service__wrapper">

                                    <h3 class="service__title">ОПЫТНЫЕ</h3>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#F52626" />
                                        <path d="M13 9L19 15L13 21" stroke="white" stroke-width="2"
                                            stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </a>
                            <!-- end service-item -->
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <!-- training end -->

        <!-- nutrition  -->
        <section class="nutrition py-3 py-lg-5 ">
            <h2 class="text-center mb-4">Питание</h2>
            <ul class="nav nav-tabs tab-gender pt-2 justify-content-center mb-4" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#nutrition-man" type="button"
                        role="tab" aria-selected="true">Для мужчин</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#nutrition-woman" type="button"
                        role="tab" aria-selected="false">Для женщин</button>
                </li>
            </ul>
            <!-- tab1 -->
            <div class="tab-content" id="nutrition">
                <div class="tab-pane fade show active" id="nutrition-man" role="tabpanel" tabindex="0">


                    <div class="row justify-content-center">
                        <div class="col-6 col-md-4">
                            <!-- service-item -->
                            <a href="#" class="service">
                                <img class="img-fluid" src="@/assets/img/services/service_man.jpg" alt="">
                                <div class="service__wrapper">

                                    <h3 class="service__title">НОВИЧКИ</h3>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#F52626" />
                                        <path d="M13 9L19 15L13 21" stroke="white" stroke-width="2"
                                            stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </a>
                            <!-- end service-item -->
                        </div>
                        <div class="col-6 col-md-4">
                            <!-- service-item -->
                            <a href="#" class="service">
                                <img class="img-fluid" src="@/assets/img/services/service_man.jpg" alt="">
                                <div class="service__wrapper">

                                    <h3 class="service__title">ОПЫТНЫЕ</h3>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#F52626" />
                                        <path d="M13 9L19 15L13 21" stroke="white" stroke-width="2"
                                            stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </a>
                            <!-- end service-item -->
                        </div>
                    </div>


                </div>
                <!-- tab2 -->
                <div class="tab-pane fade" id="nutrition-woman" role="tabpanel" tabindex="0">
                    
                    <div class="row justify-content-center">
                        <div class="col-6 col-md-4">
                            <!-- service-item -->
                            <a href="#" class="service">
                                <img class="img-fluid" src="@/assets/img/services/service_woman.jpg" alt="">
                                <div class="service__wrapper">

                                    <h3 class="service__title">НОВИЧКИ</h3>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#F52626" />
                                        <path d="M13 9L19 15L13 21" stroke="white" stroke-width="2"
                                            stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </a>
                            <!-- end service-item -->
                        </div>
                        <div class="col-6 col-md-4">
                            <!-- service-item -->
                            <a href="#" class="service">
                                <img class="img-fluid" src="@/assets/img/services/service_woman.jpg" alt="">
                                <div class="service__wrapper">

                                    <h3 class="service__title">ОПЫТНЫЕ</h3>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#F52626" />
                                        <path d="M13 9L19 15L13 21" stroke="white" stroke-width="2"
                                            stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </a>
                            <!-- end service-item -->
                        </div>
                    </div>

                </div>
            </div>
        </section>

         <!-- courses  -->
         <section class="courses py-3 py-lg-5 ">
            <h2 class="text-center mb-4">Курсы</h2>
            <ul class="nav nav-tabs tab-gender pt-2 justify-content-center mb-4" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#courses-man" type="button"
                        role="tab" aria-selected="true">Для мужчин</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#courses-woman" type="button"
                        role="tab" aria-selected="false">Для женщин</button>
                </li>
            </ul>
            <!-- tab1 -->
            <div class="tab-content" id="courses">
                <div class="tab-pane fade show active" id="courses-man" role="tabpanel" tabindex="0">


                    <div class="row justify-content-center">
                        <div class="col-6 col-md-4">
                            <!-- service-item -->
                            <a href="#" class="service">
                                <img class="img-fluid" src="@/assets/img/services/service_man.jpg" alt="">
                                <div class="service__wrapper">

                                    <div>
                                        <h3 class="service__title">НОВИЧКИ</h3>
                                        <p>что нужно знать и делать, чтобы накачать большие грудные мышцы</p>
                                    </div>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#F52626" />
                                        <path d="M13 9L19 15L13 21" stroke="white" stroke-width="2"
                                            stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </a>
                            <!-- end service-item -->
                        </div>
                        <div class="col-6 col-md-4">
                            <!-- service-item -->
                            <a href="#" class="service">
                                <img class="img-fluid" src="@/assets/img/services/service_man.jpg" alt="">
                                <div class="service__wrapper">

                                    <div>
                                        <h3 class="service__title">НОВИЧКИ</h3>
                                        <p>что нужно знать и делать, чтобы накачать большие грудные мышцы</p>
                                    </div>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#F52626" />
                                        <path d="M13 9L19 15L13 21" stroke="white" stroke-width="2"
                                            stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </a>
                            <!-- end service-item -->
                        </div>
                    </div>


                </div>
                <!-- tab2 -->
                <div class="tab-pane fade" id="courses-woman" role="tabpanel" tabindex="0">
                    
                    <div class="row justify-content-center">
                        <div class="col-6 col-md-4">
                            <!-- service-item -->
                            <a href="#" class="service">
                                <img class="img-fluid" src="@/assets/img/services/service_woman.jpg" alt="">
                                <div class="service__wrapper">

                                    <div>
                                        <h3 class="service__title">НОВИЧКИ</h3>
                                        <p>что нужно знать и делать, чтобы накачать большие грудные мышцы</p>
                                    </div>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#F52626" />
                                        <path d="M13 9L19 15L13 21" stroke="white" stroke-width="2"
                                            stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </a>
                            <!-- end service-item -->
                        </div>
                        <div class="col-6 col-md-4">
                            <!-- service-item -->
                            <a href="#" class="service">
                                <img class="img-fluid" src="@/assets/img/services/service_woman.jpg" alt="">
                                <div class="service__wrapper">

                                    <div>
                                        <h3 class="service__title">НОВИЧКИ</h3>
                                        <p>что нужно знать и делать, чтобы накачать большие грудные мышцы</p>
                                    </div>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#F52626" />
                                        <path d="M13 9L19 15L13 21" stroke="white" stroke-width="2"
                                            stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </a>
                            <!-- end service-item -->
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss"></style>