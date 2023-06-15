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

        <section class="services py-3 py-lg-5 ">
            <h2 class="text-center mb-4">Тренировки</h2>
            <ul class="nav nav-tabs tab-gender pt-2 justify-content-center mb-4" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button"
                        role="tab" aria-controls="home-tab-pane" aria-selected="true">Для мужчин</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button"
                        role="tab" aria-controls="profile-tab-pane" aria-selected="false">Для женщин</button>
                </li>
            </ul>

            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" tabindex="0">


                    <div class="row justify-content-center">
                        <div class="col-6 col-md-4">
                            <!-- service-item -->
                            <a href="#" class="service">
                                <img class="img-fluid" src="@/assets/img/services/service_img.jpg" alt="">
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
                                <img class="img-fluid" src="@/assets/img/services/service_img.jpg" alt="">
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
                <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" tabindex="0">
                    ...</div>
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss"></style>