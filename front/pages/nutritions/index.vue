<template>
    <div>
        <div class="bg-dark">
            <div class="container">
                <div class="d-flex flex-column align-items-sm-center justify-content-center gap-4 gap-am-5">
                    <nuxt-link to="/" class="page-nav">
                        <svg width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 4H19M1 4L4 1M1 4L4 7" stroke="currentColor"/>
                        </svg>
                        На главную
                    </nuxt-link>
                    <h1 class="text-uppercase">Питание</h1>
                    <p>{{ nutrions.description }}</p>

                    <section class="traning pt-lg-5">
                        <ul class="nav nav-tabs tab-gender pt-2 justify-content-center" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#training-man"
                                        type="button" role="tab" aria-selected="true">Для мужчин
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#training-woman"
                                        type="button"
                                        role="tab" aria-selected="false">Для женщин
                                </button>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="training__programs">
                <section class="">
                    <div class="tab-content" id="training">
                        <div class="tab-pane fade show active" id="training-man" role="tabpanel" tabindex="0">
                            <!-- second tab nav -->
                            <div class="row gy-4">
                                <div v-for="nut in nutrition" class="col-6 col-md-4">
                                    <!-- service-item -->
                                    <nuxt-link :to="'/nutritions/' + nut.id" class="service">
                                        <img class="img-fluid" :src="nut.media.images.full || '/_nuxt/assets/img/services/service_man.jpg'" alt="">
                                        <div class="service__wrapper">

                                            <h3 class="service__title">{{ nut.title }}</h3>
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="15" cy="15" r="15" fill="#F52626"/>
                                                <path d="M13 9L19 15L13 21" stroke="white" stroke-width="2"
                                                      stroke-linejoin="round"/>
                                            </svg>

                                        </div>
                                    </nuxt-link>
                                    <!-- end service-item -->
                                </div>
                            </div>
                            <!-- sub man tab 2 -->
                        </div>
                        <!-- woman tab -->
                        <div class="tab-pane fade" id="training-woman" role="tabpanel" tabindex="0">
                            <div class="row gy-4">
                                <div v-for="nut in nutrition_w" class="col-6 col-md-4">
                                    <!-- service-item -->
                                    <nuxt-link :to="'/nutritions/' + nut.id" class="service">
                                        <img class="img-fluid" :src="nut.media.images.full || '/_nuxt/assets/img/services/junior_woman.jpg'" alt="">
                                        <div class="service__wrapper">

                                            <h3 class="service__title">{{ nut.title }}</h3>
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="15" cy="15" r="15" fill="#F52626"/>
                                                <path d="M13 9L19 15L13 21" stroke="white" stroke-width="2"
                                                      stroke-linejoin="round"/>
                                            </svg>

                                        </div>
                                    </nuxt-link>
                                    <!-- end service-item -->
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <a class="btn btn-primary button mt-5" href="#">Заказать индивидуальную программу</a>
            </div>
            <div class="program__video">
                <h2>Ошибки новичков</h2>
            </div>
            <section class="video pb-3 pb-md-5">
                <div class="container">
                    <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/dvkozMW37Qc?rel=0" title="YouTube video"
                                allowfullscreen></iframe>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts" setup>

import {nutrions} from "~/data";

useHead({
    title: "Питание | FitBody",
    meta: [
        {name: "description", content: ""}
    ]
})

const nutrition = computed(() => nutrions.plans.filter((i: {
    type: string; complexity: string;
}) => i.type == 'men'))
const nutrition_w = computed(() => nutrions.plans.filter((i: {
    type: string; complexity: string;
}) => i.type == 'women'))

</script>

<style scoped></style>