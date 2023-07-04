<template>
    <main class="page">
        <section class="promo page__promo py-3 py-md-5">
            <div class="container py-3">
                <div class="promo__wrapper row align-items-center">
                    <div class="promo__image col-lg-5 col-xl-5 order-lg-last text-lg-end">
                        <img :src="current_course.media.images.full || '/_nuxt/assets/img/services/page_img.jpg' " alt="">
                    </div>
                    <div class="promo__text col-lg-7 col-xl-7">
                        <button @click="this.$router.go(-1)" class="page-nav">
                            <svg width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4H19M1 4L4 1M1 4L4 7" stroke="currentColor" />
                            </svg>
                            Назад
                        </button>
                        <h1>{{ current_course.title }}</h1>
                        <div class="promo__text">
                            {{ current_course.description }}
                        </div>

                        <button class="btn btn-primary button">Купить за {{current_course.price}} тыс. сум</button>
                    </div>

                </div>
            </div>
        </section>

        <div class="container">
            <section class="page__desc">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <h2>О ПРОГРАММЕ</h2>
                        <div v-html="current_course.about_program"></div>

                        <button class="btn btn-primary button mt-4">Купить за {{ current_course.price }} тыс. сум</button>

                    </div>
                </div>
            </section>

            <section class="others">
                <h3 class="others__header">С этой программой также покупают</h3>
                <div class="py-4">
                    <h2 class="text-center mb-md-4">Питание</h2>
                    <div class="row justify-content-center">
                        <div v-for="nutrition in others.splice(0, 2)" class="col-6 col-md-4">
                            <!-- service-item -->
                            <nuxt-link :to="'/nutritions/' + nutrition.id" class="service">
                                <img class="img-fluid" src="@/assets/img/services/service_man.jpg" alt="">
                                <div class="service__wrapper">

                                    <h3 class="service__title">{{ nutrition.title }}</h3>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#F52626" />
                                        <path d="M13 9L19 15L13 21" stroke="white" stroke-width="2"
                                            stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </nuxt-link>
                            <!-- end service-item -->
                        </div>
                    </div>
                </div>

                <div class="py-4">
                    <h2 class="text-center mb-md-4">Тренировки</h2>
                    <div class="row justify-content-center">
                        <div v-for="train in others_trainings.splice(0, 2)" class="col-6 col-md-4">
                            <!-- service-item -->
                            <nuxt-link :to="'/trainings/' + train.id" class="service">
                                <img class="img-fluid" src="@/assets/img/services/service_man.jpg" alt="">
                                <div class="service__wrapper">

                                    <div>
                                        <h3 class="service__title">{{ train.title }}</h3>
                                    </div>
                                    <svg class="align-self-end" width="30" height="30" viewBox="0 0 30 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#F52626" />
                                        <path d="M13 9L19 15L13 21" stroke="white" stroke-width="2"
                                            stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </nuxt-link>
                            <!-- end service-item -->
                        </div>
                    </div>

                    <button class="btn btn-link btn-more">
                        Посмотреть все курсы
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="8" transform="rotate(90 8 8)" fill="#F52626" />
                            <path d="M11 7L8 10L5 7" stroke="white" stroke-width="0.933333" stroke-linejoin="round" />
                        </svg>

                    </button>
                </div>
            </section>
        </div>
    </main>
</template>

<script setup lang="ts">

import {courses, nutrions, trainings} from "~/data";
const route = useRoute()

const current_course = computed(() => courses.trains.find((i: { id: number; }) => i.id === +route.params.slug))
const others = ref(nutrions.plans.filter((i: { type: any; }) => i.type === current_course.value.type))
const others_trainings = ref(trainings.trains.filter((i: { type: any; }) => i.type === current_course.value.type))
</script>